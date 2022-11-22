import React, { useState } from "react";

//date-range
import { DateRange } from "react-date-range";
// import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { es } from "react-date-range/dist/locale";

import styles from "./calendar.module.css"

const Calendar = ({months, bookings, startDate, endDate, setReservationDate}) => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  
  return (
    <div className={styles.container}>
      <h2 className="heading2 color2">Seleccioná tu fecha de reserva</h2>
      <DateRange
        onChange={(item) => {
          setRange([item.selection])
          setReservationDate({
            startDate: item.selection.startDate,
            endDate: item.selection.startDate
          })
        }}
        moveRangeOnFirstSelection={false}
        ranges={range}
        rangeColors={["rgb(251, 192, 45, 1)"]}
        months={months}
        direction="horizontal"
        minDate={new Date()}
        monthDisplayFormat={"MMMM yyyy"}
        disabledDates={bookings}
        showDateDisplay={false}
        locale={es}
        className={styles.calendarElement}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};

export default Calendar;
