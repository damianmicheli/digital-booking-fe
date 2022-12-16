package com.backend.service;

import com.backend.dto.CiudadDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CiudadServiceTest {

    @Autowired

    ICiudadService ciudadService;

    @Test
    void listarTodos() {

        // Dado:  Creo una instancia de Ciudad
        CiudadDTO ciudad = new CiudadDTO("Bariloche", "Argentina");

        // Cuando: uso el service para presistir la instancia
        CiudadDTO ciudadGuardada1 = ciudadService.guardar(ciudad);
        CiudadDTO ciudadGuardada2 = ciudadService.guardar(ciudad);
        CiudadDTO ciudadGuardada3 = ciudadService.guardar(ciudad);


        // Entonces: verifico que se hayan agregado las ciudades a la lista (que ya puede contener informacion)

        List<CiudadDTO> ciudades = ciudadService.listarTodos();
        assertTrue(ciudades.size() >= 3);
    }

    @Test
    void guardar() {
        // Dado:  Creo una instancia de Ciudad
        CiudadDTO ciudad = new CiudadDTO("Bariloche", "Argentina");

        // Cuando: uso el service para presistir la instancia
        CiudadDTO ciudadGuardada = ciudadService.guardar(ciudad);


        // Entonces: verifico que los datos almacenados sean correctos
        assertEquals("Bariloche", ciudadGuardada.getCiudad());


    }
}