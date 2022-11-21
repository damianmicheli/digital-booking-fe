package com.backend.service;

import com.backend.dto.FechasOcupadasDTO;
import com.backend.dto.ProductoDTO;
import com.backend.dto.ReservaDTO;
import com.backend.entity.Producto;
import com.backend.entity.Reserva;
import com.backend.repository.IReservaRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
    public ReservaDTO guardar(ReservaDTO reservaDTO) throws NoEncontradoException, DatosIncorrectosException {

        //Obtengo el producto y las fechas
        Producto producto = reservaDTO.getProducto();
        LocalDate fechaInicio = reservaDTO.getFecha_inicial_reserva();
        LocalDate fechaFin = reservaDTO.getFecha_final_reserva();

        //Verifico que el producto exista
        ProductoDTO productoDTOEncontrado = productoService.buscar(producto.getId());
        //Verifico que las fechas existan
        if(fechaInicio == null) {
            throw new DatosIncorrectosException("No se ingreso una fecha de inicio valida");
        }
        if(fechaFin == null) {
            throw new DatosIncorrectosException("No se ingreso una fecha de fin valida");
        }

        //Verifico que la fecha no sea anterior a ahora
        if (fechaInicio.isBefore(LocalDate.now())){
            throw new DatosIncorrectosException("La fecha de la reserva no puede ser anterior a el dia de hoy.");
        }

        //TODO Verifico que el producto no este reservado en esa fecha

        if(!esRangoValido(fechaInicio, fechaFin, fechasOcupadas(producto.getId()) )){

            throw new DatosIncorrectosException("El producto posee dias reservados en ese intervalo");

        }

        if(productoDTOEncontrado == null) {

            throw new NoEncontradoException("El producto no fue enconstrado");

        }

        Reserva reserva = mapper.convertValue(reservaDTO, Reserva.class);

        Reserva reservaGuardado = reservaRepository.save(reserva);

        ReservaDTO reservaDTOGuardado = mapper.convertValue(reservaGuardado, ReservaDTO.class);

        logger.info("Se creo la reserva : " + reservaDTOGuardado);

        return reservaDTOGuardado;

    }

    @Override
    public List<ReservaDTO> findByProductoId(Long productoId) throws NoEncontradoException {
        //Verifico que el producto exista
        ProductoDTO productoDTOEncontrado = productoService.buscar(productoId);

        List<Reserva> reservas = reservaRepository.findByProductoId(productoId);
        List<ReservaDTO> reservasDTO = new ArrayList<>();
        for(Reserva reserva : reservas){
            reservasDTO.add(mapper.convertValue(reserva, ReservaDTO.class));
        }
        logger.info("Se listaron todas las reservas para el prodcuto con ID " + productoId);

        return reservasDTO;

    }

    private List<LocalDate> fechasOcupadas(Long productoId) {

        List<Reserva> reservas = reservaRepository.findByProductoId(productoId);
        List<LocalDate> fechas = new ArrayList<>();

        for (Reserva reserva : reservas) {

            LocalDate in = reserva.getFecha_inicial_reserva();
            LocalDate out = reserva.getFecha_final_reserva();
            LocalDate actual = in;

            while (actual.isBefore(out) || actual.isEqual(out)) {
                fechas.add(actual);
                actual = actual.plusDays(1L);
            }

        }


        logger.info("Se listaron las fechas ocupadas del producto con id: " + productoId);

        return fechas;
    }

    private boolean esRangoValido (LocalDate fechaInicio, LocalDate fechaFin, List<LocalDate> fechasOcupadas) {
        boolean valido = true;

        LocalDate fechaActual;

        while (valido && !fechasOcupadas.isEmpty()){
            fechaActual = fechasOcupadas.remove(0);
            valido = fechaActual.isBefore(fechaInicio) || fechaActual.isAfter(fechaFin);
        }

        return valido;
    }
}

