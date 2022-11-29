package com.backend.repository;

import com.backend.entity.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IReservaRepository extends JpaRepository<Reserva, Long> {
    List<Reserva> findByProductoId(Long productoId);
    List<Reserva> findByUsuarioId(Long usuarioId);
}
