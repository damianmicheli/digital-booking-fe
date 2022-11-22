package com.backend.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.sql.Time;
import java.time.LocalDate;

@Getter @Setter
@Entity
@Table

public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Time hora_comienzo_reserva;

    private LocalDate fecha_inicial_reserva;

    private LocalDate fecha_final_reserva;

    private String aclaraciones;

    private boolean vacunado;

    @NotBlank
    @ManyToOne
    @JoinColumn(name = "producto_id", nullable = false)
    private Producto producto;

    public Reserva() {
    }

    public Reserva(Time hora_comienzo_reserva, LocalDate fecha_inicial_reserva, LocalDate fecha_final_reserva, String aclaraciones, boolean vacunado, Producto producto) {
        this.hora_comienzo_reserva = hora_comienzo_reserva;
        this.fecha_inicial_reserva = fecha_inicial_reserva;
        this.fecha_final_reserva = fecha_final_reserva;
        this.aclaraciones = aclaraciones;
        this.vacunado = vacunado;
        this.producto = producto;
    }
}
