package com.backend.service;

import java.util.List;
import com.backend.dto.CategoriaDTO;

public interface ICategoriaService {

    CategoriaDTO guardar (CategoriaDTO categoriaDTO);
    CategoriaDTO buscar(Long id) throws NoEncontradoException;
    List<CategoriaDTO> listarTodos();
    void eliminar(Long id) throws NoEncontradoException;
    CategoriaDTO actualizar (CategoriaDTO categoriaDTO) throws NoEncontradoException, DatosIncorrectosException;

}



