import React from "react";
import styles from "./bookingTemplate.module.css";

/* import useFetch from "../../hooks/useFetch"; */
import { useParams } from "react-router";

import Calendar from "./Calendar";
import HeaderProduct from "../product/content/HeaderProduct";
import BookingDetail from "./booking_detail/BookingDetail";
import Politics from "../product/content/Politics";

const BookingTemplate = () => {
  const { id } = useParams();
  /* 
  const [data] = useFetch(`http://localhost:8080/productos/${id}`);

  const nombre = data && data.nombre;
  const categoria = data && data.categoria.titulo.toUpperCase(); */

  return (
    <>
      <div className={styles.title}>
        <HeaderProduct category={"categoria"} title={"nombre"} />
      </div>
      <div className={styles.bookingTemplate}>
        <div className="container">
          <h2 className="heading2 color2 paddingTop">Completá tus datos</h2>
          <form id="bookingForm" action="/" method="POST" onSubmit="">
            <div className={styles.content}>
              <div className={styles.contentLeft}>
                <div className={styles.divInputs}>
                  <div className={styles.groupForm}>
                    <label className="text2">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value="Gloria"
                      disabled
                    />
                  </div>
                  <div className={styles.groupForm}>
                    <label className="text2">Apellido</label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      value="Lunar"
                      disabled
                    />
                  </div>
                  <div className={styles.groupForm}>
                    <label className="text2">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value="glorialunar@gmail.com"
                      disabled
                    />
                  </div>
                  <div className={styles.groupForm}>
                    <label className="text2">Ciudad</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value="Rosario, Santa Fe"
                    />
                  </div>
                </div>
                <Calendar months={2} />
              </div>
              <div className={styles.contentRight}>
                <BookingDetail />
              </div>
            </div>
          </form>
        </div>
      </div>

      <Politics
        normas={"normasDeUso"}
        politicaSalud={"politicaDeSaludYSeguridad"}
        politicaCancelacion={"politicaDeCancelacion"}
      />
    </>
  );
};

export default BookingTemplate;
