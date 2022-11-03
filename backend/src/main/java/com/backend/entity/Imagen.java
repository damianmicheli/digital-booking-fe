package com.backend.entity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity
@Table

public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "secuenciaDeImagen")
    @SequenceGenerator(name = "secuenciaDeImagen", sequenceName = "IMAGEN_SEQUENCE", allocationSize = 1)
    private Long id;
    private String titulo;
    private String url;

    public Imagen() {
    }

    public Imagen(Long id, String titulo, String url) {
        this.id = id;
        this.titulo = titulo;
        this.url = url;
        ;
    }
}
