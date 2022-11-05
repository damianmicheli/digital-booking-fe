package com.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
@JsonIgnoreProperties(ignoreUnknown = true)

public class ProductoDTO {

    private Long id;
    private String titulo;
    private String nombre;
    private String caracteristica;
    private String descripcion;
    private String direccion;
    private String politica_de_uso;
    private String politica_de_salud_y_seguridad;
    private String politica_de_cancelacion;

}
