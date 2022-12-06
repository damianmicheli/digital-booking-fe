package com.backend.service;

import com.backend.dto.UsuarioDTO;

public interface IUsuarioService {

    UsuarioDTO buscarPorEmail (String email) throws NoEncontradoException;

    UsuarioDTO buscarPorId (Long id) throws NoEncontradoException;

    UsuarioDTO registrar(UsuarioDTO usuarioDTO) throws DatosIncorrectosException;

    UsuarioDTO actualizar(UsuarioDTO usuarioDTO) throws NoEncontradoException;

}
