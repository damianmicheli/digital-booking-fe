package com.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Time;
import java.time.LocalDate;

@Getter @Setter @ToString
@JsonIgnoreProperties(ignoreUnknown = true)

public class ReservaDTO {

    private Long id;
    private Time hora_comienzo_reserva;
    private LocalDate fecha_inicial_reserva;
    private LocalDate fecha_final_reserva;
    private ProductoDTO producto;
    private ClienteDTO cliente;
    private String aclaraciones;
    private boolean vacunado;
}
