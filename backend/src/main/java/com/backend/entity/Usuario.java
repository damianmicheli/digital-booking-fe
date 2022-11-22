package com.backend.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table
@Setter
@Getter
@Inheritance(strategy = InheritanceType.JOINED)
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String apellido;
    private String password;
    private String email;

    @OneToOne
    @JoinColumn(name = "ciudad_id")
    private Ciudad ciudad;


    @ManyToMany(fetch=FetchType.EAGER)
    @JoinTable(name="usuario_rol",
            joinColumns = @JoinColumn(name ="usuario_id"),
            inverseJoinColumns = @JoinColumn(name="rol_id"))
    private Set<Rol> roles;

}

