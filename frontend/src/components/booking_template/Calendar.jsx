import React, { useState } from "react";

//date-range
import { DateRange } from "react-date-range";
// import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { es } from "react-date-range/dist/locale";

import styles from "./calendar.module.css"

const Calendar = ({months, bookings, setReservationDate}) => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  
  return (
      <DateRange
        onChange={(item) => {
          setRange([item.selection])
          setReservationDate({
            startDate: item.selection.startDate,
            endDate: item.selection.endDate
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
      />
   
  );
};

export default Calendar;
