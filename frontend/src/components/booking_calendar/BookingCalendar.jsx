import React from "react";


import useMediaQuery from "../../hooks/useMediaQuery";
import Button from "../global/Button";

const BookingCalendar = ({monhts, bookings}) => {
  const isMobile = useMediaQuery(767); 

  return (
    <div className={styles.datepicker}>
      <div>
        {isMobile ? (
          <Calendar bookings={bookings} showNumberOfMonths={"1"} />
        ) : (
          <Calendar bookings={bookings} showNumberOfMonths={"2"} />
        )}
      </div>
      <p>Agregá tus fechas exactas de viaje para obtener precios exactos</p>
      <Button ></Button>
    </div>
  );
};

export default BookingCalendar;
