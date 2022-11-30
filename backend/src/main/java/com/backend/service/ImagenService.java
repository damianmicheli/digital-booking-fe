package com.backend.service;

import com.backend.dto.ImagenDTO;
import com.backend.entity.Imagen;
import com.backend.repository.IImagenRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImagenService implements IImagenService{

    private final Logger logger = Logger.getLogger(CiudadService.class);

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    IImagenRepository imagenRepository;

    @Override
    public ImagenDTO guardar(ImagenDTO imagenDTO) {

        Imagen imagen = mapper.convertValue(imagenDTO, Imagen.class);

        Imagen imagenGuardada = imagenRepository.save(imagen);

        ImagenDTO imagenDTOGuardada = mapper.convertValue(imagenGuardada,ImagenDTO.class);

        logger.info("Se guardó la imagen: " + imagenDTOGuardada);

        return imagenDTOGuardada;
    }

}
