package com.backend.service;

import com.backend.dto.ProductoDTO;
import com.backend.dto.ReservaDTO;
import com.backend.entity.Producto;
import com.backend.entity.Reserva;
import com.backend.repository.IReservaRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservaService implements IReservaService {

    private final Logger logger = Logger.getLogger(ProductoService.class);
    private final IReservaRepository reservaRepository;
    private final ObjectMapper mapper;
    private final ProductoService productoService;

    @Autowired
    public ReservaService(IReservaRepository reservaRepository, ObjectMapper mapper, ProductoService productoService) {
        this.reservaRepository = reservaRepository;
        this.mapper = mapper;
        this.productoService = productoService;
    }

    @Override
    public ReservaDTO guardar(ReservaDTO reservaDTO) throws NoEncontradoException {

            /*if (productoDTO.getCategoria() == null) {
                throw new DatosIncorrectosException("No se especificó la categoría");
            }
            if (productoDTO.getCiudad() == null) {
                throw new DatosIncorrectosException("No se especificó la ciudad");
            }*/

            //Obtengo el producto
            Producto producto = reservaDTO.getProducto();

            //Verifico que el producto exista
            ProductoDTO productoDTOEncontrado = productoService.buscar(producto.getId());

            if(productoDTOEncontrado == null) {throw new NoEncontradoException("El producto no fue enconstrado");}

            Reserva reserva = mapper.convertValue(reservaDTO, Reserva.class);

            Reserva reservaGuardado = reservaRepository.save(reserva);

            ReservaDTO reservaDTOGuardado = mapper.convertValue(reservaGuardado, ReservaDTO.class);

            logger.info("Se creo la reserva : " + reservaDTOGuardado);

            return reservaDTOGuardado;    }
    }

