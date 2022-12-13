package com.backend.repository;

import com.backend.dto.CiudadDTO;
import com.backend.entity.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICiudadRepository extends JpaRepository<Ciudad, Long> {

    List<Ciudad> findAllByOrderByCiudadAsc();
}
