package com.backend.repository;

import com.backend.entity.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IReservaRepository extends JpaRepository<Reserva, Long> {
}
