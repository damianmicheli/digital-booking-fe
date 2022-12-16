package com.backend.util;

import com.backend.dto.*;
import com.backend.entity.Rol;
import com.backend.repository.IRolRepository;
import com.backend.service.*;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Component
public class DataLoader implements ApplicationRunner {
//public class DataLoader  {

    private final Logger logger = Logger.getLogger(DataLoader.class);

    @Autowired
    ICategoriaService categoriasService;

    @Autowired
    ICaracteristicaService caracteristicaService;

    @Autowired
    ICiudadService ciudadService;

    @Autowired
    IRolRepository rolRepository;

    @Autowired
    IUsuarioService usuarioService;

    @Autowired
    IProductoService productoService;

    @Autowired
    IReservaService reservaService;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        try {
            // Roles

            rolRepository.save(new Rol("ROLE_ADMIN"));
            rolRepository.save(new Rol("ROLE_USER"));

            // Imagenes

            // crear array imagenes
            List<ImagenDTO> imagenes1 = new ArrayList<>();
            List<ImagenDTO> imagenes2 = new ArrayList<>();
            List<ImagenDTO> imagenes3 = new ArrayList<>();
            List<ImagenDTO> imagenes4 = new ArrayList<>();
            List<ImagenDTO> imagenes5 = new ArrayList<>();
            List<ImagenDTO> imagenes6 = new ArrayList<>();
            List<ImagenDTO> imagenes7 = new ArrayList<>();
            List<ImagenDTO> imagenes8 = new ArrayList<>();
            List<ImagenDTO> imagenes9 = new ArrayList<>();
            List<ImagenDTO> imagenes10 = new ArrayList<>();
            List<ImagenDTO> imagenes11 = new ArrayList<>();
            List<ImagenDTO> imagenes12 = new ArrayList<>();
            List<ImagenDTO> imagenes13 = new ArrayList<>();
            List<ImagenDTO> imagenes14 = new ArrayList<>();
            List<ImagenDTO> imagenes15 = new ArrayList<>();
            List<ImagenDTO> imagenes16 = new ArrayList<>();
            List<ImagenDTO> imagenes17 = new ArrayList<>();
            List<ImagenDTO> imagenes18 = new ArrayList<>();
            List<ImagenDTO> imagenes19 = new ArrayList<>();
            List<ImagenDTO> imagenes20 = new ArrayList<>();
            List<ImagenDTO> imagenes21 = new ArrayList<>();
            List<ImagenDTO> imagenes22 = new ArrayList<>();
            List<ImagenDTO> imagenes23 = new ArrayList<>();
            List<ImagenDTO> imagenes24 = new ArrayList<>();
            List<ImagenDTO> imagenes25 = new ArrayList<>();
            List<ImagenDTO> imagenes26 = new ArrayList<>();
            List<ImagenDTO> imagenes30 = new ArrayList<>();
            List<ImagenDTO> imagenes31 = new ArrayList<>();
            List<ImagenDTO> imagenes32 = new ArrayList<>();
            List<ImagenDTO> imagenes33 = new ArrayList<>();
            List<ImagenDTO> imagenes34 = new ArrayList<>();
            List<ImagenDTO> imagenes35 = new ArrayList<>();
            List<ImagenDTO> imagenes36 = new ArrayList<>();
            List<ImagenDTO> imagenes37 = new ArrayList<>();
            List<ImagenDTO> imagenes38 = new ArrayList<>();
            List<ImagenDTO> imagenes39 = new ArrayList<>();
            List<ImagenDTO> imagenes40 = new ArrayList<>();
            List<ImagenDTO> imagenes41 = new ArrayList<>();
            List<ImagenDTO> imagenes42 = new ArrayList<>();
            List<ImagenDTO> imagenes43 = new ArrayList<>();
            List<ImagenDTO> imagenes44 = new ArrayList<>();


            {

                imagenes2.add(new ImagenDTO("depto-01-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-01-01.webp"));
                imagenes2.add(new ImagenDTO("depto-01-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-01-02.webp"));
                imagenes2.add(new ImagenDTO("depto-01-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-01-03.webp"));
                imagenes2.add(new ImagenDTO("depto-01-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-01-04.webp"));
                imagenes2.add(new ImagenDTO("depto-01-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-01-05.webp"));


                imagenes6.add(new ImagenDTO("depto-02-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-02-01.webp"));
                imagenes6.add(new ImagenDTO("depto-02-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-02-02.webp"));
                imagenes6.add(new ImagenDTO("depto-02-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-02-03.webp"));
                imagenes6.add(new ImagenDTO("depto-02-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-02-04.webp"));
                imagenes6.add(new ImagenDTO("depto-02-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-02-05.webp"));


                imagenes10.add(new ImagenDTO("depto-03-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-03-01.webp"));
                imagenes10.add(new ImagenDTO("depto-03-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-03-02.webp"));
                imagenes10.add(new ImagenDTO("depto-03-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-03-03.webp"));
                imagenes10.add(new ImagenDTO("depto-03-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-03-04.webp"));
                imagenes10.add(new ImagenDTO("depto-03-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-03-05.webp"));


                imagenes14.add(new ImagenDTO("depto-04-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-04-01.webp"));
                imagenes14.add(new ImagenDTO("depto-04-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-04-02.webp"));
                imagenes14.add(new ImagenDTO("depto-04-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-04-03.webp"));
                imagenes14.add(new ImagenDTO("depto-04-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-04-04.webp"));
                imagenes14.add(new ImagenDTO("depto-04-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-04-05.webp"));


                imagenes18.add(new ImagenDTO("depto-05-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-05-01.webp"));
                imagenes18.add(new ImagenDTO("depto-05-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-05-02.webp"));
                imagenes18.add(new ImagenDTO("depto-05-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-05-03.webp"));
                imagenes18.add(new ImagenDTO("depto-05-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-05-04.webp"));
                imagenes18.add(new ImagenDTO("depto-05-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-05-05.webp"));


                imagenes22.add(new ImagenDTO("depto-06-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-06-01.webp"));
                imagenes22.add(new ImagenDTO("depto-06-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-06-02.webp"));
                imagenes22.add(new ImagenDTO("depto-06-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-06-03.webp"));
                imagenes22.add(new ImagenDTO("depto-06-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-06-04.webp"));
                imagenes22.add(new ImagenDTO("depto-06-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-06-05.webp"));


                imagenes26.add(new ImagenDTO("depto-07-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-07-01.webp"));
                imagenes26.add(new ImagenDTO("depto-07-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-07-02.webp"));
                imagenes26.add(new ImagenDTO("depto-07-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-07-03.webp"));
                imagenes26.add(new ImagenDTO("depto-07-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-07-04.webp"));
                imagenes26.add(new ImagenDTO("depto-07-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-07-05.webp"));


                imagenes33.add(new ImagenDTO("depto-08-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-08-01.webp"));
                imagenes33.add(new ImagenDTO("depto-08-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-08-02.webp"));
                imagenes33.add(new ImagenDTO("depto-08-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-08-03.webp"));
                imagenes33.add(new ImagenDTO("depto-08-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-08-04.webp"));
                imagenes33.add(new ImagenDTO("depto-08-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-08-05.webp"));


                imagenes37.add(new ImagenDTO("depto-09-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-09-01.webp"));
                imagenes37.add(new ImagenDTO("depto-09-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-09-02.webp"));
                imagenes37.add(new ImagenDTO("depto-09-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-09-03.webp"));
                imagenes37.add(new ImagenDTO("depto-09-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-09-04.webp"));
                imagenes37.add(new ImagenDTO("depto-09-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-09-05.webp"));

                imagenes44.add(new ImagenDTO("depto-10-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-10-01.jpg"));
                imagenes44.add(new ImagenDTO("depto-10-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-10-02.webp"));
                imagenes44.add(new ImagenDTO("depto-10-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-10-03.jpg"));
                imagenes44.add(new ImagenDTO("depto-10-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-10-04.jpg"));
                imagenes44.add(new ImagenDTO("depto-10-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/depto-10-05.jpg"));


                imagenes1.add(new ImagenDTO("casa-01-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-01-01.webp"));
                imagenes1.add(new ImagenDTO("casa-01-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-01-02.webp"));
                imagenes1.add(new ImagenDTO("casa-01-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-01-03.webp"));
                imagenes1.add(new ImagenDTO("casa-01-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-01-04.webp"));
                imagenes1.add(new ImagenDTO("casa-01-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-01-05.webp"));


                imagenes5.add(new ImagenDTO("casa-02-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-02-01.webp"));
                imagenes5.add(new ImagenDTO("casa-02-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-02-02.webp"));
                imagenes5.add(new ImagenDTO("casa-02-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-02-03.webp"));
                imagenes5.add(new ImagenDTO("casa-02-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-02-04.webp"));
                imagenes5.add(new ImagenDTO("casa-02-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-02-05.webp"));


                imagenes9.add(new ImagenDTO("casa-03-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-03-01.webp"));
                imagenes9.add(new ImagenDTO("casa-03-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-03-02.webp"));
                imagenes9.add(new ImagenDTO("casa-03-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-03-03.webp"));
                imagenes9.add(new ImagenDTO("casa-03-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-03-04.webp"));
                imagenes9.add(new ImagenDTO("casa-03-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-03-05.webp"));


                imagenes13.add(new ImagenDTO("casa-04-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-04-01.webp"));
                imagenes13.add(new ImagenDTO("casa-04-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-04-02.webp"));
                imagenes13.add(new ImagenDTO("casa-04-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-04-03.webp"));
                imagenes13.add(new ImagenDTO("casa-04-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-04-04.webp"));
                imagenes13.add(new ImagenDTO("casa-04-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-04-05.webp"));


                imagenes17.add(new ImagenDTO("casa-05-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-05-01.webp"));
                imagenes17.add(new ImagenDTO("casa-05-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-05-02.webp"));
                imagenes17.add(new ImagenDTO("casa-05-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-05-03.webp"));
                imagenes17.add(new ImagenDTO("casa-05-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-05-04.webp"));
                imagenes17.add(new ImagenDTO("casa-05-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-05-05.webp"));


                imagenes21.add(new ImagenDTO("casa-06-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-06-01.webp"));
                imagenes21.add(new ImagenDTO("casa-06-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-06-02.webp"));
                imagenes21.add(new ImagenDTO("casa-06-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-06-03.webp"));
                imagenes21.add(new ImagenDTO("casa-06-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-06-04.webp"));
                imagenes21.add(new ImagenDTO("casa-06-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-06-05.webp"));


                imagenes25.add(new ImagenDTO("casa-07-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-07-01.webp"));
                imagenes25.add(new ImagenDTO("casa-07-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-07-02.webp"));
                imagenes25.add(new ImagenDTO("casa-07-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-07-03.webp"));
                imagenes25.add(new ImagenDTO("casa-07-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-07-04.webp"));
                imagenes25.add(new ImagenDTO("casa-07-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-07-05.webp"));


                imagenes32.add(new ImagenDTO("casa-08-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-08-01.webp"));
                imagenes32.add(new ImagenDTO("casa-08-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-08-02.webp"));
                imagenes32.add(new ImagenDTO("casa-08-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-08-03.webp"));
                imagenes32.add(new ImagenDTO("casa-08-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-08-04.webp"));
                imagenes32.add(new ImagenDTO("casa-08-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-08-05.webp"));


                imagenes36.add(new ImagenDTO("casa-09-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-09-01.webp"));
                imagenes36.add(new ImagenDTO("casa-09-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-09-02.webp"));
                imagenes36.add(new ImagenDTO("casa-09-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-09-03.webp"));
                imagenes36.add(new ImagenDTO("casa-09-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-09-04.webp"));
                imagenes36.add(new ImagenDTO("casa-09-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-09-05.webp"));

                imagenes40.add(new ImagenDTO("casa-10-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-10-01.webp"));
                imagenes40.add(new ImagenDTO("casa-10-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-10-02.webp"));
                imagenes40.add(new ImagenDTO("casa-10-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-10-03.webp"));
                imagenes40.add(new ImagenDTO("casa-10-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-10-04.webp"));
                imagenes40.add(new ImagenDTO("casa-10-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-10-05.webp"));
                imagenes41.add(new ImagenDTO("casa-11-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-11-02.webp"));
                imagenes41.add(new ImagenDTO("casa-11-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-11-06.webp"));
                imagenes41.add(new ImagenDTO("casa-11-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-11-03.webp"));
                imagenes41.add(new ImagenDTO("casa-11-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-11-04.webp"));
                imagenes41.add(new ImagenDTO("casa-11-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casa-11-05.jpg"));


                imagenes3.add(new ImagenDTO("cabana-01-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-01-01.webp"));
                imagenes3.add(new ImagenDTO("cabana-01-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-01-02.webp"));
                imagenes3.add(new ImagenDTO("cabana-01-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-01-03.webp"));
                imagenes3.add(new ImagenDTO("cabana-01-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-01-04.webp"));
                imagenes3.add(new ImagenDTO("cabana-01-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-01-05.webp"));


                imagenes7.add(new ImagenDTO("cabana-02-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-02-01.webp"));
                imagenes7.add(new ImagenDTO("cabana-02-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-02-02.webp"));
                imagenes7.add(new ImagenDTO("cabana-02-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-02-03.webp"));
                imagenes7.add(new ImagenDTO("cabana-02-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-02-04.webp"));
                imagenes7.add(new ImagenDTO("cabana-02-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-02-05.webp"));


                imagenes11.add(new ImagenDTO("cabana-03-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-03-01.webp"));
                imagenes11.add(new ImagenDTO("cabana-03-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-03-02.webp"));
                imagenes11.add(new ImagenDTO("cabana-03-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-03-03.webp"));
                imagenes11.add(new ImagenDTO("cabana-03-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-03-04.webp"));
                imagenes11.add(new ImagenDTO("cabana-03-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-03-05.webp"));


                imagenes15.add(new ImagenDTO("cabana-04-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-04-01.webp"));
                imagenes15.add(new ImagenDTO("cabana-04-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-04-02.webp"));
                imagenes15.add(new ImagenDTO("cabana-04-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-04-03.webp"));
                imagenes15.add(new ImagenDTO("cabana-04-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-04-04.webp"));
                imagenes15.add(new ImagenDTO("cabana-04-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-04-05.webp"));


                imagenes19.add(new ImagenDTO("cabana-05-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-05-01.webp"));
                imagenes19.add(new ImagenDTO("cabana-05-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-05-02.webp"));
                imagenes19.add(new ImagenDTO("cabana-05-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-05-03.webp"));
                imagenes19.add(new ImagenDTO("cabana-05-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-05-04.webp"));
                imagenes19.add(new ImagenDTO("cabana-05-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-05-05.webp"));


                imagenes23.add(new ImagenDTO("cabana-06-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-06-01.webp"));
                imagenes23.add(new ImagenDTO("cabana-06-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-06-02.webp"));
                imagenes23.add(new ImagenDTO("cabana-06-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-06-03.webp"));
                imagenes23.add(new ImagenDTO("cabana-06-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-06-04.webp"));
                imagenes23.add(new ImagenDTO("cabana-06-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-06-05.webp"));


                imagenes30.add(new ImagenDTO("cabana-07-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-07-01.webp"));
                imagenes30.add(new ImagenDTO("cabana-07-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-07-02.webp"));
                imagenes30.add(new ImagenDTO("cabana-07-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-07-03.webp"));
                imagenes30.add(new ImagenDTO("cabana-07-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-07-04.webp"));
                imagenes30.add(new ImagenDTO("cabana-07-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-07-05.webp"));


                imagenes34.add(new ImagenDTO("cabana-08-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-08-01.webp"));
                imagenes34.add(new ImagenDTO("cabana-08-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-08-02.webp"));
                imagenes34.add(new ImagenDTO("cabana-08-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-08-03.webp"));
                imagenes34.add(new ImagenDTO("cabana-08-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-08-04.webp"));
                imagenes34.add(new ImagenDTO("cabana-08-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-08-05.webp"));


                imagenes38.add(new ImagenDTO("cabana-09-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-09-01.webp"));
                imagenes38.add(new ImagenDTO("cabana-09-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-09-02.webp"));
                imagenes38.add(new ImagenDTO("cabana-09-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-09-03.webp"));
                imagenes38.add(new ImagenDTO("cabana-09-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-09-04.webp"));
                imagenes38.add(new ImagenDTO("cabana-09-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-09-05.webp"));

                imagenes42.add(new ImagenDTO("cabana-10-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-10-01.webp"));
                imagenes42.add(new ImagenDTO("cabana-10-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-10-02.webp"));
                imagenes42.add(new ImagenDTO("cabana-10-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-10-03.webp"));
                imagenes42.add(new ImagenDTO("cabana-10-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-10-04.webp"));
                imagenes42.add(new ImagenDTO("cabana-10-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-10-05.webp"));

                imagenes43.add(new ImagenDTO("cabana-11-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-11-01.webp"));
                imagenes43.add(new ImagenDTO("cabana-11-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-11-02.webp"));
                imagenes43.add(new ImagenDTO("cabana-11-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-11-03.webp"));
                imagenes43.add(new ImagenDTO("cabana-11-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-11-04.webp"));
                imagenes43.add(new ImagenDTO("cabana-11-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/cabana-11-05.webp"));


                imagenes4.add(new ImagenDTO("casaplaya-01-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-01-01.webp"));
                imagenes4.add(new ImagenDTO("casaplaya-01-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-01-02.webp"));
                imagenes4.add(new ImagenDTO("casaplaya-01-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-01-03.webp"));
                imagenes4.add(new ImagenDTO("casaplaya-01-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-01-04.webp"));
                imagenes4.add(new ImagenDTO("casaplaya-01-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-01-05.webp"));


                imagenes8.add(new ImagenDTO("casaplaya-02-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-02-01.webp"));
                imagenes8.add(new ImagenDTO("casaplaya-02-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-02-02.webp"));
                imagenes8.add(new ImagenDTO("casaplaya-02-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-02-03.webp"));
                imagenes8.add(new ImagenDTO("casaplaya-02-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-02-04.webp"));
                imagenes8.add(new ImagenDTO("casaplaya-02-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-02-05.webp"));


                imagenes12.add(new ImagenDTO("casaplaya-03-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-03-01.webp"));
                imagenes12.add(new ImagenDTO("casaplaya-03-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-03-02.webp"));
                imagenes12.add(new ImagenDTO("casaplaya-03-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-03-03.webp"));
                imagenes12.add(new ImagenDTO("casaplaya-03-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-03-04.webp"));
                imagenes12.add(new ImagenDTO("casaplaya-03-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-03-05.webp"));


                imagenes16.add(new ImagenDTO("casaplaya-04-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-04-01.webp"));
                imagenes16.add(new ImagenDTO("casaplaya-04-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-04-02.webp"));
                imagenes16.add(new ImagenDTO("casaplaya-04-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-04-03.webp"));
                imagenes16.add(new ImagenDTO("casaplaya-04-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-04-04.webp"));
                imagenes16.add(new ImagenDTO("casaplaya-04-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-04-05.webp"));


                imagenes20.add(new ImagenDTO("casaplaya-05-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-05-01.webp"));
                imagenes20.add(new ImagenDTO("casaplaya-05-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-05-02.webp"));
                imagenes20.add(new ImagenDTO("casaplaya-05-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-05-03.webp"));
                imagenes20.add(new ImagenDTO("casaplaya-05-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-05-04.webp"));
                imagenes20.add(new ImagenDTO("casaplaya-05-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-05-05.webp"));


                imagenes24.add(new ImagenDTO("casaplaya-06-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-06-01.webp"));
                imagenes24.add(new ImagenDTO("casaplaya-06-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-06-02.webp"));
                imagenes24.add(new ImagenDTO("casaplaya-06-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-06-03.webp"));
                imagenes24.add(new ImagenDTO("casaplaya-06-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-06-04.webp"));
                imagenes24.add(new ImagenDTO("casaplaya-06-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-06-05.webp"));


                imagenes31.add(new ImagenDTO("casaplaya-07-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-07-01.webp"));
                imagenes31.add(new ImagenDTO("casaplaya-07-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-07-02.webp"));
                imagenes31.add(new ImagenDTO("casaplaya-07-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-07-03.webp"));
                imagenes31.add(new ImagenDTO("casaplaya-07-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-07-04.webp"));
                imagenes31.add(new ImagenDTO("casaplaya-07-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-07-05.webp"));


                imagenes35.add(new ImagenDTO("casaplaya-08-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-08-01.webp"));
                imagenes35.add(new ImagenDTO("casaplaya-08-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-08-02.webp"));
                imagenes35.add(new ImagenDTO("casaplaya-08-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-08-03.webp"));
                imagenes35.add(new ImagenDTO("casaplaya-08-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-08-04.webp"));
                imagenes35.add(new ImagenDTO("casaplaya-08-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-08-05.webp"));


                imagenes39.add(new ImagenDTO("casaplaya-09-01", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-09-01.webp"));
                imagenes39.add(new ImagenDTO("casaplaya-09-02", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-09-02.webp"));
                imagenes39.add(new ImagenDTO("casaplaya-09-03", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-09-03.webp"));
                imagenes39.add(new ImagenDTO("casaplaya-09-04", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-09-04.webp"));
                imagenes39.add(new ImagenDTO("casaplaya-09-05", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/casaplaya-09-05.webp"));

            }


            // Categorias
            List<CategoriaDTO> categorias = new ArrayList<>();

            categorias.add(new CategoriaDTO("807.105", "Casa", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/categorias/casa.jpeg"));
            categorias.add(new CategoriaDTO("139.578", "Departamento", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/categorias/departamento.jpeg"));
            categorias.add(new CategoriaDTO("567.406", "Cabaña", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/categorias/cabana.jpeg"));
            categorias.add(new CategoriaDTO("89.766", "Casa de playa", "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/categorias/casa-de-playa.jpeg"));

            for (CategoriaDTO categoria : categorias) {
                categoriasService.guardar(categoria);
            }

            // Caracteristicas

            List<CaracteristicaDTO> caracteristicas = new ArrayList<>();


            { // crear array caracteristicas v2
                caracteristicas.add(new CaracteristicaDTO("Piscina", "swimmer"));
                caracteristicas.add(new CaracteristicaDTO("Parrilla", "fire"));
                caracteristicas.add(new CaracteristicaDTO("Aire Acondicionado", "snowflake"));
                caracteristicas.add(new CaracteristicaDTO("WiFi", "wifi"));
                caracteristicas.add(new CaracteristicaDTO("Acceso a la playa", "umbrella-beach"));
                caracteristicas.add(new CaracteristicaDTO("Estacionamiento", "car"));
                caracteristicas.add(new CaracteristicaDTO("Apto Mascotas", "paw"));
                caracteristicas.add(new CaracteristicaDTO("Botiquín", "suitcase-medical"));
                caracteristicas.add(new CaracteristicaDTO("Televisión", "tv"));
                caracteristicas.add(new CaracteristicaDTO("Cocina", "kitchen-set"));
                caracteristicas.add(new CaracteristicaDTO("Calefacción", "temperature-arrow-up"));
                caracteristicas.add(new CaracteristicaDTO("Caja de seguridad", "vault"));
                caracteristicas.add(new CaracteristicaDTO("Cámaras de Seguridad", "video"));
                caracteristicas.add(new CaracteristicaDTO("Shampoo/Acondicionador", "pump-soap"));
            }

            for (CaracteristicaDTO caracteristica : caracteristicas) {
                caracteristicaService.guardar(caracteristica);
            }


            // Ciudades

            List<CiudadDTO> ciudades = new ArrayList<>();

            // crear array ciudades
            {
                ciudades.add(new CiudadDTO("Córdoba", "Argentina"));
                ciudades.add(new CiudadDTO("Rio Cuarto", "Argentina"));
                ciudades.add(new CiudadDTO("Rosario", "Argentina"));
                ciudades.add(new CiudadDTO("Mar del Plata", "Argentina"));
                ciudades.add(new CiudadDTO("Miramar", "Argentina"));
                ciudades.add(new CiudadDTO("Pinamar", "Argentina"));
                ciudades.add(new CiudadDTO("Ciudad Autónoma de Buenos Aires", "Argentina"));
                ciudades.add(new CiudadDTO("Las Toninas", "Argentina"));
                ciudades.add(new CiudadDTO("Luján de Cuyo", "Argentina"));
                ciudades.add(new CiudadDTO("San Miguel de Tucumán", "Argentina"));
                ciudades.add(new CiudadDTO("Paraná", "Argentina"));
                ciudades.add(new CiudadDTO("Gualeguaychú", "Argentina"));
                ciudades.add(new CiudadDTO("Cafayate", "Argentina"));
                ciudades.add(new CiudadDTO("Salta", "Argentina"));
                ciudades.add(new CiudadDTO("Puerto Iguazú", "Argentina"));
                ciudades.add(new CiudadDTO("Resistencia", "Argentina"));
                ciudades.add(new CiudadDTO("San Salvador de Jujuy", "Argentina"));
                ciudades.add(new CiudadDTO("El Bolsón", "Argentina"));
                ciudades.add(new CiudadDTO("San Carlos de Bariloche", "Argentina"));
                ciudades.add(new CiudadDTO("San Martín de los Andes", "Argentina"));
                ciudades.add(new CiudadDTO("Villa La Angostura", "Argentina"));
                ciudades.add(new CiudadDTO("Neuquén", "Argentina"));
                ciudades.add(new CiudadDTO("Comodoro Rivadavia", "Argentina"));
                ciudades.add(new CiudadDTO("Trelew", "Argentina"));
                ciudades.add(new CiudadDTO("Villa Mercedes", "Argentina"));
                ciudades.add(new CiudadDTO("San Fernando del Valle de Catamarca", "Argentina"));
                ciudades.add(new CiudadDTO("Santa Rosa", "Argentina"));
                ciudades.add(new CiudadDTO("Esquel", "Argentina"));
                ciudades.add(new CiudadDTO("Ushuaia", "Argentina"));
            }


            for (CiudadDTO ciudad : ciudades) {
                ciudadService.guardar(ciudad);

            }

            // Usuarios

            List<UsuarioDTO> usuarios = new ArrayList<>();

            // crear array usuarios
            {
                usuarios.add(new UsuarioDTO("Admin", "Admin", "DBadmin1", "admin@mail.com", "Valentín Alsina", Set.of(new RolDTO(1L))));
                usuarios.add(new UsuarioDTO("Guadalupe", "Montero", "Guada2022", "guadamontero@gmail.com", "Córdoba", Set.of(new RolDTO(2L))));
                usuarios.add(new UsuarioDTO("David", "Castro", "David2022", "davidcastro@gmail.com", "Ciudad", Set.of(new RolDTO(2L))));
                usuarios.add(new UsuarioDTO("Karina", "Iannello", "Kari2022", "kariiannello@gmail.com", "Ciudad", Set.of(new RolDTO(2L))));
                usuarios.add(new UsuarioDTO("Marina", "Blanco", "Mari2022", "mariblanco@gmail.com", "Ciudad", Set.of(new RolDTO(2L))));
                usuarios.add(new UsuarioDTO("Damián", "Micheli", "Shinigam1", "damianmicheli@gmail.com", "CABA", Set.of(new RolDTO(2L))));
            }

            for (UsuarioDTO usuario : usuarios) {
                usuarioService.registrar(usuario);

            }

            // Productos

            List<ProductoDTO> productos = new ArrayList<>();

            // crear combos de caracteristicas

            List<CaracteristicaDTO> combo1 = new ArrayList<>();

            combo1.add(new CaracteristicaDTO(1L));
            combo1.add(new CaracteristicaDTO(3L));
            combo1.add(new CaracteristicaDTO(5L));
            combo1.add(new CaracteristicaDTO(7L));

            List<CaracteristicaDTO> combo2 = new ArrayList<>();

            combo2.add(new CaracteristicaDTO(2L));
            combo2.add(new CaracteristicaDTO(4L));
            combo2.add(new CaracteristicaDTO(6L));
            combo2.add(new CaracteristicaDTO(8L));

            List<CaracteristicaDTO> combo3 = new ArrayList<>();

            combo3.add(new CaracteristicaDTO(9L));
            combo3.add(new CaracteristicaDTO(11L));
            combo3.add(new CaracteristicaDTO(13L));
            combo3.add(new CaracteristicaDTO(1L));

            List<CaracteristicaDTO> combo4 = new ArrayList<>();

            combo4.add(new CaracteristicaDTO(10L));
            combo4.add(new CaracteristicaDTO(12L));
            combo4.add(new CaracteristicaDTO(14L));
            combo4.add(new CaracteristicaDTO(2L));



            // crear array productos

            productos.add(new ProductoDTO(
                    "Si estás buscando un lugar tranquilo, ésta es la casa ideal. Está ubicada a 10km de la Villa de Tafí del Valle, a 1km de la ruta provincial 325 en un terreno de una hectárea que comparte con otra casa. Lugar perfecto para desconectarse, descansar, hacer caminatas, cabalgatas, etc. En las inmediaciones hay cascadas, arroyos, yacimientos arqueológicos y la ruta de los artesanos..\",\n",
                    "Paysandú 2400, Tafí Viejo, Tucumán",
                    "-26.8118341","-65.3317237",
                    "Casa Roja",
                    "Cancelación gratuita, Consultá la política de cancelación completa del anfitrión que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.",
                    "No se indicó si hay detector de monóxido de carbono, No se indicó si hay detector de humo, No apto para bebés (menores de 2 años)",
                    "Check-in a partir de las 15:00, Check-out antes de las 10:00, 5 huéspedes como máximo",
                    "Casa alegre con pileta",
                    new CategoriaDTO(1L),
                    new CiudadDTO(10L),
                    imagenes1,
                    combo2));

            productos.add(new ProductoDTO(
                    "Es un lugar comodo, con una cocina completa, un lugar para entretenimiento y tambien para tu jornada laboral. El descanso fue nuestro objetivo, lejos del bullicio del microcentro pero tambien con los recursos necesarios para pasar un tiempo agradable",
                    "C. Caseros 1012, X5800 Río Cuarto, Córdoba",
                    "-33.1219503","-64.3954335",
                    "Depto El Descanso",
                    "No se puede cancelar, No hay devolucion",
                    "No prender fuego, No fumar",
                    "Check-in a las 10, No se permiten mascotas",
                    "Departamento en alquiler temporario",
                    new CategoriaDTO(2L),
                    new CiudadDTO(2L),
                    imagenes2,
                    combo2));

            productos.add(new ProductoDTO(
                    "Nuestra vida cambió y ahora necesitamos lugares que nos brinden seguridad, calma y aire libre. La seguridad de que estarás, únicamente, con las personas con las que elegiste venir y la calma que da el contacto con la naturaleza, la vida apacible y sencilla. Las Marías es una Cabaña ubicada en Pueblo Belgrano, a sólo 5´ de Gualeguaychú, de Ñandubaysal y de dos complejos de aguas termales, lugares que querrás conocer. Vení a disfrutarla y volverás a elegirla.",
                    "25 de Mayo 480, E3280 Colón, Entre Ríos",
                    "-33.0248004","-58.5029979",
                    "Cabaña Las Marías",
                    "Cancelación gratuita, Consultá la política de cancelación completa del anfitrión que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.",
                    "No hay un detector de humo, No hace falta un detector de monóxido de carbono, Es necesario subir escaleras",
                    "Check-in: de 10:00 a 21:00, 4 huéspedes como máximo, No se permiten mascota",
                    "Hermosa cabaña en Gualeguaychú",
                    new CategoriaDTO(3L),
                    new CiudadDTO(12L),
                    imagenes3,
                    combo3));

            productos.add(new ProductoDTO(
                    "Hermosa y luminosa casa de tres ambientes (4 pax) ubicada en el Barrio Tridente, barrio tranquilo y cerca de todo, zona de casas de vivienda permanente. Cuenta con cocina totalmente equipada, living comedor con Smart TV de 50’, dormitorio con dos camas individuales, baño completo, dormitorio principal en suite con vestidor, cama matrimonial tamaño King y Smart TV de 40’. Cuenta con pérgola semi-cubierta para el auto, galería semi-cubierta con pequeña mesa exterior, parrilla y amplio jardín.",
                    "De las Burriquetas 247, B7167 Pinamar, Provincia de Buenos Aires",
                    "-38.00773538093382","-57.54027148963069",
                    "Casa Los Titanes",
                    "No se puede cancelar, No hay devolucion",
                    "No prender fuego, No fumar",
                    "Check-in a las 10, No se permiten mascotas",
                    "Alójate en el corazón de Pinamar",
                    new CategoriaDTO(4L),
                    new CiudadDTO(6L),
                    imagenes4,
                    combo4));

            productos.add(new ProductoDTO(
                    "La casa se encuentra en un lote de 1000 m de jardines floridos,piscina  y árboles que dan frescura al lugar. Colinda con viñedos de la Bodega Chandón. Zona de Bodegas y Restaurantes de excelencia. Se observa la Cordillera de los Andes con el Cordón del Plata\"que permanece nevado todo el año.",
                    "B° Terrazas del Pedemonte, M5507 Luján de Cuyo, Mendoza",
                    "-32.9702556","-68.9806974",
                    "Casa de Carlitos",
                    "No se puede cancelar, No hay devolucion",
                    "No prender fuego, No fumar",
                    "Check-in a las 10, No se permiten mascotas",
                    "Casa en Chacras en Callejón Privado",
                    new CategoriaDTO(1L),
                    new CiudadDTO(9L),
                    imagenes5,
                    combo1));

            productos.add(new ProductoDTO(
                    "Exclusivo departamento de 2 dormitorios en el corazón de Palermo Hollywood. Ideal para estadías largas, disfrutará de mucho sol en sus terrazas privadas. Recientemente añadimos un televisor de 42 pulgadas en el dormitorio. Disfrutarás de pisos climatizados, unidades de aire acondicionado frías y calientes en todas las habitaciones, ventanas dobles de vidrio y dos soleadas terrazas privadas. Vas a tener tu propia piscina privada en la azotea. Ten en cuenta que no es un jacuzzi. La temperatura del agua no se puede controlar.",
                    "Bonpland 2287, C1425FWC CABA",
                    "-34.5782922","-58.4496434",
                    "Depto Luminoso",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Departamento en complejo residencial entero",
                    new CategoriaDTO(2L),
                    new CiudadDTO(7L),
                    imagenes6,
                    combo2));


            productos.add(new ProductoDTO(
                    "Este lugar es unos de los pocos en Paraná con una vista hermosa al río de lado a lado. El espacio es muy cómodo , totalmente equipado con mobiliario de alta categoría, posee un balcón muy amplio , un dormitorio súper luminoso. Confortable, cuenta con un living comedor cocina practico y acogedor. A pasos de Boulevard Gálvez , y sus pintorescos restaurantes, casas de té , heladerías , centros históricos y recreativos.",
                    "Juan Barros Pasos 567, Paraná, Entre Ríos",
                    "-31.719687221494052","-60.51969089654929",
                    "Cabaña Hogareña",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Increíble cabaña con vista y acceso al río",
                    new CategoriaDTO(3L),
                    new CiudadDTO(11L),
                    imagenes7,
                    combo4));


            productos.add(new ProductoDTO(
                    "Esta casa se encuentra situada en el exclusivo barrio de Arenas del Sur, a tan sólo 10 minutos de las mejores playas de Mar del Plata y a 15-18 minutos del centro de la ciudad. Cuenta con todas las comodidades necesarias para familias como así también para parejas. El barrio es extremadamente tranquilo y con seguridad privada las 24 horas. Dispone de piscina, parque, parrilla, 3 amplias habitaciones (2 de ellas en suite) y cochera descubierta para 3 autos.",
                    "Leandro N. Alem 4221, B7600 Mar del Plata, Provincia de Buenos Aires",
                    "-37.98241851249228","-57.54476753189732",
                    "Casa Luciernaga",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Casa con piscina y vista al mar",
                    new CategoriaDTO(4L),
                    new CiudadDTO(4L),
                    imagenes8,
                    combo1));


            productos.add(new ProductoDTO(
                    "Hermosa casa sobre el Rio Paraná con vistas únicas. Patio con PISCINA. Decorada con objetos de decoración históricos del Sudeste Asiático. 3 Cuartos, cada un con su baño propio, living comedor cocina y quincho integrado. El río esta presente y se observa desde cada rincón de la casa, que cuenta con ventanales. Apta para 6 personas (excepcionalmente 7/8 estadias cortas). Aire acondicionado en todos los ambientes. Casero disponible para cualquier necesidad. Cochera privada para 2 autos.",
                    "Avenida Luis Etchevehere, Francisco de Miranda 331 Y, E3100 Paraná, Entre Ríos",
                    "-31.7190817","-60.5358215",
                    "Casa Selva",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Sudeste Asiático en el Rio Paraná con Pileta",
                    new CategoriaDTO(1L),
                    new CiudadDTO(11L),
                    imagenes9,
                    combo2));


            productos.add(new ProductoDTO(
                    "Se encuentra en uno de los barrios mas lindos de la ciudad. Barrio San Benito. Lugar en donde te despiertan los loritos al amanecer.  Con su diseño cálido vas a disfrutar de la tranquilidad que caracteriza el barrio. Cuenta con estacionamiento y patio cubierto.",
                    "A. P. Bell 263, U9100 Trelew, Chubut",
                    "-43.25279877444665","-65.313079456995",
                    "Depto Sureño",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de Trelew",
                    new CategoriaDTO(2L),
                    new CiudadDTO(24L),
                    imagenes10,
                    combo4));


            productos.add(new ProductoDTO(
                    "Las cabañas de encuentran en un lugar privilegiado de la ciudad, en zona céntrica y rodeado de vegetación. El barrio es agradable y muy tranquilo, ademas de ser uno de los mas antiguos de la ciudad. Cercano a supermercados, bares y restaurantes, terminal de ómnibus, entre otros.",
                    "RN12 km.5, 3370 Puerto Iguazú, Misiones",
                    "-25.6278765","-54.5870753",
                    "Cabaña Tropical",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Hermosa cabaña a 15 minutos de las Cataratas del Iguazú.",
                    new CategoriaDTO(3L),
                    new CiudadDTO(15L),
                    imagenes11,
                    combo1));


            productos.add(new ProductoDTO(
                    "Impecable casa, frente al mar, cerca de todo. Mucha luz natural. Equipamiento moderno. Aire acondicionado F/C en sus ambientes. Edificio familiar y de gran categoría, único en la zona. Estacionamiento incluido en el edificio, el cual tiene sistema de cámaras de seguridad. Frente a la mejor playa de la costa Argentina. A pocos metros del centro comercial. Amaneceres espectaculares desde la ventana del living. Totalmente equipado!! Cocina/termotanque/heladera con freezer/Lavarropas/plancha",
                    "Av. 26 26, Las Toninas, Provincia de Buenos Aires",
                    "-36.48746276153538","-56.692411347655124",
                    "Casa Estrella",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Hermosa casa con la mejor vista al mar",
                    new CategoriaDTO(4L),
                    new CiudadDTO(8L),
                    imagenes12,
                    combo1));


            productos.add(new ProductoDTO(
                    "Luminosa casa remodelada con diseño nórdico y detalles de estilo, tipo triplex con patio privado. Completamente equipado tanto en cocina como en habitaciones con todo lo necesario para una estadía inolvidable en Ushuaia. Ubicado en un complejo de departamentos residenciales, sobre una via principal con gran conectividad al centro de Ushuaia.",
                    "Yaganes 74, V9410 Ushuaia, Tierra del Fuego",
                    "-54.8068027","-68.3728429",
                    "Casa Nórdica",
                    "Esta reserva no es reembolsable, Consultá la política de cancelación completa del anfitrión que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Casa familiar con vista a las montañas",
                    new CategoriaDTO(1L),
                    new CiudadDTO(29L),
                    imagenes13,
                    combo3));


            productos.add(new ProductoDTO(
                    "Hermoso lugar para relajarse en la tranquila localidad de San Antonio, dpto Fray Mamerto Esquiu, Catamarca. Ideal para las personas que les gusta el treking, senderismo o rodar en bicicleta. A tan solo 10 minutos del centro de la ciudad de catamarca. Cuenta con piscina, patio y parrilla.",
                    "Rivadavia 381, K4751XAK San Fernando del Valle de Catamarca, Catamarca",
                    "-28.463600790957816","-65.77877034205237",
                    "Depto Luz",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de San Fernando del Valle de Catamarca",
                    new CategoriaDTO(2L),
                    new CiudadDTO(26L),
                    imagenes14,
                    combo4));


            productos.add(new ProductoDTO(
                    "Hermosa vista, muy iluminada, gran parque arbolado, en una de las zonas más altas del pueblo. No es un complejo de cabañas. Nuestra cabaña esta equipada con sommier, ropa de cama, agua caliente, anafe, microondas, heladera, parrilla, disco, mesa bajo los arboles. Smart TV 32\", wifi, seguridad. Parque de 2.200 mts, pileta de uso exclusivo. Opcionales: desayuno, travesias en 4x4, vuelos de bautismo, paracaídas, parapente tandem, bikes.",
                    "Constituyentes, X5176 Villa Giardino, Córdoba",
                    "-31.0255651","-64.5910387",
                    "Cabaña Tacuaritas",
                    "No se puede cancelar, No hay devolucion",
                    "No prender fuego, No fumar",
                    "Check-in a las 10, No se permiten mascotas",
                    "Cabaña Las Tacuaritas Villa Giardino, Cordoba",
                    new CategoriaDTO(3L),
                    new CiudadDTO(1L),
                    imagenes15,
                    combo3));


            productos.add(new ProductoDTO(
                    "Casa moderna y a estrenar a pasitos de la playa, ideal para quienes busquen paz y tranquilidad frente al mar. Incluye Wifi y Netflix!",
                    "Calle falsa 123",
                    "-38.28124776840572","-57.834694677958296",
                    "Casa Sol",
                    "No se puede cancelar, No hay devolucion",
                    "No prender fuego, no fumar",
                    "Check-in a las 10, No se permiten mascotas",
                    "Descanso y relax en Casa Sol",
                    new CategoriaDTO(4L),
                    new CiudadDTO(5L),
                    imagenes16,
                    combo1));


            productos.add(new ProductoDTO(
                    "Nuestra misión es brindarles una placentera estadía, ofreciendo un servicio destacado, atención personalizada, en dos hermosas y confortables cabañas individuales. Cada una de ellas posee dos dormitorios con una cama matrimonial en uno de ellos y en el otro dos camas individuales. Un baño con bañera y un antebaño, cocina totalmente equipada, living comedor con tv. Wifi. Aire acondicionado/ calefacción. Estacionamiento propio. Cámaras de seguridad y alarma.",
                    "Esteban Echeverría 420, Y4607AOF San Salvador de Jujuy, Jujuy",
                    "-24.2069806","-65.3263182",
                    "Casa El Refugio",
                    "Esta reserva no es reembolsable, Consultá la política de cancelación completa del anfitrión que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Casa El Refugio - 4 min del centro",
                    new CategoriaDTO(1L),
                    new CiudadDTO(17L),
                    imagenes17,
                    combo3));


            productos.add(new ProductoDTO(
                    "Nuestro departamento cuánta con una excelente vista al lago nahuel  huapi. Está ubicado a 12 cuadras del centro de Bariloche y cuenta con parking propio. Está equipado para 4 personas con sommiers de alta calidad, tv-cable, wifi y terraza. También le ofrecemos uso del playroom, gimnasio y pileta climatizada. Es recomendable venir en auto o alquilar uno ya que no esta ubicado en el centro de la ciudad.",
                    "Van Gogh 159 camino a Llao Llao, R8400 San Carlos de Bariloche, Río Negro",
                    "-41.0869123","-71.478983",
                    "Depto Luna",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Acogedor departamento a orillas del Nahuel Huapi",
                    new CategoriaDTO(2L),
                    new CiudadDTO(19L),
                    imagenes18,
                    combo4));


            productos.add(new ProductoDTO(
                    "Te alojarás en una cabaña de montaña rústica, artesanal y luminosa. Ubicada en un predio de 1 hectáreas de bosque y parque donde podrás disfrutar de un fogón bajo los árboles, cosechar tus propias cerezas, manzanas, guindas, duraznos.. y te maravillarás con una vista privilegiada. ",
                    "Costa del Rio Azul, R8430 El Bolsón, Río Negro",
                    "-41.955477453252136","-71.56589098053034",
                    "Cabaña del Sur",
                    "No se puede cancelar, No hay devolucion",
                    "No prender fuego, No fumar",
                    "Check-in a las 10, No se permiten mascotas",
                    "Cabaña del Sur, privacidad y bella vista",
                    new CategoriaDTO(3L),
                    new CiudadDTO(18L),
                    imagenes19,
                    combo1));


            productos.add(new ProductoDTO(
                    "Bienvenidos a mi casa ideal para vacaciones, descanso o trabajo! Está ubicado a una cuadra del mar, zona Playa Grande. Ideal para 2 a 4 personas, muy cómodo, amplio y luminoso. Baño completo con muy buena ducha, y cocina completa con microondas y freezer. Espacio de trabajo ideal Trabajo Remoto con WIFI 100 Mb. Bienvenidos: parejas, surfers, familias ó grupos de jóvenes súper responsables. Ambiente familiar y tranquilo.",
                    "Calle 4, Mar del Plata, Provincia de Buenos Aires",
                    "-38.028468275235696","-57.5326176097018",
                    "Casa Surf",
                    "No se puede cancelar, No hay devolucion",
                    "No prender fuego, No fumar",
                    "Check-in a las 10, No mascotas",
                    "Casa Moderna - Playa Grande 100m del mar",
                    new CategoriaDTO(4L),
                    new CiudadDTO(4L),
                    imagenes20,
                    combo1));


            productos.add(new ProductoDTO(
                    "Relájate con toda la familia en este alojamiento donde la tranquilidad se respira. Silencio absoluto, vistas excepcionales y un hermoso pulmón verde con los mejores accesos para recorrer las Sierras de Calamuchita.",
                    "El Mirador 1211, X5856 Embalse, Córdoba",
                    "-32.2012141","-64.4786747",
                    "Casa El Mirador",
                    "Esta reserva no es reembolsable, Consultá la política de cancelación completa del anfitrión que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Casa con vista a las montañas y el lago",
                    new CategoriaDTO(1L),
                    new CiudadDTO(1L),
                    imagenes21,
                    combo3));


            productos.add(new ProductoDTO(
                    "Este lugar especial está cerca de todo: va a ser muy fácil planear tu visita. A una cuadra de oficinas YPF y del hospital Castro Rendon. A tres cuadras del monumento a San Martin y municipalidad. Es centrico pero tranquilo en zona residencial y cercano a restaurantes, almacenes y bares. Se encuentra a tres cuadras de la Clinica de Imagenes (Leben Salud) y consultorios medicos.",
                    "Goya 160, Ruta 22, Q8300AYU Neuquén",
                    "-38.95349204160633","-68.14004088097248",
                    "Depto Azul",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Departamento con hermosa deco en zona centro de Neuquen",
                    new CategoriaDTO(2L),
                    new CiudadDTO(22L),
                    imagenes22,
                    combo4));


            productos.add(new ProductoDTO(
                    "Ideal para pescadores, entre árboles nativos y sobre una roca que llega al agua, entre el silbido del viento y el silencio de la montaña...pusimos esta cabaña que ofrece tranquilidad en un paisaje del sur muy poco frecuentado. Senderismo, pesca o simplemente ocio en un lugar que ofrece naturaleza virgen. Acogedora y cómoda con todo lo que se necesita...sólo trae tu caña de pescar, tu libro, tu comida...del resto, me encargo yo. Hay leña, la vecina hace pancito amasado.",
                    "Blvd. Quetrihue 378, Q8407 Villa La Angostura, Neuquén",
                    "-40.75596910884508","-71.6662952067871",
                    "Cabaña Sueño",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de",
                    new CategoriaDTO(3L),
                    new CiudadDTO(21L),
                    imagenes23,
                    combo1));


            productos.add(new ProductoDTO(
                    "Vivi el campo y el mar a 400 metros de la playa Cruz del Sur. Disfrutá de un entorno natural y relajante. Se trata de una casa que construimos para disfrutar en familia y que decidimos alquilar en épocas de año en las que no la usamos. Pueden alojarse hasta 4 personas. Posee un dormitorio principal y un segundo dormitorio integrado al living (sin pared divisoria). Tiene dos camas matrimoniales que se pueden transformar en 4 singles.",
                    "3RP11, Miramar, Provincia de Buenos Aires",
                    "-38.18704813564518","-57.66135692435719",
                    "Casa Acogedora",
                    "No se puede cancelar, No hay devolucion",
                    "No prender fuego, No fumar",
                    "Check-in a las 10, No se permiten mascotas",
                    "Acogedora casa en entorno natural",
                    new CategoriaDTO(4L),
                    new CiudadDTO(5L),
                    imagenes24,
                    combo1));


            productos.add(new ProductoDTO(
                    "Departamento construido en un lugar de tranquilidad, descanso y encuentro con la naturaleza. Se encuentra ubicado a sólo seis cuadras de la plaza principal, rodeados de viñas y álamos. Su estilo arquitectónico de adobe, piedras y madera hace que se fusione al bellísimo paisaje de los Valles Calchaquíes.",
                    "Ruta Nacional 40 Km 4340, 4427 Cafayate, Salta",
                    "-26.0752983","-65.9865101",
                    "Casa Paz",
                    "No se puede cancelar, No hay devolucion",
                    "No prender fuego, No fumar",
                    "Check-in a las 10, No mascotas",
                    "Casa Marroquí La Estancia de Cafayate",
                    new CategoriaDTO(1L),
                    new CiudadDTO(13L),
                    imagenes25,
                    combo3));


            productos.add(new ProductoDTO(
                    "Depto a media cuadra del Río !!! Semipiso decorado con mobiliario pensado exclusivamente para esta unidad. Todo a estrenar con colores neutros y cálidos. El depto es de muy buena calidad constructiva y está ubicado a media cuadra de la costa de Rosario y el Río Paraná.",
                    "Córdoba 2554, S2000KZH Rosario, Santa Fe",
                    "-32.9497505","-60.6826825",
                    "Depto Victoria",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, No fumar",
                    "checkin a las 10, No se permiten mascotas",
                    "Dos dormitorios. A metros Río Paraná. C/cochera !",
                    new CategoriaDTO(2L),
                    new CiudadDTO(3L),
                    imagenes26,
                    combo4));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "-31.4218908","-64.1878106",
                    "Cabaña Relax",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "Checkin a las 10, No se permiten mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(3L),
                    new CiudadDTO(19L),
                    imagenes30,
                    combo4));


            productos.add(new ProductoDTO(
                    "Ubicado con todas sus ventanas de frente al mar, cuenta con un dormitorio con cama matrimonial, y otro con cuatro camas de una plaza. Desde el living y la cocina también tiene vista al mar, y cuenta con un toilette en planta baja. En exteriores, deck con salida directa a la playa, parrilla, mesa y sillas de jardín. A la parrilla se accede por la puerta de la cocina. El deck de madera constituye un excelente lugar para desayunar o comer frente al mar.",
                    "Av. del Mar 148, Pinamar, Provincia de Buenos Aires",
                    "-37.11499728285404","-56.85407068605651",
                    "Casa las Marinas",
                    "No se puede cancelar, No hay devolucion",
                    "No prender fuego, No fumar",
                    "Check-in a las 10, No se permiten mascotas",
                    "Espectacular Casa en Pinamar Norte",
                    new CategoriaDTO(4L),
                    new CiudadDTO(6L),
                    imagenes31,
                    combo1));


            productos.add(new ProductoDTO(
                    "Casa confortable ubicada en la Banda Arriba -Salta  a 13 minutos  en vehículo del centro de la ciudad . Zona con bello paisaje, aire puro y tranquilidad. Cuenta con piscina al aire libre y asador",
                    "CL Manzana 413 Nro. Casa 6 Los Invernaderos, A4401 San Lorenzo, Salta",
                    "-24.7889553","-65.6267452",
                    "Casa El Silencio",
                    "No se puede cancelar, No hay reembolso",
                    "No prender fuego, No fumar",
                    "Check-in a las 10, No se permiten mascotas",
                    "Casa de Campo El Silencio - a 940m del centro",
                    new CategoriaDTO(1L),
                    new CiudadDTO(14L),
                    imagenes32,
                    combo2));


            productos.add(new ProductoDTO(
                    "Es un edificio de 16 departamentos de 2 ambientes para hasta 4 personas, divididos en dos cuerpos. Cuenta con unidades muy espaciosas y luminosas, con decoración elegante y contemporánea. Ubicado en una de las zonas con mayor actividad gastronómica, comercial y cultural de la ciudad, con fácil acceso a diversos puntos de interés y medios de transporte.",
                    "Godoy Cruz 2888, C1425 CABA",
                    "-34.57634960280836","-58.423853837262904",
                    "Depto Carolina",
                    "No se puede cancelar, No hay devolucion",
                    "No prender fuego, No fumar",
                    "Check-in a las 10, No se permiten mascotas",
                    "Alójate en el corazón de Palermo",
                    new CategoriaDTO(2L),
                    new CiudadDTO(7L),
                    imagenes33,
                    combo3));


            productos.add(new ProductoDTO(
                    "Relajate en este alojamiento único y tranquilo. Capacidad de hasta 6 personas. Rodeadas de jardines con plantas autóctonas de la selva, los huéspedes se sienten dentro de la naturaleza. Una hermosa piscina y solarium en el centro del Lodge permite disfrutar durante el día y la noche de un relax en medio de hermosos jardines.",
                    "Selva Iryapú s/n, N3370 Puerto Iguazú, Misiones",
                    "-25.59389045260616","-54.54620925537275",
                    "Cabaña El Bosque",
                    "No se puede cancelar, No hay devolucion",
                    "No prender fuego, No fumar",
                    "Check-in a las 10, No se permiten mascotas",
                    "Hermosa cabaña a 15 minutos de las Cataratas del Iguazú",
                    new CategoriaDTO(3L),
                    new CiudadDTO(15L),
                    imagenes34,
                    combo4));


            productos.add(new ProductoDTO(
                    "Casa Clementina es un chalet tradicional de los años 60’s reciclado en un entorno parquizado de 1000 m2. Máximo 4 personas. Dos habitaciones y dos baños. Cuenta con salamandra, calefacción y conexión wifi. Lavarropa. No incluye sábanas y toallas. Cocina totalmente equipada para disfrutar de unas vacaciones en familia a 7 cuadras de la playa y con un hermoso espacio verde. Se aceptan mascotas civilizadas. Se ofrecen 2 bicicletas.",
                    "Av. Costanera 2325, B7106 Costa Chica, Provincia de Buenos Aires",
                    "-36.505717130318054","-56.69150628682533",
                    "Casa Clementina",
                    "No se puede cancelar, No hay devolucion",
                    "No prender fuego, No fumar",
                    "Check-in a las 10, No se permiten mascotas",
                    "Casa parque Clementina en Las Toninas",
                    new CategoriaDTO(4L),
                    new CiudadDTO(8L),
                    imagenes35,
                    combo1));


            productos.add(new ProductoDTO(
                    "Venga a relajarse a nuestra nueva casa, diseñada pensando en los viajeros. ¡Ya sea que seas 2 amigos o una pareja que busca escapar de la ciudad, una escapada romántica o que busca trabajar en un lugar tranquilo! We welcome you to stay with us as your destination in Cafayate! Relájese en este elegante lugar, ya sea que sean 2 amigos o una pareja que busque un escape del ajetreo y el bullicio de su rutina diaria.",
                    "25 de Mayo, Camino al Divisadero. Fca. S/N A4427AED, Calchaquí, Cafayate, Salta",
                    "-26.0705549","-65.9975059",
                    "Casa Colina",
                    "Cancelación gratuita, Consultá la política de cancelación completa del anfitrión que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.",
                    "No hay un detector de monóxido de carbono, Pileta/jacuzzi sin rejas ni puerta con llave, Detector de humo",
                    "Check-in sin restricción de horario con cerradura inteligente, No se permiten fiestas ni eventos, No se permite fumar",
                    "Casa en las cimas de las colinas + piscina de cócteles",
                    new CategoriaDTO(1L),
                    new CiudadDTO(13L),
                    imagenes36,
                    combo2));


            productos.add(new ProductoDTO(
                    "Relajate con toda la familia en este tranquilo alojamiento completamente a estrenar, escuchando el sonido de los pajáros, en un barrio residencial rodeado de naturaleza a solo ´10 del centro de la ciudad. El alojamiento es un departamento de 1 año y medio de antigüedad, que en este mes de noviembre, hemos decidido alquilar por día. Está equipado totalmente a estrenar. Cómodo, luminoso y moderno. Cuenta con espacio verde y parrilla",
                    "Av Santiago Marzo 25 Interseccion Ruta 5 Y 35, L6300BCS Santa Rosa",
                    "-36.61924020818681","-64.26992460348198",
                    "Depto Rosa",
                    "Cancelación gratuita, Consultá la política de cancelación completa del anfitrión que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.",
                    "No se indicó si hay detector de monóxido de carbono, No se indicó si hay detector de humo, Cámara de seguridad/dispositivo de grabación",
                    "Check-in a partir de las 14:00, Check-out antes de las 11:00, 3 huéspedes como máximo",
                    "Alójate en el corazón de Santa Rosa",
                    new CategoriaDTO(2L),
                    new CiudadDTO(27L),
                    imagenes37,
                    combo3));


            productos.add(new ProductoDTO(
                    "Lugar único en Ushuaia, inmersa en el bosque y a metros del mar. Esta cabaña es ideal para pasar una estadía maravillosa, para 1 o 2 huéspedes, con vista abierta a la montaña y ciudad. Equipado para que lo disfrutes en todo momento del dia, con la cercanía de supermercado, hospital , clínicas y variedad de negocio. A la avenida principal se llega caminando 900 metros. Todo el camino llano. Del aeropuerto se llega en auto o taxi en 10 minutos. Para los que les gusta recorrer la isla en auto, contamos con cochera propia. Se accede al 4 piso por ascensor.",
                    "Cerro Alarken N° 1(Acceso por Av, Heroes de Malvinas 2617, Ushuaia, Tierra del Fuego",
                    "-54.78345184729594","-68.25876731839163",
                    "Cabaña Glaciar",
                    "Esta reserva no es reembolsable, Consultá la política de cancelación completa del anfitrión que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.",
                    "No hay un detector de humo, Pileta/jacuzzi sin rejas ni puerta con llave Lago río u otro cuerpo de agua cercano",
                    "Check-in: de 15:00 a 21:00, Check-out antes de las 11:00, 4 huéspedes como máximo",
                    "Acogedora cabaña en el corazón de Usuahia",
                    new CategoriaDTO(3L),
                    new CiudadDTO(29L),
                    imagenes38,
                    combo4));


            productos.add(new ProductoDTO(
                    "Hermosa casa para 4 personas totalmente equipado para una grata estadia , 2 hab. Un baño completo ,cocina y living comedor , parrilla utensilios de cocina ,cafetera , heladera c/freezer,microhondas etc, wifi,tv,directv, cochera cubierta calefaccion la propiedad esta totalmente cercada , se aceptan mascotas pequeñas,hermoso fondo con  bosque para que los niños jueguen .Incluye sabanas y toallas para cada integrante de la familia.Vacaciones de verano se alquila por quincena o mes completo.",
                    "Av. Juan de Garay 54, B7167 Pinamar, Provincia de Buenos Aires",
                    "-37.13715404118493","-56.873251323198474",
                    "Casa Mar",
                    "Cancelación gratuita, Consultá la política de cancelación completa del anfitrión que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.",
                    "No se indicó si hay detector de monóxido de carbono, No se indicó si hay detector de humo",
                    "Check-in a partir de las 13:00, Check-out antes de las 10:00, 4 huéspedes como máximo",
                    "Pinamar - hermosa casa para 4 personas",
                    new CategoriaDTO(4L),
                    new CiudadDTO(6L),
                    imagenes39,
                    combo1));


            productos.add(new ProductoDTO(
                    "Ubicación céntrica, supermercados cerca, parada de ómnibus en la esquina, alarma de seguridad y cochera cerrada.",
                    "AUH, Juan Domingo Perón 330, H3500 Resistencia, Chaco",
                    "-27.4606484","-59.0303649",
                    "Casa Moderna",
                    "Cancelación gratuita, Consultá la política de cancelación completa del anfitrión que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.",
                    "No se indicó si hay detector de monóxido de carbono, No se indicó si hay detector de humo",
                    "Check-in: de 14:00 a 22:00, Check-out antes de las 11:00, 8 huéspedes como máximo",
                    "Cómoda Casa Familiar",
                    new CategoriaDTO(1L),
                    new CiudadDTO(16L),
                    imagenes40,
                    combo2));

            productos.add(new ProductoDTO(
                    "Crea recuerdos inolvidables en este alojamiento único y familiar. A dónde encontrarás la paz y confort que mereces. Rodeado de bosque Nativo, paz, naturaleza, animales de campo a los que podés alimentar. Estanque de truchas. Deck para descansar con Hamaca Paraguaya. Chimenea interna. Relajá y disfrutá de nuestra tina de agua caliente con vista a la laguna. A 4 km de Parque Nacional Los Alerces, frente a la Laguna Terraplén, a pocos Km de trevelin y Esquel. Te esperamos...Vos te mereces estar acá",
                    "Callejón Ivor Williams, chacra 173, U9203 Esquel, Chubut",
                    "-43.080743037680335","-71.49315783325088",
                    "Casa Tina",
                    "Cancelación gratuita, Consultá la política de cancelación completa del anfitrión que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.",
                    "No se indicó si hay detector de monóxido de carbono, No se indicó si hay detector de humo",
                    "Check-in: de 14:00 a 22:00, Check-out antes de las 11:00, 8 huéspedes como máximo",
                    "Casa rural con impresionantes vistas",
                    new CategoriaDTO(1L),
                    new CiudadDTO(28L),
                    imagenes41,
                    combo2));

            productos.add(new ProductoDTO(
                    "Esta cabaña rodeada de bosque combina el entorno de la naturaleza con elementos de diseño y comodidad. Su diseño con materiales como piedra, madera, chapa y vidrio, la vuelve muy luminosa y cálida. Se encuentra en el pulmón del barrio Bahía Manzano, apenas a 300 mts. del lago lo que la vuelve una opción muy atractiva para aquellos viajeros que quieran explorar a pie el barrio o realizar deportes náuticos.",
                    "Arrayan Hostería de Montaña y Casa de Té,, San Martin de los Andes, Neuquén",
                    "-40.16778160276493","-71.35264992736796",
                    "Cabaña Lupe",
                    "Cancelación gratuita, Consultá la política de cancelación completa del anfitrión que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.",
                    "No se indicó si hay detector de monóxido de carbono, No se indicó si hay detector de humo",
                    "Check-in: de 14:00 a 22:00, Check-out antes de las 11:00, 8 huéspedes como máximo",
                    "Cabaña con mucha tranquilidad y diseño",
                    new CategoriaDTO(3L),
                    new CiudadDTO(20L),
                    imagenes42,
                    combo2));

            productos.add(new ProductoDTO(
                    "Cabaña ideal para pasar unos días confortables en el mejor punto de Villa Mercedes. A Media cuadra de la plaza San Martín, con cocina totalmente equipada, equipo de música Hi-Fi, TV con Netflix Disney+ y DirectvGO.",
                    "Braulio Moyano 900, D5730 Villa Mercedes, San Luis",
                    "-33.65752161240861", "-65.49047799036728",
                    "Cabaña Alegre",
                    "Cancelación gratuita, Consultá la política de cancelación completa del anfitrión que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.",
                    "No se indicó si hay detector de monóxido de carbono, No se indicó si hay detector de humo",
                    "Check-in: de 14:00 a 22:00, Check-out antes de las 11:00, 8 huéspedes como máximo",
                    "Alójate en el corazón de Villa Mercedes",
                    new CategoriaDTO(3L),
                    new CiudadDTO(25L),
                    imagenes43,
                    combo2));

            productos.add(new ProductoDTO(
                    "ADN loft te da la bienvenida.Disfruta tu estadía en un espacio  tranquilo y elegante. Un departamento  de estilo moderno industrial,cálido y confortable, completamente equipado  para sentirse como en casa!.",
                    "CZF Comodoro Rivadavia Chubut AR, 9 de Julio 770, U9000",
                    "-45.86139898827435","-67.47873840441073",
                    "Depto Estilo",
                    "Cancelación gratuita, Consultá la política de cancelación completa del anfitrión que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.",
                    "No se indicó si hay detector de monóxido de carbono, No se indicó si hay detector de humo",
                    "Check-in: de 14:00 a 22:00, Check-out antes de las 11:00, 8 huéspedes como máximo",
                    "Alójate en el corazón de Comodoro Rivadavia",
                    new CategoriaDTO(2L),
                    new CiudadDTO(23L),
                    imagenes44,
                    combo2));



            for (ProductoDTO producto : productos) {
                productoService.guardar(producto);
            }


            // Reservas

            List<ReservaDTO> reservas = new ArrayList<>();

            reservas.add(new ReservaDTO(
                    LocalTime.of(10,0), //hora
                    LocalDate.of(2022,12,20), //fecha inicio
                    LocalDate.of(2022,12,25), // fecha fin
                    new ProductoDTO(1L), // id producto
                    new UsuarioDTO(2L), // id usuario
                    "Sin comentarios",
                    true));



            for (ReservaDTO reserva : reservas) {
                reservaService.guardar(reserva);
            }

        }
        catch (Exception e) {
            String mensajeError = e.getMessage();

            logger.error(mensajeError);
        }
    }
}
