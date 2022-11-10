package com.backend.service;

import com.backend.dto.ProductoDTO;
import com.backend.entity.Categoria;
import com.backend.entity.Ciudad;
import com.backend.entity.Producto;
import com.backend.repository.IProductoRepository;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoService implements IProductoService {

    private final Logger logger = Logger.getLogger(ProductoService.class);

    @Autowired
    private IProductoRepository productoRepository;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public ProductoDTO guardar(ProductoDTO productoDTO) throws DatosIncorrectosException {

        if (productoDTO.getCategoria() == null) {
            throw new DatosIncorrectosException("No se especificó la categoría");
        }
        if (productoDTO.getCiudad() == null) {
            throw new DatosIncorrectosException("No se especificó la ciudad");
        }
        Producto producto = mapper.convertValue(productoDTO, Producto.class);

        Producto productoGuardado = productoRepository.save(producto);

        ProductoDTO productoDTOGuardado = mapper.convertValue(productoGuardado, ProductoDTO.class);

        logger.info("Se creo el producto : " + productoDTOGuardado);

        return productoDTOGuardado;    }

    @Override
    public ProductoDTO buscar(Long id) throws NoEncontradoException {
        Optional<Producto> producto = productoRepository.findById(id);

        if (producto.isEmpty()){
            throw new NoEncontradoException("Producto con Id " + id + " no encontrado.");
        }

        ProductoDTO productoDTOBuscado = mapper.convertValue(producto, ProductoDTO.class);

        logger.info("Se buscó por Id el producto: " + productoDTOBuscado);

        return productoDTOBuscado;    }

    @Override
    public List<ProductoDTO> listarTodos() {

        List<Producto> productos = productoRepository.findAll();
        List<ProductoDTO> productosDTO = new ArrayList<>();

        for (Producto producto : productos){
            productosDTO.add(mapper.convertValue(producto, ProductoDTO.class));
        }

        logger.info("Se listaron todos los productos.");

        return productosDTO;
    }

    @Override
    public List<ProductoDTO> listarPorCiudad(Long idCiudad)  {

        Ciudad ciudad = new Ciudad();
        ciudad.setId(idCiudad);

        List<Producto> productos = productoRepository.findByCiudad(ciudad);
        List<ProductoDTO> productosDTO = new ArrayList<>();

        for (Producto producto : productos){
            productosDTO.add(mapper.convertValue(producto, ProductoDTO.class));
        }

        logger.info("Se listaron todos los productos con ciudad id: "+ idCiudad);
        return productosDTO;
    }


    @Override
    public List<ProductoDTO> listarPorCategoria(Long idCategoria)  {

        Categoria categoria = new Categoria();
        categoria.setId(idCategoria);

        List<Producto> productos = productoRepository.findByCategoria(categoria);
        List<ProductoDTO> productosDTO = new ArrayList<>();

        for (Producto producto : productos){
            productosDTO.add(mapper.convertValue(producto, ProductoDTO.class));
        }

        logger.info("Se listaron todos los productos con ciudad id: "+ idCategoria);
        return productosDTO;
    }

    @Override
    public List<ProductoDTO> listarRandom() {

        List<Producto> productos = productoRepository.findRandom();
        List<ProductoDTO> productosDTO = new ArrayList<>();

        for (Producto producto : productos){
            productosDTO.add(mapper.convertValue(producto, ProductoDTO.class));
        }

        logger.info("Se listaron todos los productos de forma aleatoria.");

        return productosDTO;
    }

}