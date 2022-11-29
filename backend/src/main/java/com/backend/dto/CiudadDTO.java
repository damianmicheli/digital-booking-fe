package com.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
@JsonIgnoreProperties(ignoreUnknown = true)

public class CiudadDTO {

    private Long id;
    private String Ciudad;
    private String Pais;

    public CiudadDTO() {
    }

    public CiudadDTO(String ciudad, String pais) {
        Ciudad = ciudad;
        Pais = pais;
    }

    public CiudadDTO(Long id) {
        this.id = id;
    }
}
