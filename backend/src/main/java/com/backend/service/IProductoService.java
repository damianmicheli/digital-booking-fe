package com.backend.service;

import java.util.List;
import com.backend.dto.ProductoDTO;
public interface IProductoService {

    ProductoDTO guardar (ProductoDTO productoDTO) throws ConflictoException;

    ProductoDTO buscar(Long id) throws NoEncontradoException;

    List<ProductoDTO> listarTodos();
}
