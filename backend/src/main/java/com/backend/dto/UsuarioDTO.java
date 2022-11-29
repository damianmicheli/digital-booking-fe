package com.backend.dto;

import com.backend.entity.Rol;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.HashSet;
import java.util.Set;

@Getter @Setter @ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class UsuarioDTO {

    private Long id;
    private String nombre;
    private String apellido;
    private String password;
    private String email;

    private String ciudad;

    private Set<RolDTO> roles;

    public UsuarioDTO() {
    }

    public UsuarioDTO(Long id) {
        this.id = id;
    }

    public UsuarioDTO(String nombre, String apellido, String password, String email, String ciudad, Set<RolDTO> roles) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.password = password;
        this.email = email;
        this.ciudad = ciudad;
        this.roles = roles;
    }
}

