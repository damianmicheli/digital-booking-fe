package com.backend.controller;

import com.backend.dto.CiudadDTO;
import com.backend.service.ICiudadService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("ciudades")
public class CiudadController {

    @Autowired
    private ICiudadService ciudadService;

    @Operation(summary = "Listar todas las ciudades")
    @GetMapping
    public ResponseEntity<List<CiudadDTO>> listarTodos(){
        return new ResponseEntity<>(ciudadService.listarTodos(), HttpStatus.OK);

    }
}
