package com.backend.repository;

import com.backend.entity.Categoria;
import com.backend.entity.Ciudad;
import com.backend.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IProductoRepository extends  JpaRepository <Producto, Long>{

    List<Producto> findByCiudad(Ciudad ciudad);
    List<Producto> findByCategoria(Categoria categoria);

}
