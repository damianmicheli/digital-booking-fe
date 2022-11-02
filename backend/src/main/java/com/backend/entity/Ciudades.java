package com.backend.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity
@Table

public class Ciudades {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "secuenciaDeCiudades")
    @SequenceGenerator(name = "secuenciaDeCiudades", sequenceName = "CIUDADES_SEQUENCE", allocationSize = 1)
    private Long id;
    private String ciudad;
    private String pais;

    public Ciudades() {
    }

    public Ciudades(Long id, String ciudad, String pais) {
        this.id = id;
        this.ciudad = ciudad;
        this.pais = pais;
        ;
    }
}

