package com.backend.repository;

import com.backend.entity.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ICategoriaRepository extends JpaRepository<Categoria, Long> {

    Optional<Categoria> findByTitulo(String titulo);

}


