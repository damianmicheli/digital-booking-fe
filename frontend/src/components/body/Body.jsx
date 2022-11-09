import React from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./body.module.css";
import Home from "../Home"
import Login from "../login_register/Login"
import Register from "../login_register/Register"
import Search from "../search/Search"
import Cards from "../cards/Cards";
import CardsCategories from "../categories/CardsCategories";
import GalleryContainer from "../gallery/GalleryContainer";
import Product from "../product/Product";

import useFetch from "../../hooks/useFetch";
import IMAGES_DATA from '../../data/images.json';

const Body = () => {

  const [categorias] = useFetch('http://localhost:8080/categorias');
  const [productos] = useFetch('http://localhost:8080/productos');

  return (
    <div className={styles.body}>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/buscador" element={<Search/>} />
        <Route path="/categorias" element={<CardsCategories items={categorias}/>}/>
        <Route path="/producto/:id" element={<Product images={IMAGES_DATA}/>}></Route>
        <Route path="/productos" element={<Cards items={productos}/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/images" element={<GalleryContainer images={IMAGES_DATA}/>} />
      </Routes>
    </div>
  );
};

export default Body;
