package com.backend.service;

import com.backend.dto.UsuarioDTO;
import com.backend.entity.Usuario;
import com.backend.repository.IUsuarioRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService implements IUsuarioService{

    @Autowired
    IUsuarioRepository usuarioRepository;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public UsuarioDTO buscarPorEmail(String email) throws NoEncontradoException {

        Optional<Usuario> usuario = usuarioRepository.findUsuarioByEmail(email);

        if (usuario.isEmpty()) {
            throw new NoEncontradoException("El email especificado no existe");
        }

        return mapper.convertValue(usuario, UsuarioDTO.class);
    }
}
