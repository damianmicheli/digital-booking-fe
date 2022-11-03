package com.backend.repository;

import com.backend.entity.Productos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductosRepository extends  JpaRepository <Productos, Long>{

}
