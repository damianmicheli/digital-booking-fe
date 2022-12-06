package com.backend.controller;

import com.backend.dto.CategoriaDTO;
import com.backend.dto.FechasOcupadasDTO;
import com.backend.dto.ProductoDTO;
import com.backend.dto.PuntuacionDTO;
import com.backend.service.*;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("productos")
public class ProductoController {

    @Autowired
    private IProductoService productoService;


    @Operation(summary = "Buscar un producto por su Id")
    @GetMapping("/buscar")
    public ResponseEntity<ProductoDTO> buscar(@RequestParam Long id) throws NoEncontradoException {

        return new ResponseEntity<>(productoService.buscar(id), HttpStatus.OK);
    }


    @Operation(summary = "Crear un producto")
    @PostMapping
    public ResponseEntity<ProductoDTO> guardar(@RequestBody ProductoDTO productoDTO) throws ConflictoException, DatosIncorrectosException {

        return new ResponseEntity<>(productoService.guardar(productoDTO), HttpStatus.CREATED);

    }

    @Operation(summary = "Listar productos (por categoria, por ciudad, por fechas, por fechas y ciudad o muestra todos)")
    @GetMapping
    public ResponseEntity<List<ProductoDTO>> listarTodos(@RequestParam(required = false) Long ciudad,
                                                         @RequestParam(required=false) Long categoria,
                                                         @RequestParam(required=false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaInicio,
                                                         @RequestParam(required=false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaFin) throws NoEncontradoException, DatosIncorrectosException {


        if (fechaInicio != null && fechaFin != null && ciudad != null) {
            return new ResponseEntity<>(productoService.listarPorCiudadYFechas(fechaInicio, fechaFin, ciudad), HttpStatus.OK);

        }

        else if (fechaInicio != null && fechaFin != null) {
            return new ResponseEntity<>(productoService.listarPorFechas(fechaInicio, fechaFin), HttpStatus.OK);

        }

        else if (ciudad != null) {
            return new ResponseEntity<>(productoService.listarPorCiudad(ciudad), HttpStatus.OK);
        }
        else if (categoria !=null) {
            return new ResponseEntity<>(productoService.listarPorCategoria(categoria), HttpStatus.OK);

        }
        else {return new ResponseEntity<>(productoService.listarTodos(), HttpStatus.OK);}

    }

    @Operation(summary = "Listar todos los productos de forma aleatoria")
    @GetMapping("/random")
    public ResponseEntity<List<ProductoDTO>> listarRandom(){
        return new ResponseEntity<>(productoService.listarRandom(), HttpStatus.OK);

    }

    @Operation(summary = "Puntuar un producto")
    @PostMapping("/puntuar")
    public ResponseEntity<PuntuacionDTO> puntuarProducto(@RequestBody PuntuacionDTO puntuacionDTO) throws NoEncontradoException {
        return new ResponseEntity<>(productoService.guardarPuntuacion(puntuacionDTO), HttpStatus.OK);

    }

    @Operation(summary = "Mostrar fechas ocupadas de un producto por su Id")
    @GetMapping("/fechasnodisponibles")
    public ResponseEntity<FechasOcupadasDTO> fechasNoDisponibles(@RequestParam Long id) throws NoEncontradoException {

        return new ResponseEntity<>(productoService.fechasOcupadas(id), HttpStatus.OK);
    }

    @Operation(summary = "Actualizar los datos de un Producto")
    @PutMapping
    public ResponseEntity<ProductoDTO> actualizar(@RequestBody ProductoDTO productoDTO) throws NoEncontradoException {

        return new ResponseEntity<>(productoService.actualizar(productoDTO), HttpStatus.OK);

    }
}
