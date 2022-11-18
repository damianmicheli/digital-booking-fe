import React, { useState } from "react";
import Calendar from "react-calendar";
 import './Calendar.css';
import styles from "./booking.module.css";

import useMediaQuery from "../../hooks/useMediaQuery";
import Button from "../global/Button";

const BookingCalendar = () => {
  const isMobile = useMediaQuery(624);
  const [date, setDate] = useState(new Date());

  const [booking1, setBooking1] = useState([new Date(2022, 10, 18), new Date(2022, 10, 25)])
/*   const [booking2, setBooking2] = useState([new Date(2022, 10, 29), new Date(2022, 11, 5)]) */

/*   const [booking, setBooking] = useState([booking1,booking2]) */

  return (
    <>
      <div className={styles.booking}>
        <div className={styles.container}>
          <h2 className="heading3">Fechas disponibles</h2>
          <div className={styles.calendarPButton}>
            <div className={styles.calendar}>
              {isMobile ? (
                <Calendar />
              ) : (
                <Calendar view={"month"} tileDisabled={({activeStartDate, date, view })=> date == new Date()} minDate={date} selectRange={true} returnValue={"range"} showDoubleView={true} />
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
