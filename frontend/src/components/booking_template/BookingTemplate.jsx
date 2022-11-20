import React from "react";
import styles from "./bookingTemplate.module.css";

import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router";

import HeaderProduct from "../product/content/HeaderProduct";
import Button from "../global/Button";

const BookingTemplate = () => {
  const { id } = useParams();

  const [data] = useFetch(`http://localhost:8080/productos/${id}`);

  const nombre = data && data.nombre;
  const categoria = data && data.categoria.titulo.toUpperCase();

  return (
    <>
      <div className={styles.title}>
        <HeaderProduct category={categoria} title={nombre} />
      </div>
      <div className={styles.bookingTemplate}>
        <div className="container">
          <h2 className="heading3">Completá tus datos</h2>
          <form id="bookingForm" action="/" method="POST" onSubmit="">
            <div className={styles.divInputs}>
              <div className={styles.groupForm}>
                <label className="text2">Nombre</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className={styles.groupForm}>
                <label className="text2">Apellido</label>
                <div className={styles.iconInput}>
                  <input type="text" id="surname" name="surname" />
                </div>
              </div>
              <div className={styles.groupForm}>
                <label className="text2">Correo electrónico</label>
                <div className={styles.iconInput}>
                  <input type="email" id="email" name="email" />
                </div>
              </div>
              <div className={styles.groupForm}>
                <label className="text2">Correo electrónico</label>
                <div className={styles.iconInput}>
                  <input type="email" id="email" name="email" />
                </div>
              </div>

            </div>
            <div className={styles.groupForm}>
                <Button css="buttonForm" text="Ingresar" />
              </div>
          </form>

          <h2 className="heading3">Seleccioná tu fecha de reserva</h2>
        </div>
      </div>
    </>
  );
};

export default BookingTemplate;
