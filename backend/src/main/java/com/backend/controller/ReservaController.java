package com.backend.controller;

import com.backend.dto.ReservaDTO;
import com.backend.service.ConflictoException;
import com.backend.service.DatosIncorrectosException;
import com.backend.service.IReservaService;
import com.backend.service.NoEncontradoException;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("reservas")
public class ReservaController {

    @Autowired
    IReservaService reservaService;

    @Operation(summary = "Crear una reserva")
    @PostMapping
    public ResponseEntity<ReservaDTO> guardar(@RequestBody ReservaDTO reservaDTO) throws ConflictoException, NoEncontradoException, DatosIncorrectosException {

        return new ResponseEntity<>(reservaService.guardar(reservaDTO), HttpStatus.CREATED);
    }

    @Operation(summary = "Listar reservas por Producto o Usuario")
    @GetMapping
    public ResponseEntity<List<ReservaDTO>> listarPorProducto(@RequestParam(required=false) Long producto,
                                                              @RequestParam(required=false) Long usuario) throws Exception {

        if(producto != null) {
            return new ResponseEntity<>(reservaService.findByProductoId(producto), HttpStatus.OK);
        }
        else if (usuario != null){
            return new ResponseEntity<>(reservaService.findByUsuarioId(usuario), HttpStatus.OK);
        }
        else {
            throw new Exception("No se especifico criterio de busqueda");
        }
    }

}

