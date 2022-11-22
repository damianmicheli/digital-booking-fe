package com.backend.dto;

import com.backend.entity.Cliente;
import com.backend.entity.Producto;
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
    private Producto producto;
    private Cliente cliente;
    private String aclaraciones;
    private boolean vacunado;
}
