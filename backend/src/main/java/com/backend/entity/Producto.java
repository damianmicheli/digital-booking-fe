package com.backend.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

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
    private String descripcion;

    private String direccion;

    private String politica_de_uso;

    private String politica_de_salud_y_seguridad;

    private String politica_de_cancelacion;

    @ManyToMany(targetEntity = Caracteristica.class,cascade=CascadeType.ALL)
    @JoinTable(name = "producto_caracteristica",
            joinColumns = @JoinColumn(name = "producto_id"),
            inverseJoinColumns = @JoinColumn(name = "caracteristica_id"))

    private List<Caracteristica> caracteristica;

    /*@JoinColumn(
            name = "caracteristica_id", nullable = false)

    private List<Caracteristica> caracteristica;*/

    @NotBlank
    @ManyToOne
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoria;


    @ManyToOne
    @JoinColumn(name = "ciudad_id", nullable = false)
    private Ciudad ciudad;


    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="producto_id")
    private List<Imagen> imagenes;


    public Producto() {
    }

    public Producto(List<Caracteristica> caracteristica, Long id, String titulo, String nombre, String descripcion, String direccion, String politica_de_uso, String politica_de_salud_y_seguridad, String politica_de_cancelacion) {
        this.id = id;
        this.titulo = titulo;
        this.nombre = nombre;
        this.caracteristica = caracteristica;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.politica_de_uso = politica_de_uso;
        this.politica_de_salud_y_seguridad = politica_de_salud_y_seguridad;
        this.politica_de_cancelacion = politica_de_cancelacion;
    }
}