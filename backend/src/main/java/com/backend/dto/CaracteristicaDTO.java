package com.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class CaracteristicaDTO {

    private Long id;
    private String nombre;
    private String icono;

    public CaracteristicaDTO() {
    }

    public CaracteristicaDTO(String nombre, String icono) {
        this.nombre = nombre;
        this.icono = icono;
    }

    public CaracteristicaDTO(Long id) {
        this.id = id;
    }
}



