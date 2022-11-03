package com.backend.service;

import java.util.List;
import com.backend.dto.ProductosDTO;
public interface IProductosService {

    ProductosDTO guardar (ProductosDTO productosDTO) throws ConflictoException;

    ProductosDTO buscar(Long id) throws NoEncontradoException;

    List<ProductosDTO> listarTodos();
}
