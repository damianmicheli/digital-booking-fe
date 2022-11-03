package com.backend.service;

import com.backend.dto.ProductosDTO;
import com.backend.entity.Productos;
import com.backend.repository.IProductosRepository;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductosService implements IProductosService {

    private final Logger logger = Logger.getLogger(ProductosService.class);

    @Autowired
    private IProductosRepository productosRepository;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public ProductosDTO guardar(ProductosDTO productosDTO) {

        Productos productos = mapper.convertValue(productosDTO, Productos.class);

        Productos productosGuardado = productosRepository.save(productos);

        ProductosDTO productosDTOGuardado = mapper.convertValue(productosGuardado,ProductosDTO.class);

        logger.info("Se creo el producto : " + productosDTOGuardado);

        return productosDTOGuardado;    }

    @Override
    public ProductosDTO buscar(Long id) throws NoEncontradoException {
        Optional<Productos> productos = productosRepository.findById(id);

        if (productos.isEmpty()){
            throw new NoEncontradoException("Producto con Id " + id + " no encontrado.");
        }

        ProductosDTO productosDTOBuscado = mapper.convertValue(productos,ProductosDTO.class);

        logger.info("Se buscó por Id el producto: " + productosDTOBuscado);

        return productosDTOBuscado;    }

    @Override
    public List<ProductosDTO> listarTodos() {

        List<Productos> productos = productosRepository.findAll();
        List<ProductosDTO> productosDTO = new ArrayList<>();

        for (Productos producto : productos){
            productosDTO.add(mapper.convertValue(producto, ProductosDTO.class));
        }

        logger.info("Se listaron todos los productos.");

        return productosDTO;
    }
}
