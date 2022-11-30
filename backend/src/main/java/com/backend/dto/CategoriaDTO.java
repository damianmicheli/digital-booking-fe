package com.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class CategoriaDTO {

    private Long id;
    private String titulo;
    private String descripcion;
    private String url;

    public CategoriaDTO() {
    }

    public CategoriaDTO(String descripcion, String titulo, String url) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url = url;
    }

    public CategoriaDTO(Long id) {
        this.id = id;
    }
}
