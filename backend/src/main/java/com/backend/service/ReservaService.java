package com.backend.service;

import com.backend.dto.ProductoDTO;
import com.backend.dto.ReservaDTO;
import com.backend.dto.UsuarioDTO;
import com.backend.entity.Producto;
import com.backend.entity.Reserva;
import com.backend.repository.IProductoRepository;
import com.backend.repository.IReservaRepository;
import com.backend.util.Utiles;
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

    private final Logger logger = Logger.getLogger(ReservaService.class);

    @Autowired
    private IReservaRepository reservaRepository;

    @Autowired
    private IProductoService productoService;

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private IProductoRepository productoRepository;

    @Autowired
    private IUsuarioService usuarioService;

    @Override
    public ReservaDTO guardar(ReservaDTO reservaDTO) throws NoEncontradoException, DatosIncorrectosException {

        //Obtengo el producto, el usuario, las fechas y la ciudad del usuario
        ProductoDTO producto = reservaDTO.getProducto();
        UsuarioDTO usuario = reservaDTO.getUsuario();
        LocalDate fechaInicio = reservaDTO.getFecha_inicial_reserva();
        LocalDate fechaFin = reservaDTO.getFecha_final_reserva();
        String ciudadNueva = usuario.getCiudad();

        //Verifico que el producto exista

        Optional <Producto> productoEncontrado = productoRepository.findById(producto.getId());

        if(productoEncontrado.isEmpty()) {

            throw new NoEncontradoException("El producto no fue encontrado");

        }

        //Verifico que el usuario exista

        UsuarioDTO usuarioEncontrado = usuarioService.buscarPorId(usuario.getId());

        if(usuarioEncontrado == null) {

            throw new NoEncontradoException("El usuario no fue encontrado");

        }

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

        //Verifico que el producto no este reservado en esa fecha

        if(!Utiles.esRangoValido(fechaInicio, fechaFin, productoService.fechasOcupadas(producto.getId()) )){
            throw new DatosIncorrectosException("El producto posee dias reservados en el intervalo especificado");
        }

        Reserva reserva = mapper.convertValue(reservaDTO, Reserva.class);

        Reserva reservaGuardado = reservaRepository.save(reserva);

        ReservaDTO reservaDTOGuardado = mapper.convertValue(reservaGuardado, ReservaDTO.class);


        if (ciudadNueva != null && !usuarioEncontrado.getCiudad().equalsIgnoreCase(ciudadNueva)){

            usuarioEncontrado.setCiudad(ciudadNueva);

            usuarioService.actualizar(usuarioEncontrado);

        }

        logger.info("Se creo la reserva : " + reservaDTOGuardado);

        return reservaDTOGuardado;

    }

    @Override
    public List<ReservaDTO> findByProductoId(Long productoId) throws NoEncontradoException {

        List<Reserva> reservas = reservaRepository.findByProductoId(productoId);

        List<ReservaDTO> reservasDTO = new ArrayList<>();
        for(Reserva reserva : reservas){
            reservasDTO.add(mapper.convertValue(reserva, ReservaDTO.class));
        }
        logger.info("Se listaron todas las reservas para el producto con ID " + productoId);

        return reservasDTO;

    }

    @Override
    public List<ReservaDTO> findByUsuarioId(Long usuarioId) {

        List<Reserva> reservas = reservaRepository.findByUsuarioId(usuarioId);

        List<ReservaDTO> reservasDTO = new ArrayList<>();
        for(Reserva reserva : reservas){
            reservasDTO.add(mapper.convertValue(reserva, ReservaDTO.class));
        }
        logger.info("Se listaron todas las reservas para el usuario con ID " + usuarioId);

        return reservasDTO;

    }

}

