package com.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;
import java.util.Set;

@Entity
@Table
@Setter
@Getter
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String nombre;
    @NotBlank
    private String apellido;
    @NotBlank
    private String password;
    @NotBlank
    private String email;
    @NotBlank
    private String ciudad;


    @ManyToMany(fetch = FetchType.EAGER , cascade=CascadeType.REMOVE)
    @JoinTable(name="usuario_rol",
            joinColumns = @JoinColumn(name ="usuario_id"),
            inverseJoinColumns = @JoinColumn(name="rol_id"))
    private Set<Rol> roles;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<Reserva> reservas;

}

