package com.backend.controller;

import com.backend.dto.CaracteristicaDTO;
import com.backend.dto.CategoriaDTO;
import com.backend.service.ICaracteristicaService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("caracteristicas")
public class CaracteristicaController {
    @Autowired
    private ICaracteristicaService caracteristicaService;

    @Operation(summary = "Listar todas las caracteristicas")
    @GetMapping
    public ResponseEntity<List<CaracteristicaDTO>> listarTodas(){
        return new ResponseEntity<>(caracteristicaService.listarTodas() , HttpStatus.OK);
    }
}
