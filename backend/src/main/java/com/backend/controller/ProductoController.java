package com.backend.controller;

import com.backend.dto.ProductoDTO;
import com.backend.service.*;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("productos")
public class ProductoController {

    @Autowired
    private IProductoService productoService;

    @Operation(summary = "Buscar un producto por su Id")
    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> buscar(@PathVariable Long id) throws NoEncontradoException {

        return new ResponseEntity<>(productoService.buscar(id), HttpStatus.OK);
    }

    @Operation(summary = "Crear un producto")
    @PostMapping
    public ResponseEntity<ProductoDTO> guardar(@RequestBody ProductoDTO productoDTO) throws ConflictoException, DatosIncorrectosException {

        return new ResponseEntity<>(productoService.guardar(productoDTO), HttpStatus.OK);

    }

    @Operation(summary = "Listar todos los productos")
    @GetMapping
    public ResponseEntity<List<ProductoDTO>> listarTodos(){
        return new ResponseEntity<>(productoService.listarTodos(), HttpStatus.OK);

    }

    @Operation(summary = "Listar todos los productos de forma aleatoria")
    @GetMapping("/random")
    public ResponseEntity<List<ProductoDTO>> listarRandom(){
        return new ResponseEntity<>(productoService.listarRandom(), HttpStatus.OK);

    }

    @Operation(summary = "Listar productos filtrados por ciudad")
    @GetMapping("/ciudad/{id}")
    public ResponseEntity<List<ProductoDTO>> listarPorCiudad(@PathVariable Long id) {
        return new ResponseEntity<>(productoService.listarPorCiudad(id), HttpStatus.OK);

    }

    @Operation(summary = "Listar productos filtrados por categoria")
    @GetMapping("/categoria/{id}")
    public ResponseEntity<List<ProductoDTO>> listarPorCategoria(@PathVariable Long id) {
        return new ResponseEntity<>(productoService.listarPorCategoria(id), HttpStatus.OK);

    }
}
