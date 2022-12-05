package com.backend.service;

import com.backend.dto.CiudadDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CiudadServiceTest {

    @Autowired

    ICiudadService ciudadService;

    @Test
    void listarTodos() {
    }

    @Test
    void guardar() throws ConflictoException {
        // Dado: Creo una instancia de Ciudad
        CiudadDTO ciudad = new CiudadDTO("Bariloche", "Argentina");

        // Cuando: uso el service para presistir la instancia
        CiudadDTO ciudadGuardada = ciudadService.guardar(ciudad);


        // Entonces: verifico que los datos almacenados sean correctos
        assertEquals("Bariloche", ciudadGuardada.getCiudad());


    }
}