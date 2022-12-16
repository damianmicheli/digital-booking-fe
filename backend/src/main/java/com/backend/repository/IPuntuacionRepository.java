package com.backend.repository;

import com.backend.entity.Puntuacion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IPuntuacionRepository extends JpaRepository<Puntuacion, Long> {

    List<Puntuacion> findByProductoId(Long productoId);
    Optional<Puntuacion> findByProductoIdAndUsuarioId(Long productoId, Long usuarioId);

}
