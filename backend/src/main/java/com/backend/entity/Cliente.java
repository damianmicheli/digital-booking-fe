package com.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter @Setter
@Entity
@Table
public class Cliente extends Usuario {


    @OneToMany(mappedBy = "cliente", cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<Reserva> reservas;



}