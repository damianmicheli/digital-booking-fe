package com.backend.service;

import com.backend.dto.CaracteristicaDTO;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CaracteristicaServiceTest {

    @Autowired
    ICaracteristicaService caracteristicaService;

    @Test
    void guardar() {

        // Dado
        CaracteristicaDTO caracteristica = new CaracteristicaDTO("Nombre de prueba", "Icono de prueba");

        // Cuando
        CaracteristicaDTO caracteristicaGuardada = caracteristicaService.guardar(caracteristica);

        // Entonces
        assertEquals("Nombre de prueba", caracteristicaGuardada.getNombre());

    }

    @Test
    void listarTodas() {
    }
}