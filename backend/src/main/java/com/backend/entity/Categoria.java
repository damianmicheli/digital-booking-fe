package com.backend.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity
@Table
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "secuenciaDeCategoria")
    @SequenceGenerator(name = "secuenciaDeCategoria", sequenceName = "CATEGORIA_SEQUENCE", allocationSize = 1)
    private Long id;
    private String titulo;
    private String descripcion;
    private String url;

    public Categoria() {
    }

    public Categoria(Long id, String titulo, String descripcion, String url) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url = url;
    }

}
