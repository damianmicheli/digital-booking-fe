package com.backend.service;

import com.backend.dto.CategoriaDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CategoriaServiceTest {

    @Autowired
    ICategoriaService categoriaService;

    public CategoriaDTO crearNuevaCategoria() {
        CategoriaDTO categoria = new CategoriaDTO();
        categoria.setTitulo("Casa");
        categoria.setDescripcion("Casa completa");
        categoria.setUrl("https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");

        return categoria;
    }

    @Test
    void categoriaGuardarTest() throws NoEncontradoException {

        CategoriaDTO categoria = crearNuevaCategoria();

        CategoriaDTO categoriaGuardada = categoriaService.guardar(categoria);

        CategoriaDTO categoriaEncontrada = categoriaService.buscar(categoriaGuardada.getId());

        assertEquals("Casa", categoriaEncontrada.getTitulo());
    }
}
