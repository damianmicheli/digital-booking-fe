import React from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./templateGeneral.module.css";
import Home from "../home/Home";
import Login from "../login_register/Login";
import Register from "../login_register/Register";
import Product from "../product/Product";

/* import { FavProvider } from "../../context/FavContext"; */
import BookingTemplate from "../booking_template/BookingTemplate";
import MyBookings from "../my_bookigns/MyBookings";
import Administration from "../administration/Administration";
import { AttributeProvider } from "../../context/AttributeContext";

const TemplateGeneral = () => {
  return (
    <div className={styles.body}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<Product />}></Route>
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/producto/:id/reserva" element={<BookingTemplate />} />
        <Route path="/:userId/reservas" element={<MyBookings />} />
        <Route path="/misreservas" element={<MyBookings />} />
        <Route path="/administracion" element={<AttributeProvider><Administration /></AttributeProvider>} />
      </Routes>
    </div>
  );
};

export default TemplateGeneral;
