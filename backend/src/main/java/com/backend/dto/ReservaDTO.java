package com.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;

@Getter @Setter @ToString
@JsonIgnoreProperties(ignoreUnknown = true)

public class ReservaDTO {

    private Long id;
    private LocalTime hora_comienzo_reserva;
    private LocalDate fecha_inicial_reserva;
    private LocalDate fecha_final_reserva;
    private ProductoDTO producto;
    private UsuarioDTO usuario;
    private String aclaraciones;
    private boolean vacunado;

    public ReservaDTO() {
    }

    public ReservaDTO(LocalTime hora_comienzo_reserva, LocalDate fecha_inicial_reserva, LocalDate fecha_final_reserva, ProductoDTO producto, UsuarioDTO usuario, String aclaraciones, boolean vacunado) {
        this.hora_comienzo_reserva = hora_comienzo_reserva;
        this.fecha_inicial_reserva = fecha_inicial_reserva;
        this.fecha_final_reserva = fecha_final_reserva;
        this.producto = producto;
        this.usuario = usuario;
        this.aclaraciones = aclaraciones;
        this.vacunado = vacunado;
    }
}
