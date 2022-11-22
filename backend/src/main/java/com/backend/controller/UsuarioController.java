package com.backend.controller;


import com.backend.dto.UsuarioDTO;
import com.backend.service.IUsuarioService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsuarioController {

    @Autowired
    IUsuarioService usuarioService;

    @Operation(summary = "Recibir datos de usuario logueado")
    @RequestMapping(value = "/usuario", method = RequestMethod.GET)
    public ResponseEntity<UsuarioDTO> obtenerDatosUsuario() throws Exception{

        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        return new ResponseEntity<>(usuarioService.buscarPorEmail(userDetails.getUsername()), HttpStatus.OK);

    }
}
