package com.backend.controller;


import com.backend.dto.UsuarioDTO;
import com.backend.service.DatosIncorrectosException;
import com.backend.service.IUsuarioService;
import com.backend.service.NoEncontradoException;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("usuario")
public class UsuarioController {

    @Autowired
    IUsuarioService usuarioService;

    @Operation(summary = "Recibir datos de usuario logueado")
    @GetMapping
    public ResponseEntity<UsuarioDTO> obtenerDatosUsuario() throws NoEncontradoException {

        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        return new ResponseEntity<>(usuarioService.buscarPorEmail(userDetails.getUsername()), HttpStatus.OK);

    }

    @Operation(summary = "Registrar nuevo usuario")
    @PostMapping
    public ResponseEntity<UsuarioDTO> registrar(@RequestBody UsuarioDTO usuarioDTO) throws DatosIncorrectosException {

        return new ResponseEntity<>(usuarioService.registrar(usuarioDTO), HttpStatus.CREATED);

    }
}
