package com.backend.entity;

import com.backend.dto.CaracteristicaDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter @Setter
@Entity
@Table

public class Caracteristica {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "secuenciaDeCaracteristica")
    @SequenceGenerator(name = "secuenciaDeCaracteristica", sequenceName = "CARACTERISTICA_SEQUENCE", allocationSize = 1)
    private Long id;
    private String nombre;
    private Boolean disponible;
    private String icono;

    @ManyToMany(mappedBy = "caracteristica")
    @JsonIgnore
    private List<Producto> productos;


    public Caracteristica() {

    }


    public Caracteristica(Long id, String nombre, Boolean disponible, String icono) {
        this.id = id;
        this.nombre = nombre;
        this.disponible = disponible;
        this.icono = icono;
    }
}
