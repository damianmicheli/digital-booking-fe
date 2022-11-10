import React, { useState } from "react";
import Calendar from "react-calendar";
 import './Calendar.css';
import styles from "./booking.module.css";

import useMediaQuery from "../../hooks/useMediaQuery";
import Button from "../global/Button";

const BookingCalendar = ({ monhts, bookings }) => {
  const isMobile = useMediaQuery(624);
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div className="bgGray">
        <div className={styles.container}>
          <h2 className="heading3">Fechas disponibles</h2>
          <div className={styles.calendarPButton}>
            <div className={styles.calendar}>
              {isMobile ? (
                <Calendar />
              ) : (
                <Calendar activeStartDate={date} showDoubleView={true} />
              )}
            </div>
            <div className={styles.pButton}>
              <p>
                Agregá tus fechas exactas de viaje para obtener precios exactos
              </p>
              <Button css="button4" text="Iniciar reserva"></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingCalendar;
