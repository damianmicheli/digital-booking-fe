import React, { useState, useRef, useEffect } from "react";

//styles
import styles from "./calendar.module.css";

//fontawesome
import Icon from "../../global/Icon";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

//date-range
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { es } from "react-date-range/dist/locale";

const CalendarSearch = ({ months, setReservationDate, selectedDate, setSelectedDate}) => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  
  // date value

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <>
      <div className={`${styles.calendarWrap} ${styles.datePicker}`}>
        <Icon css={styles.icon} icon={faCalendar} />
        <input
          value={selectedDate}
          readOnly
          className={styles.inputBox}
          onClick={() => {
            setOpen((open) => !open);
          }}
          onChange={
            !open ? 
            selectedDate :
            setSelectedDate(`${format(range[0].startDate, "dd/MM/yyyy")} - ${format(
            range[0].endDate,
            "dd/MM/yyyy"
          )}`)
        }
        />

        <div ref={refOne}>
          {open && (
            <DateRange
              onChange={(item) => {
                setRange([item.selection]);
                setReservationDate({
                  startDate: item.selection.startDate,
                  endDate: item.selection.endDate,
                });
              }}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={range}
              rangeColors={["rgb(251, 192, 45, 1)"]}
              months={months}
              direction="horizontal"
              className={styles.calendarElement}
              minDate={new Date()}
              locale={es}
              showDateDisplay={false}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CalendarSearch;
