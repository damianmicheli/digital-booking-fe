package com.backend.controller;

import com.backend.dto.CategoriaDTO;
import com.backend.dto.ReservaDTO;
import com.backend.service.ConflictoException;
import com.backend.service.IReservaService;
import com.backend.service.NoEncontradoException;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("reservas")
public class ReservaController {

    @Autowired
    IReservaService reservaService;

    @Operation(summary = "Crear una reserva")
    @PostMapping
    public ResponseEntity<ReservaDTO> guardar(@RequestBody ReservaDTO reservaDTO) throws ConflictoException, NoEncontradoException {

        return new ResponseEntity<>(reservaService.guardar(reservaDTO), HttpStatus.OK);

    }
}
