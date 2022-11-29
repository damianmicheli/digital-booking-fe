import React, { useState, useEffect, useContext } from "react";
import styles from "./administration.module.css";

import { useParams } from "react-router";

import useMediaQuery from "../../hooks/useMediaQuery";

import HeaderProduct from "../product/content/HeaderProduct";

import useFetch from "../../hooks/useFetch";
import AuthContext from "../../context/AuthContext";
import URL_BASE from "../global/getUrlBase";

import SuccessAdmin from "../global/modal/success/SuccessAdmin";

const Administration = () => {
  const { userLog } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data] = useFetch(`${URL_BASE}/productos/buscar?id=${id}`);

  const [success, setSuccess] = useState(false);

  return (
    <>
      <SuccessAdmin state={success} />
      <div className={styles.title}>
        <HeaderProduct title={"Administración"} path={"/"} />
      </div>
      <div className={styles.administration}>
        <div className={styles}>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            id="bookingForm"
            // action="/"
            // method="POST"
          >
            <div className={styles.content}>
              <div className={styles.contentLeft}>
                <h2 className="heading2 color2 paddingTop">
                  Completá tus datos
                </h2>
                <div className={styles.divInputs}>
                  <div className={styles.groupForm}>
                    <label className="text2">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={userLog && userLog.nombre}
                      disabled
                    />
                  </div>
                  <div className={styles.groupForm}>
                    <label className="text2">Apellido</label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      value={userLog && userLog.apellido}
                      disabled
                    />
                  </div>
                  <div className={styles.groupForm}>
                    <label className="text2">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={userLog && userLog.email}
                      disabled
                    />
                  </div>
                  <div className={styles.groupForm}>
                    <label className="text2">Ciudad</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={ciudad}
                    />
                  </div>
                </div>
                <h2 className="heading2 color2 paddingTop paddingBottom">
                  Seleccioná tu fecha de reserva
                </h2>
                <div className={styles.calendar}>
                  {isMobile ? (
                    <Calendar
                      months={1}
                      bookings={fechasInhabilitadas}
                      setReservationDate={setReservationDate}
                    />
                  ) : (
                    <Calendar
                      months={2}
                      bookings={fechasInhabilitadas}
                      setReservationDate={setReservationDate}
                    />
                  )}
                </div>
              </div>
              <div className={styles.contentRight}>
                <BookingDetail
                  startDate={checkIn}
                  endDate={checkOut}
                  title={nombre}
                  category={categoria}
                  location={direccion}
                  image={imagen}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Administration;
