package com.backend.controller;


import com.backend.entity.Usuario;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsuarioController {

    @Operation(summary = "Recibir nombre de usuario logueado")
    @RequestMapping(value = "/usuario", method = RequestMethod.GET)
    public ResponseEntity<?> obtenerNombreUsuario() throws Exception{

        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        Usuario usuario = new Usuario();
        usuario.setNombre(userDetails.getUsername());

        return ResponseEntity.ok(usuario);
    }
}
