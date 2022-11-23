package com.backend.service;

import com.backend.dto.UsuarioDTO;
import com.backend.entity.Usuario;
import com.backend.repository.IUsuarioRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService implements IUsuarioService{

    private final Logger logger = Logger.getLogger(UsuarioService.class);

    @Autowired
    IUsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public UsuarioDTO buscarPorEmail(String email) throws NoEncontradoException {

        Optional<Usuario> usuario = usuarioRepository.findUsuarioByEmail(email);

        if (usuario.isEmpty()) {
            throw new NoEncontradoException("El email especificado no existe");
        }

        logger.info("Se busco por email el usuario> " + usuario);

        return mapper.convertValue(usuario, UsuarioDTO.class);
    }

    @Override
    public UsuarioDTO registrar(UsuarioDTO usuarioDTO) throws DatosIncorrectosException {

        Optional<Usuario> usuario = usuarioRepository.findUsuarioByEmail(usuarioDTO.getEmail());

        if (usuario.isPresent()) {
            throw new DatosIncorrectosException("El email especificado ya existe");
        }

        String encodedPassword = passwordEncoder.encode(usuarioDTO.getPassword());
        usuarioDTO.setPassword(encodedPassword);
        Usuario usuarioNuevo = usuarioRepository.save(mapper.convertValue(usuarioDTO, Usuario.class));
        usuarioNuevo.setPassword("Password oculta");

        UsuarioDTO usuarioGuardado = mapper.convertValue(usuarioNuevo, UsuarioDTO.class);

        logger.info("Se registró el usuario: " + usuarioGuardado.toString());

        return usuarioGuardado;

    }
}
