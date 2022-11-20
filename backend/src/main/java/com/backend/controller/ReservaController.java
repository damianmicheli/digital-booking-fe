package com.backend.controller;

import com.backend.dto.CategoriaDTO;
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

        return new ResponseEntity<>(reservaService.guardar(reservaDTO), HttpStatus.OK);
    }

    @Operation(summary = "Listar reservas por Producto")
    @GetMapping("/producto/{productoId}")
    public ResponseEntity<List<ReservaDTO>> listarPorProducto(@PathVariable Long productoId) throws NoEncontradoException {
        return new ResponseEntity<>(reservaService.findByProductoId(productoId), HttpStatus.OK);
    }

}
