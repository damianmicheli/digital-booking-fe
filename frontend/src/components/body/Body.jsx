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
import CATEGORIAS_DATA from '../../data/categorias.json';

const Body = () => {

  return (
    <div className={styles.body}>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/buscador" element={<Buscador/>} />
        <Route path="/cards" element={<Cards items={ALOJAMIENTOS_DATA}/>}/>
        <Route path="/categorias" element={<CardsCategorias items={CATEGORIAS_DATA}/>}/>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
};

export default Body;
