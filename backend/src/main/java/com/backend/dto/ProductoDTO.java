package com.backend.dto;

import com.backend.entity.Caracteristica;
import com.backend.entity.Categoria;
import com.backend.entity.Ciudad;
import com.backend.entity.Imagen;
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
    private Categoria categoria;
    private Ciudad ciudad;
    private List<Imagen> imagenes;
    private List<Caracteristica> caracteristicas;

    //todo
//    private CategoriaDTO categoria;
//    private CiudadDTO ciudad;
//    private List<ImagenDTO> imagenes;
//    private List<CaracteristicaDTO> caracteristicas;
}


