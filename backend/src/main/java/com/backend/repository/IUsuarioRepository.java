package com.backend.repository;


import com.backend.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario, Long> {

//    Optional<Usuario> findUsuarioByNombre(String nombre);
    Optional<Usuario> findById(Long id);
    Optional<Usuario> findUsuarioByEmail(String email);
}
