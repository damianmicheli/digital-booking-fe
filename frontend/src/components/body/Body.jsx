import React from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./body.module.css";
import Home from "../Home"
import Login from "../login_register/Login"
import Register from "../login_register/Register"
import Buscador from "../buscador/Buscador"
import Cards from "../listado/Cards";
import CardsCategorias from "../categorias/CardsCategorias";
import Product from "../product/Product";

import ALOJAMIENTOS_DATA from '../../data/alojamientos.json';
import useFetch from "../../hooks/useFetch";

const Body = () => {

  const [categorias] = useFetch('http://localhost:8080/categorias');

  return (
    <div className={styles.body}>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/buscador" element={<Buscador/>} />
        <Route path="/categorias" element={<CardsCategorias items={categorias}/>}/>
        <Route path="/producto/:id" element={<Product/>}></Route>
        <Route path="/productos" element={<Cards items={ALOJAMIENTOS_DATA}/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
};

export default Body;
