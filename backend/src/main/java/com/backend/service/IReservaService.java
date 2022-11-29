package com.backend.service;

import com.backend.dto.FechasOcupadasDTO;
import com.backend.dto.ReservaDTO;

import java.util.List;

public interface IReservaService {

    ReservaDTO guardar (ReservaDTO reservaDTO) throws NoEncontradoException, DatosIncorrectosException;

    List<ReservaDTO> findByProductoId(Long productoId) throws NoEncontradoException;

    List<ReservaDTO> findByUsuarioId(Long usuarioId);

//    FechasOcupadasDTO fechasOcupadas(Long productoId);

}
