package com.backend.service;

import com.backend.dto.UsuarioDTO;

public interface IUsuarioService {

    UsuarioDTO buscarPorEmail (String email) throws NoEncontradoException;

    UsuarioDTO registrar(UsuarioDTO usuarioDTO) throws DatosIncorrectosException;
}
