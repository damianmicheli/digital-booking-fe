package com.backend.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity
@Table

public class Caracteristicas {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "secuenciaDeCaracteristicas")
    @SequenceGenerator(name = "secuenciaDeCaracteristicas", sequenceName = "CARACTERISTICAS_SEQUENCE", allocationSize = 1)
    private Long id;
    private String nombre;
    private Boolean disponible;
    private String icono;

    public Caracteristicas() {
    }

    public Caracteristicas(Long id, String nombre, Boolean disponible, String icono) {
        this.id = id;
        this.nombre = nombre;
        this.disponible = disponible;
        this.icono = icono;
    }
}
