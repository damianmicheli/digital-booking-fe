package com.backend.service;

import java.util.List;
import com.backend.dto.ProductoDTO;
public interface IProductoService {

    ProductoDTO guardar (ProductoDTO productoDTO) throws ConflictoException, DatosIncorrectosException;

    ProductoDTO buscar(Long id) throws NoEncontradoException;

    List<ProductoDTO> listarTodos();

    List<ProductoDTO> listarPorCiudad(Long id) ;

    List<ProductoDTO> listarPorCategoria(Long idCategoria);
}
