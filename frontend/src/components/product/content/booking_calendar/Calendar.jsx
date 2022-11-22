import React from 'react';
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { es } from "react-date-range/dist/locale";
import styles from "./booking.module.css";

const Calendar = ({months, bookings}) => {
 
  return (
    <DateRange 
        months={months}
        direction="horizontal"
        className={styles.calendarElement}
        minDate={new Date()}
        monthDisplayFormat={"MMMM yyyy"}
        disabledDates={bookings}
        locale={es}
        color={"#fff"}
      />
  )
}

export default Calendar