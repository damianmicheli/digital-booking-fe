package com.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter @Setter @ToString
@JsonIgnoreProperties(ignoreUnknown = true)

public class ProductoDTO {

    private Long id;
    private String titulo;
    private String nombre;
    private String descripcion;
    private String direccion;
    private String politica_de_uso;
    private String politica_de_salud_y_seguridad;
    private String politica_de_cancelacion;
    private CategoriaDTO categoria;
    private CiudadDTO ciudad;
    private List<ImagenDTO> imagenes;
    private List<CaracteristicaDTO> caracteristicas;

    public ProductoDTO() {
    }

    public ProductoDTO(
                       String descripcion,
                       String direccion,
                       String nombre,
                       String politica_de_cancelacion,
                       String politica_de_salud_y_seguridad,
                       String politica_de_uso,
                       String titulo,
                       CategoriaDTO categoria,
                       CiudadDTO ciudad,
                       List<ImagenDTO> imagenes,
                       List<CaracteristicaDTO> caracteristicas) {
        this.titulo = titulo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.politica_de_uso = politica_de_uso;
        this.politica_de_salud_y_seguridad = politica_de_salud_y_seguridad;
        this.politica_de_cancelacion = politica_de_cancelacion;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
    }
}


