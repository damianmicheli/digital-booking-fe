package com.backend.entity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity
@Table

public class Imagenes {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "secuenciaDeImagenes")
    @SequenceGenerator(name = "secuenciaDeImagenes", sequenceName = "IMAGENES_SEQUENCE", allocationSize = 1)
    private Long id;
    private String titulo;
    private String url;

    public Imagenes() {
    }

    public Imagenes(Long id, String titulo, String url) {
        this.id = id;
        this.titulo = titulo;
        this.url = url;
        ;
    }
}
