package com.backend.service;

import com.backend.dto.FechasOcupadasDTO;
import com.backend.dto.ProductoDTO;
import com.backend.entity.*;
import com.backend.repository.IProductoRepository;

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
public class ProductoService implements IProductoService {

    private final Logger logger = Logger.getLogger(ProductoService.class);

    @Autowired
    private IProductoRepository productoRepository;

    @Autowired
    private IReservaRepository reservaRepository;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public ProductoDTO guardar(ProductoDTO productoDTO) throws DatosIncorrectosException {

        if (productoDTO.getCategoria() == null) {
            throw new DatosIncorrectosException("No se especificó la categoría");
        }
        if (productoDTO.getCiudad() == null) {
            throw new DatosIncorrectosException("No se especificó la ciudad");
        }
        Producto producto = mapper.convertValue(productoDTO, Producto.class);

        Producto productoGuardado = productoRepository.save(producto);

        ProductoDTO productoDTOGuardado = mapper.convertValue(productoGuardado, ProductoDTO.class);

        logger.info("Se creo el producto : " + productoDTOGuardado);

        return productoDTOGuardado;    }

    @Override
    public ProductoDTO buscar(Long id) throws NoEncontradoException {
        Optional<Producto> producto = productoRepository.findById(id);

        if (producto.isEmpty()){
            throw new NoEncontradoException("Producto con Id " + id + " no encontrado.");
        }

        ProductoDTO productoDTOBuscado = mapper.convertValue(producto, ProductoDTO.class);

        logger.info("Se buscó por Id el producto: " + productoDTOBuscado);

        return productoDTOBuscado;    }

    @Override
    public List<ProductoDTO> listarTodos() {

        List<Producto> productos = productoRepository.findAll();
        List<ProductoDTO> productosDTO = new ArrayList<>();

        for (Producto producto : productos){
            productosDTO.add(mapper.convertValue(producto, ProductoDTO.class));
        }

        logger.info("Se listaron todos los productos.");

        return productosDTO;
    }

    @Override
    public List<ProductoDTO> listarPorCiudad(Long idCiudad)  {

        Ciudad ciudad = new Ciudad();
        ciudad.setId(idCiudad);

        List<Producto> productos = productoRepository.findByCiudad(ciudad);
        List<ProductoDTO> productosDTO = new ArrayList<>();

        for (Producto producto : productos){
            productosDTO.add(mapper.convertValue(producto, ProductoDTO.class));
        }

        logger.info("Se listaron todos los productos con ciudad id: "+ idCiudad);
        return productosDTO;
    }


    @Override
    public List<ProductoDTO> listarPorCategoria(Long idCategoria)  {

        Categoria categoria = new Categoria();
        categoria.setId(idCategoria);

        List<Producto> productos = productoRepository.findByCategoria(categoria);
        List<ProductoDTO> productosDTO = new ArrayList<>();

        for (Producto producto : productos){
            productosDTO.add(mapper.convertValue(producto, ProductoDTO.class));
        }

        logger.info("Se listaron todos los productos con ciudad id: "+ idCategoria);
        return productosDTO;
    }

    @Override
    public List<ProductoDTO> listarRandom() {

        List<Producto> productos = productoRepository.findRandom();
        List<ProductoDTO> productosDTO = new ArrayList<>();

        for (Producto producto : productos){
            productosDTO.add(mapper.convertValue(producto, ProductoDTO.class));
        }

        logger.info("Se listaron todos los productos de forma aleatoria.");

        return productosDTO;
    }

    @Override
    public FechasOcupadasDTO fechasOcupadas(Long id) throws NoEncontradoException {

        Optional<Producto> producto = productoRepository.findById(id);

        if (producto.isEmpty()){
            throw new NoEncontradoException("Producto con Id " + id + " no encontrado.");
        }

        List<Reserva> reservas = reservaRepository.findByProductoId(id);
        List<LocalDate> fechas = new ArrayList<>();

        for (Reserva reserva : reservas){

            LocalDate in = reserva.getFecha_inicial_reserva();
            LocalDate out = reserva.getFecha_final_reserva();
            LocalDate actual = in;

            while (actual.isBefore(out) || actual.isEqual(out)) {
                fechas.add(actual);
                actual = actual.plusDays(1L);
            }

        }

        FechasOcupadasDTO fechasOcupadas = new FechasOcupadasDTO();

        fechasOcupadas.setFechasNoDisponibles(fechas);

        logger.info("Se listaron las fechas ocupadas del producto con id: " + id);

        return fechasOcupadas;

    }

    public List<ProductoDTO> listarPorFechas(LocalDate inicio, LocalDate fin){

        List<Producto> productos = productoRepository.findAll();
        List<ProductoDTO> productosDTO = new ArrayList<>();

        List<Producto> productosValidos = new ArrayList<>();

        for (Producto producto : productos){
            productosDTO.add(mapper.convertValue(producto, ProductoDTO.class));
        }


        for (Producto producto : productosValidos){
            productosDTO.add(mapper.convertValue(producto, ProductoDTO.class));
        }

        logger.info("Se listaron todos los productos disponibles en las fechas indicadas.");

        return productosDTO;


    }

}