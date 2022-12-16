package com.backend.service;

import com.backend.dto.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ReservaServiceTest {

    @Autowired
    IUsuarioService usuarioService;

    @Autowired
    IProductoService productoService;

    @Autowired
    IReservaService reservaService;



    @Test
    void guardar() throws NoEncontradoException, ConflictoException, DatosIncorrectosException {

        long productoId;
        long usuarioId;

        // Dado
        // alta de usuario
        UsuarioDTO usuario = new UsuarioDTO(
                "Test",
                "Subject",
                "Glados",
                "test@subject.com",
                "portal",
                Set.of(new RolDTO(2L)));

        UsuarioDTO usuarioRegistrado = usuarioService.registrar(usuario);
        usuarioId = usuarioRegistrado.getId();

        //alta de producto
        ProductoDTO producto = new ProductoDTO(
                "Descripcion de prueba",
                "Direccion de prueba",
                "-40","-65",
                "Propiedad de prueba",
                "Politica Cancelacion de prueba",
                "Politica Cancelacion de prueba",
                "Politica Cancelacion de prueba",
                "Propiedad de prueba",
                new CategoriaDTO(1L),
                new CiudadDTO(1L));

        ProductoDTO productoGuardado = productoService.guardar(producto);
        productoId = productoGuardado.getId();

        ReservaDTO reserva1 = new ReservaDTO(
                LocalTime.of(10,0), //hora
                LocalDate.of(2023,1,16), //fecha inicio
                LocalDate.of(2023,1,25), // fecha fin
                new ProductoDTO(productoId), // id producto
                new UsuarioDTO(usuarioId), // id usuario
                "Comentario de prueba 1",
                true);

        ReservaDTO reserva2 = new ReservaDTO(
                LocalTime.of(10,0), //hora
                LocalDate.of(2020,1,16), //fecha inicio
                LocalDate.of(2023,1,25), // fecha fin
                new ProductoDTO(productoId), // id producto
                new UsuarioDTO(usuarioId), // id usuario
                "Comentario de prueba 2",
                true);

        // Cuando
        ReservaDTO reservaGuardada1 = reservaService.guardar(reserva1);

        // Entonces

        assertEquals("Comentario de prueba 1", reservaGuardada1.getAclaraciones());
        assertThrows(DatosIncorrectosException.class, () -> {
            reservaService.guardar(reserva2);
        }, "La fecha de la reserva no puede ser anterior a el dia de hoy." );

    }




}