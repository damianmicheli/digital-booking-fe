package com.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter @Setter
@Entity
@Table

public class Ciudad {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "secuenciaDeCiudad")
    @SequenceGenerator(name = "secuenciaDeCiudad", sequenceName = "CIUDAD_SEQUENCE", allocationSize = 1)
    private Long id;
    private String ciudad;
    private String pais;

    @OneToMany(mappedBy = "ciudad", cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<Producto> productos;

    public Ciudad() {
    }

    public Ciudad(Long id, String ciudad, String pais) {
        this.id = id;
        this.ciudad = ciudad;
        this.pais = pais;
        ;
    }
}

