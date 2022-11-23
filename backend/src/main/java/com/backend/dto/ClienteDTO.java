package com.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Set;

@Getter @Setter @ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class ClienteDTO {

    private Long id;
    private String nombre;
    private String apellido;
    private String password;
    private String email;

    private CiudadDTO ciudad;

    private Set<RolDTO> roles;
}