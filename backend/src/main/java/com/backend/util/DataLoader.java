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

import java.sql.Time;
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
    IImagenService imagenService;

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

            // crear array caracteristicas
            {
                caracteristicas.add(new CaracteristicaDTO("Piscina", "faSwimmer"));
                caracteristicas.add(new CaracteristicaDTO("Parrilla", "faFire"));
                caracteristicas.add(new CaracteristicaDTO("Aire Acondicionado", "faSnowflake"));
                caracteristicas.add(new CaracteristicaDTO("WiFi", "faWifi"));
                caracteristicas.add(new CaracteristicaDTO("Acceso a la playa", "faUmbrellaBeach"));
                caracteristicas.add(new CaracteristicaDTO("Estacionamiento", "faCar"));
                caracteristicas.add(new CaracteristicaDTO("Apto Mascotas", "faPaw"));
                caracteristicas.add(new CaracteristicaDTO("Botiquín", "faSuitcaseMedical"));
                caracteristicas.add(new CaracteristicaDTO("Televisión", "faTv"));
                caracteristicas.add(new CaracteristicaDTO("Cocina", "faKitchenSet"));
                caracteristicas.add(new CaracteristicaDTO("Calefacción", "faTemperatureArrowUp"));
                caracteristicas.add(new CaracteristicaDTO("Caja de seguridad", "faVault"));
                caracteristicas.add(new CaracteristicaDTO("Cámaras de Seguridad", "faVideo"));
                caracteristicas.add(new CaracteristicaDTO("Shampoo/Acondicionador", "faPumpSoap"));
            }


            for (CaracteristicaDTO caracteristica : caracteristicas) {
                caracteristicaService.guardar(caracteristica);
            }


            // Ciudades

            List<CiudadDTO> ciudades = new ArrayList<>();

            // crear array ciudades
            {
                ciudades.add(new CiudadDTO("Cordoba", "Argentina"));
                ciudades.add(new CiudadDTO("Santa Fe", "Argentina"));
                ciudades.add(new CiudadDTO("Ciudad Autonoma de Buenos Aires", "Argentina"));
                ciudades.add(new CiudadDTO("Mendoza", "Argentina"));
                ciudades.add(new CiudadDTO("Tucuman", "Argentina"));
                ciudades.add(new CiudadDTO("Entre Rios", "Argentina"));
                ciudades.add(new CiudadDTO("Salta", "Argentina"));
                ciudades.add(new CiudadDTO("Misiones", "Argentina"));
                ciudades.add(new CiudadDTO("Chaco", "Argentina"));
                ciudades.add(new CiudadDTO("Corrientes", "Argentina"));
                ciudades.add(new CiudadDTO("Santiago del Estero", "Argentina"));
                ciudades.add(new CiudadDTO("San Juan", "Argentina"));
                ciudades.add(new CiudadDTO("Jujuy", "Argentina"));
                ciudades.add(new CiudadDTO("Rio Negro", "Argentina"));
                ciudades.add(new CiudadDTO("Neuquen", "Argentina"));
                ciudades.add(new CiudadDTO("Formosa", "Argentina"));
                ciudades.add(new CiudadDTO("Chubut", "Argentina"));
                ciudades.add(new CiudadDTO("San Luis", "Argentina"));
                ciudades.add(new CiudadDTO("Catamarca", "Argentina"));
                ciudades.add(new CiudadDTO("La Rioja", "Argentina"));
                ciudades.add(new CiudadDTO("La Pampa", "Argentina"));
                ciudades.add(new CiudadDTO("Santa Cruz", "Argentina"));
                ciudades.add(new CiudadDTO("Tierra del Fuego", "Argentina"));

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
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Casa 1",
                    "sdf",
                    "sdf",
                    "sdf",
                    "Alójate en el corazón de",
                    new CategoriaDTO(1L),
                    new CiudadDTO(1L),
                    imagenes1,
                    combo1));

            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Departamento 1",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "checkin a las 10 no mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(2L),
                    new CiudadDTO(1L),
                    imagenes2,
                    combo2));

            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Cabaña 1",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar","checkin a las 10 no mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(3L),
                    new CiudadDTO(1L),
                    imagenes3,
                    combo3));

            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Casa de playa 1",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "checkin a las 10 no mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(4L),
                    new CiudadDTO(2L),
                    imagenes4,
                    combo4));

            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123","Casa 2","No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "checkin a las 10 no mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(1L),
                    new CiudadDTO(1L),
                    imagenes5,
                    combo1));

            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "A 940 m del centro",
                    "Departamento 2",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de",
                    new CategoriaDTO(2L),
                    new CiudadDTO(6L),
                    imagenes6,
                    combo2));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "A 940 m del centro",
                    "Cabaña 2",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de",
                    new CategoriaDTO(3L),
                    new CiudadDTO(7L),
                    imagenes7,
                    combo4));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "A 940 m del centro",
                    "Casa de playa 2",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de",
                    new CategoriaDTO(4L),
                    new CiudadDTO(8L),
                    imagenes8,
                    combo1));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "A 940 m del centro",
                    "Casa 3",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de",
                    new CategoriaDTO(1L),
                    new CiudadDTO(7L),
                    imagenes9,
                    combo2));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "A 940 m del centro",
                    "Departamento 3",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de",
                    new CategoriaDTO(2L),
                    new CiudadDTO(10L),
                    imagenes10,
                    combo4));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "A 940 m del centro",
                    "Cabaña 3",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de",
                    new CategoriaDTO(3L),
                    new CiudadDTO(9L),
                    imagenes11,
                    combo1));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "A 940 m del centro",
                    "Casa de playa 3",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de",
                    new CategoriaDTO(4L),
                    new CiudadDTO(12L),
                    imagenes12,
                    combo2));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "A 940 m del centro",
                    "Casa 4",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de",
                    new CategoriaDTO(1L),
                    new CiudadDTO(16L),
                    imagenes13,
                    combo3));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "A 940 m del centro",
                    "Departamento 4",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de",
                    new CategoriaDTO(2L),
                    new CiudadDTO(14L),
                    imagenes14,
                    combo4));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Cabaña 4",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "checkin a las 10 no mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(3L),
                    new CiudadDTO(1L),
                    imagenes15,
                    combo1));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Casa de playa 4",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "'checkin a las', 'no mascotas'",
                    "Alójate en el corazón de",
                    new CategoriaDTO(4L),
                    new CiudadDTO(1L),
                    imagenes16,
                    combo2));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "A 940 m del centro",
                    "Casa 5",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de",
                    new CategoriaDTO(1L),
                    new CiudadDTO(17L),
                    imagenes17,
                    combo3));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "A 940 m del centro",
                    "Departamento 5",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de",
                    new CategoriaDTO(2L),
                    new CiudadDTO(18L),
                    imagenes18,
                    combo4));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Cabaña 5",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "checkin a las 10 no mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(3L),
                    new CiudadDTO(1L),
                    imagenes19,
                    combo1));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Casa de playa 5",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "checkin a las 10 no mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(4L),
                    new CiudadDTO(1L),
                    imagenes20,
                    combo2));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "A 940 m del centro",
                    "Casa 6",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de",
                    new CategoriaDTO(1L),
                    new CiudadDTO(21L),
                    imagenes21,
                    combo3));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "A 940 m del centro",
                    "Departamento 6",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de",
                    new CategoriaDTO(2L),
                    new CiudadDTO(22L),
                    imagenes22,
                    combo4));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "A 940 m del centro",
                    "Cabaña 6",
                    "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía",
                    "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus, Detector de humo, Depósito de seguridad",
                    "Check-out: 10:00, No se permiten fiestas, No fumar",
                    "Alójate en el corazón de",
                    new CategoriaDTO(3L),
                    new CiudadDTO(23L),
                    imagenes23,
                    combo1));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Casa de playa 6",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "checkin a las 10 no mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(4L),
                    new CiudadDTO(1L),
                    imagenes24,
                    combo2));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Casa 7",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "checkin a las 10 no mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(1L),
                    new CiudadDTO(13L),
                    imagenes25,
                    combo3));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Departamento 7",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "checkin a las 10 no mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(2L),
                    new CiudadDTO(1L),
                    imagenes26,
                    combo4));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Cabaña 7",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "checkin a las 10 no mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(3L),
                    new CiudadDTO(1L),
                    imagenes30,
                    combo4));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Casa de playa 7",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "checkin a las 10 no mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(4L),
                    new CiudadDTO(1L),
                    imagenes31,
                    combo1));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Casa 8",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "checkin a las 10 no mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(1L),
                    new CiudadDTO(8L),
                    imagenes32,
                    combo2));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Departamento 8",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "checkin a las 10 no mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(2L),
                    new CiudadDTO(1L),
                    imagenes33,
                    combo3));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Cabaña 8",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "checkin a las 10 no mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(3L),
                    new CiudadDTO(1L),
                    imagenes34,
                    combo4));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Calle falsa 123",
                    "Casa de playa 8",
                    "No se puede cancelar, no hay devolucion",
                    "No prender fuego, no fumar",
                    "checkin a las 10 no mascotas",
                    "Alójate en el corazón de",
                    new CategoriaDTO(4L),
                    new CiudadDTO(1L),
                    imagenes35,
                    combo1));


            productos.add(new ProductoDTO(
                    "Lorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "NULL",
                    "Casa 9",
                    "NULL",
                    "NULL",
                    "NULL",
                    "NULL",
                    new CategoriaDTO(1L),
                    new CiudadDTO(19L),
                    imagenes36,
                    combo2));


            productos.add(new ProductoDTO(
                    "LoremLorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Lorem",
                    "Departamento 9",
                    "NULL",
                    "NULL",
                    "NULL",
                    "NULL",
                    new CategoriaDTO(2L),
                    new CiudadDTO(2L),
                    imagenes37,
                    combo3));


            productos.add(new ProductoDTO(
                    "LoremLorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Lorem",
                    "Cabaña 9",
                    "NULL",
                    "NULL",
                    "NULL",
                    "NULL",
                    new CategoriaDTO(3L),
                    new CiudadDTO(3L),
                    imagenes38,
                    combo4));


            productos.add(new ProductoDTO(
                    "LoremLorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Lorem",
                    "Casa de playa 9",
                    "NULL",
                    "NULL",
                    "NULL",
                    "NULL",
                    new CategoriaDTO(4L),
                    new CiudadDTO(3L),
                    imagenes39,
                    combo1));


            productos.add(new ProductoDTO(
                    "LoremLorem consequatur. Si proident but ullam eiusmod. Suscipit quisquam dolore adipisci so nihil ratione and quaerat.",
                    "Lorem",
                    "Casa 10",
                    "NULL",
                    "NULL",
                    "NULL",
                    "NULL",
                    new CategoriaDTO(1L),
                    new CiudadDTO(2L),
                    imagenes40,
                    combo2));



            for (ProductoDTO producto : productos) {
                productoService.guardar(producto);
            }


            // Reservas

            List<ReservaDTO> reservas = new ArrayList<>();

            reservas.add(new ReservaDTO(
                    LocalTime.of(10,00), //hora
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
