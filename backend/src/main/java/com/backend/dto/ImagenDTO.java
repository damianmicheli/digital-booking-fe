package com.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class ImagenDTO {
    private Long id;
    private String titulo;
    private String url;

    public ImagenDTO() {
    }

    public ImagenDTO(String titulo, String url) {
        this.titulo = titulo;
        this.url = url;
    }
}
