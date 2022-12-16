package com.backend.service;

import java.time.LocalDate;
import java.util.List;

import com.backend.dto.FechasOcupadasDTO;
import com.backend.dto.ProductoDTO;
import com.backend.dto.PuntuacionDTO;

public interface IProductoService {

    ProductoDTO guardar (ProductoDTO productoDTO) throws ConflictoException, DatosIncorrectosException;

    ProductoDTO buscar(Long id) throws NoEncontradoException;

    List<ProductoDTO> listarTodos();

    List<ProductoDTO> listarPorCiudad(Long id) ;

    List<ProductoDTO> listarPorCategoria(Long idCategoria);

    List<ProductoDTO> listarRandom();

    FechasOcupadasDTO fechasOcupadas(Long id) throws NoEncontradoException;

    List<ProductoDTO> listarPorCiudadYFechas(LocalDate inicio, LocalDate fin, Long idCiudad) throws NoEncontradoException, DatosIncorrectosException;

    List<ProductoDTO> listarPorFechas(LocalDate inicio, LocalDate fin) throws NoEncontradoException, DatosIncorrectosException;

    ProductoDTO actualizar (ProductoDTO productoDTO) throws NoEncontradoException;

    PuntuacionDTO guardarPuntuacion(PuntuacionDTO puntuacionDTO) throws NoEncontradoException;

    }
