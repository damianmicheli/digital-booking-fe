package com.backend.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Getter @Setter
@Entity
@Table

public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "secuenciaDeProducto")
    @SequenceGenerator(name = "secuenciaDeProducto", sequenceName = "PRODUCTO_SEQUENCE", allocationSize = 1)

    private Long id;
    private String titulo;
    private String nombre;
    private String caracteristicas;
    private String descripcion;

    private String direccion;

    private String politica_de_uso;

    private String politica_de_salud_y_seguridad;

    private String politica_de_cancelacion;

    @NotBlank
    @ManyToOne
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoria;


    public Producto() {
    }

    public Producto(Long id, String titulo, String nombre, String caracteristicas, String descripcion, String direccion, String politica_de_uso, String politica_de_salud_y_seguridad, String politica_de_cancelacion  ) {
        this.id = id;
        this.titulo = titulo;
        this.nombre = nombre;
        this.caracteristicas = caracteristicas;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.politica_de_uso = politica_de_uso;
        this.politica_de_salud_y_seguridad = politica_de_salud_y_seguridad;
        this.politica_de_cancelacion = politica_de_cancelacion;
}
}
