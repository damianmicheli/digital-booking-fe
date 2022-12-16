package com.backend.service;
import com.backend.dto.CategoriaDTO;
import com.backend.dto.CiudadDTO;

import java.util.List;

public interface ICiudadService {

    List<CiudadDTO> listarTodos();

    CiudadDTO guardar(CiudadDTO ciudadDTO);

}