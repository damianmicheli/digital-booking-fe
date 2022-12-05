package com.backend.service;

import com.backend.dto.CategoriaDTO;
import com.backend.entity.Categoria;
import com.backend.repository.ICategoriaRepository;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService implements ICategoriaService{

    private final Logger logger = Logger.getLogger(CategoriaService.class);

    @Autowired
    private ICategoriaRepository categoriaRepository;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public CategoriaDTO guardar(CategoriaDTO categoriaDTO) {

        Categoria categoria = mapper.convertValue(categoriaDTO, Categoria.class);

        Categoria categoriaGuardado = categoriaRepository.save(categoria);

        CategoriaDTO categoriaDTOGuardado = mapper.convertValue(categoriaGuardado,CategoriaDTO.class);

        logger.info("Se guardó la categoria: " + categoriaDTOGuardado);

        return categoriaDTOGuardado;    }

    @Override
    public CategoriaDTO buscar(Long id) throws NoEncontradoException {
        Optional<Categoria> categoria = categoriaRepository.findById(id);

        if (categoria.isEmpty()){
            throw new NoEncontradoException("Categoria con Id " + id + " no encontrada.");
        }

        CategoriaDTO categoriaDTOBuscada = mapper.convertValue(categoria,CategoriaDTO.class);

        logger.info("Se buscó por Id la categoria: " + categoriaDTOBuscada);

        return categoriaDTOBuscada;    }

    @Override
    public List<CategoriaDTO> listarTodos() {

        List<Categoria> categorias = categoriaRepository.findAll();
        List<CategoriaDTO> categoriasDTO = new ArrayList<>();

        for (Categoria categoria : categorias){
            categoriasDTO.add(mapper.convertValue(categoria, CategoriaDTO.class));
        }

        logger.info("Se listaron todas las categorias.");

        return categoriasDTO;
    }


    @Override
    public void eliminar(Long id) throws NoEncontradoException {

        Optional<Categoria> categoria = categoriaRepository.findById(id);

        if (categoria.isEmpty()){
            throw new NoEncontradoException("No se puede eliminar porque no existe la categoria con Id " + id + ",");
        }

        CategoriaDTO categoriaDTOAEliminar = mapper.convertValue(categoria,CategoriaDTO.class);

        categoriaRepository.deleteById(id);

        logger.info("Se eliminó la categoria: " + categoriaDTOAEliminar);

    }

    @Override
    public CategoriaDTO actualizar(CategoriaDTO categoriaDTO) throws NoEncontradoException, DatosIncorrectosException {

        Long id = categoriaDTO.getId();
        String titulo = categoriaDTO.getTitulo();

        Optional<Categoria> encontrado = categoriaRepository.findById(id);

        if (encontrado.isEmpty()){
            throw new NoEncontradoException("No se puede actualizar porque no existe una categoria con Id: " + id + ".");
        }

        // LOGICA PARA QUE NO DEJE QUE COEXISTAN 2 CATEGORIAS CON MISMO TITULO

        Optional<Categoria> tituloEncontrado = categoriaRepository.findByTitulo(titulo);

        if (tituloEncontrado.isPresent() && !tituloEncontrado.get().getId().equals(encontrado.get().getId())){
            throw new DatosIncorrectosException("No se puede actualizar porque ya existe una categoria con Titulo: " + titulo + ".");
        }


        CategoriaDTO categoriaDTOParaActualizar = mapper.convertValue(encontrado,CategoriaDTO.class);

        logger.info("Se actualizará una categoria. Datos originales: " + categoriaDTOParaActualizar);

        Categoria categoria = mapper.convertValue(categoriaDTO, Categoria.class);

        Categoria categoriaRes = categoriaRepository.save(categoria);

        CategoriaDTO categoriaDTOActualizado = mapper.convertValue(categoriaRes,CategoriaDTO.class);

        logger.info("Datos actuales: " + categoriaDTOActualizado);


        return categoriaDTOActualizado;
    }

}
