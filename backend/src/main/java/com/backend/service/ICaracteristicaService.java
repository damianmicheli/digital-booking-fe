package com.backend.service;

import com.backend.dto.CaracteristicaDTO;

import java.util.List;

public interface ICaracteristicaService {

    CaracteristicaDTO guardar (CaracteristicaDTO caracteristicaDTO);
    CaracteristicaDTO buscar(Long id) throws NoEncontradoException;
    List<CaracteristicaDTO> listarTodas();
    void eliminar(Long id) throws NoEncontradoException;
    CaracteristicaDTO actualizar (CaracteristicaDTO caracteristicaDTO) throws NoEncontradoException, DatosIncorrectosException;

}