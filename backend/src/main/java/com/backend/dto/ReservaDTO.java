package com.backend.dto;

import com.backend.entity.Producto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Time;
import java.util.Date;

@Getter @Setter @ToString
@JsonIgnoreProperties(ignoreUnknown = true)

public class ReservaDTO {

    private Long id;
    private Time hora_comienzo_reserva;
    private Date fecha_inicial_reserva;
    private Date fecha_final_reserva;
    private Producto producto;
}
