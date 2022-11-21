import React, { useState } from "react";

import styles from "./calendar.module.css";

//date-range
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { es } from "react-date-range/dist/locale";

const Calendar = ({months, bookings}) => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className={styles.calendarContainer}>
      <h2>Seleccioná tu fecha de reserva</h2>
      <DateRange
        onChange={(item) => setRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={range}
        rangeColors={["#607d8b"]}
        months={months}
        direction="horizontal"
        className={styles.calendarElement}
        minDate={new Date()}
        monthDisplayFormat={"MMMM yyyy"}
        disabledDates={bookings}
        startDate={format(range[0].startDate, "dd/MM/yyyy")}
        endDate={format(range[0].endDate, "dd/MM/yyyy")}
        showDateDisplay={false}
        locale={es}
      />
    </div>
  );
};

export default Calendar;
