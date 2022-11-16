package com.backend.service;

import com.backend.dto.ReservaDTO;

public interface IReservaService {

    ReservaDTO guardar (ReservaDTO reservaDTO) throws NoEncontradoException;

}
