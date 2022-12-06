package com.backend.repository;

import com.backend.entity.Categoria;
import com.backend.entity.Ciudad;
import com.backend.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductoRepository extends JpaRepository <Producto, Long>{

    List<Producto> findByCiudad(Ciudad ciudad);
    List<Producto> findByCategoria(Categoria categoria);

    @Query("select p from Producto p order by RAND()")
    List<Producto> findRandom();

//    @Query("select p from Producto p where ")
//    List<Reserva> findByFechasDisponibles(LocalDate checkIn, LocalDate checkOut);

}
