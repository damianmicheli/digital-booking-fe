package com.backend.service;

import com.backend.dto.CaracteristicaDTO;

import java.util.List;

public interface ICaracteristicaService {

    CaracteristicaDTO guardar (CaracteristicaDTO caracteristicaDTO);
    List<CaracteristicaDTO> listarTodas();

}