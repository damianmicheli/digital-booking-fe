package com.backend.service;

import com.backend.dto.CaracteristicaDTO;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CaracteristicaServiceTest {

    @Autowired
    ICaracteristicaService caracteristicaService;

    @Test
    void guardar() {

        // Dado: creo una instancia de caracteristca
        CaracteristicaDTO caracteristica = new CaracteristicaDTO("Nombre de prueba", "Icono de prueba");

        // Cuando: uso el service para presistir la instancia
        CaracteristicaDTO caracteristicaGuardada = caracteristicaService.guardar(caracteristica);

        // Entonces: verifico que los datos almacenados sean correctos
        assertEquals("Nombre de prueba", caracteristicaGuardada.getNombre());

    }

    @Test
    void listarTodas() {

        // Dado: Agrego 3 caracteristicas a la lista
        CaracteristicaDTO caracteristica = new CaracteristicaDTO("Nombre de prueba", "Icono de prueba");
        caracteristicaService.guardar(caracteristica);
        caracteristicaService.guardar(caracteristica);
        caracteristicaService.guardar(caracteristica);

        // Cuando: recupero la lista
        List<CaracteristicaDTO> listaCaracteristicas = caracteristicaService.listarTodas();

        // Entonces: Verifico que en la lista haya por lo menos 3 caracteristicas
        assert(listaCaracteristicas.size() >= 3);

    }
}