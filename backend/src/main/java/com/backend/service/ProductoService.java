package com.backend.service;

import com.backend.dto.FechasOcupadasDTO;
import com.backend.dto.ProductoDTO;
import com.backend.dto.PuntuacionDTO;
import com.backend.dto.UsuarioDTO;
import com.backend.entity.*;
import com.backend.repository.IProductoRepository;
import com.backend.repository.IPuntuacionRepository;
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
public class ProductoService implements IProductoService {

    private final Logger logger = Logger.getLogger(ProductoService.class);

    @Autowired
    private IProductoRepository productoRepository;

    @Autowired
    private IReservaRepository reservaRepository;

    @Autowired
    private IPuntuacionRepository puntuacionRepository;

    @Autowired
    private IUsuarioService usuarioService;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public ProductoDTO guardar(ProductoDTO productoDTO) throws DatosIncorrectosException {

        if (productoDTO.getCategoria() == null) {
            throw new DatosIncorrectosException("No se especificó la categoría");
        }

        if (productoDTO.getNombre() == null) {
            throw new DatosIncorrectosException("No se especifica el nombre");
        }

        if (productoDTO.getDireccion() == null) {
            throw new DatosIncorrectosException("No se especificó la direccion");
        }

        if (productoDTO.getDescripcion() == null) {
            throw new DatosIncorrectosException("No se especificó la descripcion");
        }

        if (productoDTO.getTitulo() == null) {
            throw new DatosIncorrectosException("No se especificó el titulo");
        }

        if (productoDTO.getCiudad() == null) {
            throw new DatosIncorrectosException("No se especificó la ciudad");
        }

        if (productoDTO.getLongitud() == null || productoDTO.getLongitud().equals("")) {
            productoDTO.setLongitud("-58.38153821941309");
        }

        if (productoDTO.getLatitud() == null || productoDTO.getLatitud().equals("")) {
            productoDTO.setLatitud("-34.60350925672641");
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

    public PuntuacionDTO guardarPuntuacion(PuntuacionDTO puntuacionDTO) throws NoEncontradoException {

        Puntuacion puntuacion = mapper.convertValue(puntuacionDTO, Puntuacion.class);

        Long productoId = puntuacion.getProducto().getId();
        Long usuarioId = puntuacion.getUsuario().getId();


        ProductoDTO productoDTO = this.buscar(productoId);
        UsuarioDTO usuarioDTO = usuarioService.buscarPorId(usuarioId);

        Optional<Puntuacion> puntuacionExistente = puntuacionRepository.findByProductoIdAndUsuarioId(productoId, usuarioId);

        if (puntuacionExistente.isPresent()){
            puntuacion.setId(puntuacionExistente.get().getId());
        }

        Puntuacion puntuacionGuardada = puntuacionRepository.save(puntuacion);

        PuntuacionDTO puntuacionGuardadaDTO = mapper.convertValue(puntuacionGuardada, PuntuacionDTO.class);


        List<Puntuacion> puntuaciones = puntuacionRepository.findByProductoId(productoDTO.getId());

        float suma = 0;

        for (Puntuacion p: puntuaciones) {
            suma += p.getPuntuacion();
        }

        productoDTO.setPuntajePromedio(suma / puntuaciones.size());

        this.actualizar(productoDTO);

        logger.info("Se registro la puntuacion: "+ puntuacionDTO );

        return puntuacionGuardadaDTO;

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



    @Override
    public List<ProductoDTO> listarPorCiudadYFechas(LocalDate inicio, LocalDate fin, Long idCiudad) throws NoEncontradoException, DatosIncorrectosException {
        LocalDate hoy = LocalDate.now();

        if (inicio.isBefore(hoy) || fin.isBefore(hoy)) {
            throw new DatosIncorrectosException("Las fechas no pueden ser anteriores a hoy");
        }

        Ciudad ciudad = new Ciudad();
        ciudad.setId(idCiudad);

        List<Producto> productos = productoRepository.findByCiudad(ciudad);

        List<ProductoDTO> productosDTO = new ArrayList<>();

        for (Producto producto : productos){
            if (esValido(inicio, fin, producto)) {
                productosDTO.add(mapper.convertValue(producto, ProductoDTO.class));
            }
        }


        logger.info("Se listaron todos los productos disponibles en las fechas indicadas.");

        return productosDTO;


    }


    @Override
    public List<ProductoDTO> listarPorFechas(LocalDate inicio, LocalDate fin) throws NoEncontradoException, DatosIncorrectosException {

        LocalDate hoy = LocalDate.now();

        if (inicio.isBefore(hoy) || fin.isBefore(hoy)) {
            throw new DatosIncorrectosException("Las fechas no pueden ser anteriores a hoy");
        }

        List<Producto> productos = productoRepository.findAll();

        List<ProductoDTO> productosDTO = new ArrayList<>();

        for (Producto producto : productos){
            if (esValido(inicio, fin, producto)) {
                productosDTO.add(mapper.convertValue(producto, ProductoDTO.class));
            }
        }


        logger.info("Se listaron todos los productos disponibles en las fechas indicadas.");

        return productosDTO;


    }

    private boolean esValido(LocalDate in, LocalDate out, Producto producto) throws NoEncontradoException {

        return Utiles.esRangoValido(in, out, fechasOcupadas(producto.getId()));

    }

    @Override
    public ProductoDTO actualizar(ProductoDTO productoDTO) throws NoEncontradoException {

        Long id = productoDTO.getId();

        Optional<Producto> encontrado = productoRepository.findById(id);

        if (encontrado.isEmpty()){
            throw new NoEncontradoException("No se puede actualizar porque no existe un producto con Id: " + id + ".");
        }

        ProductoDTO productoDTOParaActualizar = mapper.convertValue(encontrado.get(),ProductoDTO.class);

        logger.info("Se actualizará un producto. Datos originales: " + productoDTOParaActualizar);

        Producto producto = mapper.convertValue(productoDTO, Producto.class);

        Producto productoRes = productoRepository.save(producto);

        ProductoDTO productoDTOActualizado = mapper.convertValue(productoRes,ProductoDTO.class);

        logger.info("Datos actuales: " + productoDTOActualizado);


        return productoDTOActualizado;
    }

}