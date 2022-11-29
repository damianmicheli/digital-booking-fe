package com.backend.repository;

import com.backend.entity.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IImagenRepository extends JpaRepository<Imagen, Long> {
}
