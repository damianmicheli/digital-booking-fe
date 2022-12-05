package com.backend.service;
import com.backend.dto.CaracteristicaDTO;
import com.backend.entity.Caracteristica;
import com.backend.repository.ICaracteristicaRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;



@Service
public class CaracteristicaService implements ICaracteristicaService{

    private final Logger logger = Logger.getLogger(CiudadService.class);

    @Autowired
    private ICaracteristicaRepository caracteristicaRepository;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public CaracteristicaDTO guardar(CaracteristicaDTO caracteristicaDTO) {

        Caracteristica caracteristica = mapper.convertValue(caracteristicaDTO, Caracteristica.class);

        Caracteristica caracteristicaGuardado = caracteristicaRepository.save(caracteristica);

        CaracteristicaDTO caracteristicaDTOGuardado = mapper.convertValue(caracteristicaGuardado,CaracteristicaDTO.class);

        logger.info("Se guardó la Caracteristica: " + caracteristicaDTOGuardado);

        return caracteristicaDTOGuardado;


    }


    @Override
    public List<CaracteristicaDTO> listarTodas() {
        List<Caracteristica> caracteristicas = caracteristicaRepository.findAll();
        List<CaracteristicaDTO> caracteristicasDTO = new ArrayList<>();

        for (Caracteristica caracteristica : caracteristicas){
            caracteristicasDTO.add(mapper.convertValue(caracteristica, CaracteristicaDTO.class));
        }

        logger.info("Se listaron todas las caracterisiticas.");

        return caracteristicasDTO;
    }



}
