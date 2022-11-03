package com.backend.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity
@Table

public class Ciudad {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "secuenciaDeCiudad")
    @SequenceGenerator(name = "secuenciaDeCiudad", sequenceName = "CIUDADES_SEQUENCE", allocationSize = 1)
    private Long id;
    private String ciudad;
    private String pais;

    public Ciudad() {
    }

    public Ciudad(Long id, String ciudad, String pais) {
        this.id = id;
        this.ciudad = ciudad;
        this.pais = pais;
        ;
    }
}

