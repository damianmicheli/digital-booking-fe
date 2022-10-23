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
        return null;
    }

    @Override
    public void eliminar(Long id) {

    }

    @Override
    public CategoriaDTO actualizar(CategoriaDTO categoriaDTO) throws NoEncontradoException {

        Long id = categoriaDTO.getId();

        Optional<Categoria> encontrado = categoriaRepository.findById(id);

        if (encontrado.isEmpty()){
            throw new NoEncontradoException("No se puede actualizar porque no existe una categoria con Id: " + id + ".");
        }

        //ACA SE PUEDE AGREGAR LOGICA PARA QUE NO DEJE QUE COEXISTAN 2 CATEGORIAS CON MISMO TITULO

        CategoriaDTO categoriaDTOParaActualizar = mapper.convertValue(encontrado,CategoriaDTO.class);

        logger.info("Se actualizará una categoria. Datos originales: " + categoriaDTOParaActualizar);

        Categoria categoria = mapper.convertValue(categoriaDTO, Categoria.class);

        Categoria categoriaRes = categoriaRepository.save(categoria);

        CategoriaDTO categoriaDTOActualizado = mapper.convertValue(categoriaRes,CategoriaDTO.class);

        logger.info("Datos actuales: " + categoriaDTOActualizado);


        return categoriaDTOActualizado;
    }
}
