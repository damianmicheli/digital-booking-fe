package com.backend.service;

import com.backend.dto.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ProductoServiceTest {

    @Autowired
    IProductoService productoService;

    @Test
    void guardar() throws DatosIncorrectosException, ConflictoException {
        // Dado
        ProductoDTO productoIncompleto = new ProductoDTO(
                "Descripcion de prueba",
                "Direccion de prueba",
                "-40","-65",
                null,
                "Politica Cancelacion de prueba",
                "Politica Cancelacion de prueba",
                "Politica Cancelacion de prueba",
                "Propiedad de prueba",
                new CategoriaDTO(1L),
                new CiudadDTO(1L));

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


        // Cuando
        ProductoDTO productoGuardado = productoService.guardar(producto);

        // Entonces
        assertEquals("Propiedad de prueba", productoGuardado.getNombre());
        assertThrows(DatosIncorrectosException.class, () -> {
            productoService.guardar(productoIncompleto);
        }, "No se especifica el nombre");
    }

    @Test
    void buscar() throws DatosIncorrectosException, ConflictoException, NoEncontradoException {

        // Dado
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

        Long idABuscar = productoGuardado.getId();

        // Cuando

        ProductoDTO productoEncontrado = productoService.buscar(idABuscar);

        // Entonces

        assertEquals("Propiedad de prueba", productoEncontrado.getNombre());


    }

}