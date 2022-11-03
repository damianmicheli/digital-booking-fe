package com.backend.repository;

import com.backend.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductoRepository extends  JpaRepository <Producto, Long>{

}
