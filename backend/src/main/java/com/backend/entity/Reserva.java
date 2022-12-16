package com.backend.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;

@Getter @Setter
@Entity
@Table

public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalTime hora_comienzo_reserva;

    @NotBlank
    private LocalDate fecha_inicial_reserva;

    @NotBlank
    private LocalDate fecha_final_reserva;

    private String aclaraciones;

    private boolean vacunado;

    @NotBlank
    @ManyToOne
    @JoinColumn(name = "producto_id", nullable = false)
    private Producto producto;

    @NotBlank
    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;


    public Reserva() {
    }

    public Reserva(LocalTime hora_comienzo_reserva, LocalDate fecha_inicial_reserva, LocalDate fecha_final_reserva, String aclaraciones, boolean vacunado, Producto producto, Usuario usuario) {
        this.hora_comienzo_reserva = hora_comienzo_reserva;
        this.fecha_inicial_reserva = fecha_inicial_reserva;
        this.fecha_final_reserva = fecha_final_reserva;
        this.aclaraciones = aclaraciones;
        this.vacunado = vacunado;
        this.producto = producto;
        this.usuario = usuario;
    }
}
