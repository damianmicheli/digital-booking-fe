package com.backend.dto;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class RolDTO {
    private Long id;
    private String nombre;

    public RolDTO(Long id) {
        this.id = id;
    }

    public RolDTO() {
    }
}
