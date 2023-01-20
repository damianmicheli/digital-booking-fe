import React, { useContext } from "react";

import CalendarBooking from "./CalendarBooking";
import Button from "../../../global/Button";

import useMediaQuery from "../../../../hooks/useMediaQuery";

import useFetch from "../../../../hooks/useFetch";
import { useParams, useNavigate } from "react-router";

import AuthContext from "../../../../context/AuthContext";
import { addDays } from "date-fns"

import URL_BASE from "../../../global/getUrlBase";

import styles from "./booking.module.css";

const BookingCalendar = () => {
  const isMobile = useMediaQuery(768);

  const { id } = useParams();

  const [disabledDates] = useFetch(
    `${URL_BASE}/productos/fechasnodisponibles?id=${id}`
  );

  const fechas = disabledDates && disabledDates.fechasNoDisponibles;

  let fechasInhabilitadas = [];
  let newDate;

  fechas && fechas.map((array) => {
      newDate = addDays(new Date(array[0], array[1] - 1, array[2] - 1), 1)
      return fechasInhabilitadas.push(newDate);
    });

  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  const handleBooking = () => {
    auth ? navigate(`/producto/${id}/reserva`) : navigate(`/login?showAlert=true`);
  };

  return (
    <>
      <div className={styles.booking}>
        <div className={styles.container}>
          <h2 className="heading2">Fechas disponibles</h2>
          <div className={styles.calendarPButton}>
            <div className={styles.calendar}>
              {isMobile ? (
                <CalendarBooking months={1} bookings={fechasInhabilitadas} />
              ) : (
                <CalendarBooking months={2} bookings={fechasInhabilitadas} />
              )}
            </div>
            <div className={styles.pButton}>
              <p>
                Agregá tus fechas exactas de viaje para obtener precios exactos
              </p>
              <Button
                css="buttonCard"
                text="Iniciar reserva"
                event={handleBooking}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingCalendar;