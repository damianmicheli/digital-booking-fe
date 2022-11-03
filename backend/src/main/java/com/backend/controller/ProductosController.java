package com.backend.controller;

import com.backend.dto.ProductosDTO;
import com.backend.service.*;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("productos")
public class ProductosController {

    @Autowired
    private IProductosService productoService;

    @Operation(summary = "Buscar un producto por su Id")
    @GetMapping("/{id}")
    public ResponseEntity<ProductosDTO> buscar(@PathVariable Long id) throws NoEncontradoException {

        return new ResponseEntity<>(productoService.buscar(id), HttpStatus.OK);
    }

    @Operation(summary = "Crear un producto")
    @PostMapping
    public ResponseEntity<ProductosDTO> guardar(@RequestBody ProductosDTO productosDTO) throws ConflictoException {

        return new ResponseEntity<>(productoService.guardar(productosDTO), HttpStatus.OK);

    }

    @Operation(summary = "Listar todos los productos")
    @GetMapping
    public ResponseEntity<List<ProductosDTO>> listarTodos(){
        return new ResponseEntity<>(productoService.listarTodos(), HttpStatus.OK);

    }
}
