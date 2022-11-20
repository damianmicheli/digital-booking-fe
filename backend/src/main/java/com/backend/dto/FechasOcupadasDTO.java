package com.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;

@Getter @Setter @ToString
@JsonIgnoreProperties(ignoreUnknown = true)

public class FechasOcupadasDTO {

    private List<LocalDate> fechasNoDisponibles;

}
