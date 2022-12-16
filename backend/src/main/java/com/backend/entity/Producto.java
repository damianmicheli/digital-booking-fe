package com.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter @Setter
@Entity @ToString
@Table

public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String titulo;

    @NotBlank
    private String nombre;

    @NotBlank
    @Column(length=1000)
    private String descripcion;

    @NotBlank
    private String direccion;

    private String latitud;

    private String longitud;

    private String politica_de_uso;

    private String politica_de_salud_y_seguridad;

    private String politica_de_cancelacion;

    @LazyCollection(LazyCollectionOption.FALSE)
    @ManyToMany(cascade=CascadeType.REMOVE)
    @JoinTable(name = "producto_caracteristica",
            joinColumns = @JoinColumn(name = "producto_id"),
            inverseJoinColumns = @JoinColumn(name = "caracteristica_id"))
    private List<Caracteristica> caracteristicas;

    @NotBlank
    @ManyToOne
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoria;


    @ManyToOne
    @JoinColumn(name = "ciudad_id", nullable = false)
    private Ciudad ciudad;

    @LazyCollection(LazyCollectionOption.FALSE)
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="producto_id")
    private List<Imagen> imagenes;


    @OneToMany(mappedBy = "producto", cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<Reserva> reservas;

    @OneToMany(mappedBy = "producto", cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<Puntuacion> puntuaciones;

    private float puntajePromedio = 0;


    public Producto() {
    }

    public Producto(String titulo, String nombre, String descripcion, String direccion, String latitud, String longitud, String politica_de_uso, String politica_de_salud_y_seguridad, String politica_de_cancelacion, List<Caracteristica> caracteristicas, Categoria categoria, Ciudad ciudad, List<Imagen> imagenes, List<Reserva> reservas) {
        this.titulo = titulo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.latitud = latitud;
        this.longitud = longitud;
        this.politica_de_uso = politica_de_uso;
        this.politica_de_salud_y_seguridad = politica_de_salud_y_seguridad;
        this.politica_de_cancelacion = politica_de_cancelacion;
        this.caracteristicas = caracteristicas;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.imagenes = imagenes;
        this.reservas = reservas;
    }
}