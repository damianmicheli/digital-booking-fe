package com.backend.repository;

import com.backend.entity.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICiudadRepository extends JpaRepository<Ciudad, Long> {
}
