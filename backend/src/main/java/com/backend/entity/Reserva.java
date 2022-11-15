package com.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.sql.Time;
import java.util.Date;
import java.util.List;

@Getter @Setter
@Entity
@Table

public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Time hora_comienzo_reserva;

    private Date fecha_inicial_reserva;

    private Date fecha_final_reserva;

    @NotBlank
    @ManyToOne
    @JoinColumn(name = "producto_id", nullable = false)
    private Producto producto;

    public Reserva() {
    }

    public Reserva (Long id, Time hora_comienzo_reserva, Date fecha_inicial_reserva, Date fecha_final_reserva) {
        this.id = id;
        this.hora_comienzo_reserva = hora_comienzo_reserva;
        this.fecha_inicial_reserva = fecha_inicial_reserva;
        this.fecha_final_reserva = fecha_final_reserva;
    }

}
