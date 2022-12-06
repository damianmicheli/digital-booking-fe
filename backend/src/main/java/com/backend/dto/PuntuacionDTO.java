package com.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class PuntuacionDTO {

    private Long id;

    private int puntuacion;

    private ProductoDTO producto;

    private UsuarioDTO usuario;


}
