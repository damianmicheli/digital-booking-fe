package com.backend.service;

import com.backend.dto.RolDTO;
import com.backend.dto.UsuarioDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UsuarioServiceTest {

    @Autowired
    IUsuarioService usuarioService;

    @Test
    void buscarPorEmail() throws DatosIncorrectosException, NoEncontradoException {
        // Dado

        UsuarioDTO usuario = new UsuarioDTO(
                "Test",
                "Subject1",
                "Glados",
                "test10@subject.com",
                "portal",
                Set.of(new RolDTO(2L)));
        UsuarioDTO usuarioRegistrado = usuarioService.registrar(usuario);


        // Cuando

        UsuarioDTO usuarioEncontrado = usuarioService.buscarPorEmail("test10@subject.com");

        // Entonces

        // valido que el usuario buscado se encontro
        assertEquals(usuarioEncontrado.getEmail(),"test10@subject.com");

        // valido que si busco un mail inexistente devuelve excepcion
        assertThrows(NoEncontradoException.class,() -> {
            usuarioService.buscarPorEmail("no_existe@subject.com");
        }, "El email especificado no existe");
    }

    @Test
    void registrar() throws DatosIncorrectosException {

        // Dado

        UsuarioDTO usuario = new UsuarioDTO(
                "Test",
                "Subject1",
                "Glados",
                "test1@subject.com",
                "portal",
                Set.of(new RolDTO(2L)));

        // Cuando

        UsuarioDTO usuarioRegistrado = usuarioService.registrar(usuario);

        // Entonces

        // valido que el usuario se creo con el mail ingresado
        assertEquals(usuarioRegistrado.getEmail(),"test1@subject.com");

        // valido que si quiero registrar el mismo mail arroja excepcion
        assertThrows(DatosIncorrectosException.class,() -> {
            usuarioService.registrar(usuario);
        }, "El email especificado ya existe");
    }


}