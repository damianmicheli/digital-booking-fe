import React from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./body.module.css";
import Home from "../home/Home";
import Login from "../login_register/Login";
import Register from "../login_register/Register";
import Cards from "../cards/Cards";
import Product from "../product/Product";

import useFetch from "../../hooks/useFetch";
import { FavProvider } from "../../context/FavContext";
import BookingTemplate from "../booking_template/BookingTemplate";

const Body = () => {
  const [productos] = useFetch("http://localhost:8080/productos");

  return (
    <div className={styles.body}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/producto/:id"
          element={
            <FavProvider>
              <Product />
            </FavProvider>
          }
        ></Route>
        <Route path="/productos" element={<Cards items={productos} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservas/:id" element={<BookingTemplate />} />
      </Routes>
    </div>
  );
};

export default Body;
