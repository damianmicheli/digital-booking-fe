package com.backend.service;

import com.backend.dto.CategoriaDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Random;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
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
    void categoriaGuardarTest() throws NoEncontradoException, ConflictoException {

        CategoriaDTO categoria = crearNuevaCategoria();

        CategoriaDTO categoriaGuardada = categoriaService.guardar(categoria);

        CategoriaDTO categoriaEncontrada = categoriaService.buscar(categoriaGuardada.getId());

        assertEquals("Casa", categoriaEncontrada.getTitulo());
    }
}
//    @Test
//    void odontologoBuscarTest() throws NoEncontradoException, ConflictoException {
//
//        OdontologoDTO odontologo = crearNuevoOdontologo();
//
//        OdontologoDTO odontologoGuardado = odontologoService.guardar(odontologo);
//
//        OdontologoDTO odontologoEncontrado = odontologoService.buscar(odontologoGuardado.getId());
//
//        assertEquals("Odontologo", odontologoEncontrado.getNombre());
//    }
//
//    @Test
//    void odontologoListarTodosTest() throws ConflictoException {
//
//
//        odontologoService.guardar(crearNuevoOdontologo());
//        odontologoService.guardar(crearNuevoOdontologo());
//        odontologoService.guardar(crearNuevoOdontologo());
//
//        List<OdontologoDTO> odontologos = odontologoService.listarTodos();
//
//        assertTrue(odontologos.size() >= 3);
//
//    }
//
//    @Test
//    void odontologoEliminarTest() throws NoEncontradoException, ConflictoException {
//
//        OdontologoDTO odontologo = crearNuevoOdontologo();
//
//        OdontologoDTO odontologoGuardado = odontologoService.guardar(odontologo);
//
//        Long id = odontologoGuardado.getId();
//
//        OdontologoDTO odontologoEncontrado = odontologoService.buscar(id);
//
//        assertEquals("Odontologo", odontologoEncontrado.getNombre());
//
//        odontologoService.eliminar(id);
//
//        NoEncontradoException thrown = assertThrows(NoEncontradoException.class, () -> {
//            odontologoService.buscar(id);
//        });
//
//        assertEquals("Odontólogo con Id " + id + " no encontrado.", thrown.getMessage());
//
//
//
//    }
//
//    @Test
//    void odontologoActualizarTest() throws NoEncontradoException, ConflictoException {
//
//        OdontologoDTO odontologo = crearNuevoOdontologo();
//
//        OdontologoDTO odontologoGuardado = odontologoService.guardar(odontologo);
//
//        Long id = odontologoGuardado.getId();
//
//        assertEquals("Odontologo", odontologoGuardado.getNombre());
//
//        OdontologoDTO odontologoActualizar = odontologoGuardado;
//        odontologoActualizar.setNombre("Doc. Emmet");
//        odontologoActualizar.setApellido("Brown");
//        odontologoActualizar.setMatricula(String.valueOf(rand.nextInt(9000)+1000));
//
//        odontologoService.actualizar(odontologoActualizar);
//
//        OdontologoDTO odontologoEncontrado = odontologoService.buscar(id);
//
//        assertEquals("Doc. Emmet", odontologoEncontrado.getNombre());
//
//    }
//}