import React, { useState, useEffect } from "react";
import styles from "./bookingTemplate.module.css";

import { useParams } from "react-router";

import useMediaQuery from "../../hooks/useMediaQuery";
import Calendar from "./Calendar";
import HeaderProduct from "../product/content/HeaderProduct";
import BookingDetail from "./booking_detail/BookingDetail";
import Politics from "../product/content/Politics";
import useFetch from "../../hooks/useFetch";

const BookingTemplate = () => {
  const { id } = useParams();

  const isMobile = useMediaQuery(624);

  const [disabledDates] = useFetch(
    `http://localhost:8080/productos/fechasnodisponibles?id=${id}`
  );

  const fechas = disabledDates && disabledDates.fechasNoDisponibles;
  let fechasInhabilitadas = [];
  let newDate;
  fechas &&
    fechas.map((array) => {
      newDate = new Date(array[0], array[1] - 1, array[2]);
      return fechasInhabilitadas.push(newDate);
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [bookings] = useFetch(`http://localhost:8080/reservas/producto/${id}`);

  const [data] = useFetch(`http://localhost:8080/productos/buscar?id=${id}`);

  const nombre = data && data.nombre;
  const categoria = data && data.categoria.titulo.toUpperCase();
  const politicaDeCancelacion = data && data.politica_de_cancelacion;
  const politicaDeSaludYSeguridad = data && data.politica_de_salud_y_seguridad;
  const normasDeUso = data && data.politica_de_uso;
  const ciudad = data && data.ciudad.ciudad;

  const [reservationDate, setReservationDate] = useState({
    startDate: null,
    endDate: null,
  });

  const { startDate, endDate } = reservationDate;

  return (
    <>
      <div className={styles.title}>
        <HeaderProduct
          category={categoria}
          title={nombre}
          path={`/producto/${id}`}
        />
      </div>
      <div className={styles.bookingTemplate}>
        <div className="container">
          <h2 className="heading2 color2 paddingTop">Completá tus datos</h2>
          <form id="bookingForm" action="/" method="POST">
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
                      value={ciudad}
                    />
                  </div>
                </div>
                <div className={styles.calendar}>
                  <h2 className="heading2">Seleccioná tu fecha de reserva</h2>
                  {isMobile ? (
                    <Calendar
                      months={1}
                      bookings={fechasInhabilitadas}
                      startDate={startDate}
                      endDate={endDate}
                      setReservationDate={setReservationDate}
                    />
                  ) : (
                    <Calendar
                      months={2}
                      bookings={fechasInhabilitadas}
                      startDate={startDate}
                      endDate={endDate}
                      setReservationDate={setReservationDate}
                    />
                  )}
                </div>
              </div>
              <div className={styles.contentRight}>
                <div className={styles.detail}>
                  <BookingDetail />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Politics
        normas={normasDeUso}
        politicaSalud={politicaDeSaludYSeguridad}
        politicaCancelacion={politicaDeCancelacion}
      />
    </>
  );
};

export default BookingTemplate;
