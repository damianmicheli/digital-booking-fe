import React from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./body.module.css";
import Home from "../home/Home";
import Login from "../login_register/Login";
import Register from "../login_register/Register";
import Product from "../product/Product";

/* import { FavProvider } from "../../context/FavContext"; */
import BookingTemplate from "../booking_template/BookingTemplate";
import SuccessRegister from "../global/modal/success/SuccessRegister";

const Body = () => {
  return (
    <div className={styles.body}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<Product />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/producto/:id/reserva" element={<BookingTemplate />} />
        <Route path="/success" element={<SuccessRegister />} />
      </Routes>
    </div>
  );
};

export default Body;
