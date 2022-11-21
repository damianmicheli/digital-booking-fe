import React, { useState } from "react";

import Calendar from "./Calendar";
import Button from "../../../global/Button";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import styles from "./booking.module.css";

import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router";

import useMediaQuery from "../../hooks/useMediaQuery";
import Button from "../global/Button";

const BookingCalendar = () => {

const isMobile = useMediaQuery(624);  

const { id } = useParams();

const [disabledDates] = useFetch(`http://localhost:8080/productos/fechasnodisponibles?id=${id}`)

console.log(disabledDates);

for (let date in disabledDates){
  console.log(disabledDates[date]);
 /*  setBooking1(current => [...current, 'Carl']) */
 
}

  const [booking1, setBooking1] = useState([ [2022,11,25] ])

  console.log(booking1);

  return (
    <>
      <div className={styles.booking}>
        <div className={styles.container}>
          <h2 className="heading2">Fechas disponibles</h2>
          <div className={styles.calendarPButton}>
            <div className={styles.calendar}>
              {isMobile ? (
                <Calendar months={1} bookings={booking1}/>
              ) : (
                <Calendar months={2} bookings={booking1}/>
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
