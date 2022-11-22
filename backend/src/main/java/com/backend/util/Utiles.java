package com.backend.util;

import com.backend.dto.FechasOcupadasDTO;

import java.time.LocalDate;
import java.util.List;

public class Utiles {

    public static boolean esRangoValido(LocalDate fechaInicio, LocalDate fechaFin, FechasOcupadasDTO fechasOcupadas) {
        boolean valido = true;

        LocalDate fechaActual;

        List<LocalDate> fechas = fechasOcupadas.getFechasNoDisponibles();

        while (valido && !fechas.isEmpty()){
            fechaActual = fechas.remove(0);
            valido = fechaActual.isBefore(fechaInicio) || fechaActual.isAfter(fechaFin);
        }

        return valido;
    }
}
