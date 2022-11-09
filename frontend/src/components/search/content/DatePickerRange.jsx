import React, { useState, useRef, useEffect } from "react";

//styles
import styles from "./datepickerrange.module.css";

//fontawesome
import Icon from "../../global/Icon";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

//date-range
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import useMediaQuery from "../../../hooks/useMediaQuery";

const DatePickerRange = () => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

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

  const isMobile = useMediaQuery(768);

  return (
    <>
      {!isMobile && (
        <div className={`${styles.calendarWrap} ${styles.datePicker}`}>
          <Icon css={styles.icon} icon={faCalendar} />
          <input
            value={`${format(range[0].startDate, "dd/MM/yyyy")} - ${format(
              range[0].endDate,
              "dd/MM/yyyy"
            )}`}
            readOnly
            className={styles.inputBox}
            onClick={() => {
              setOpen((open) => !open);
            }}
          />

          <div ref={refOne}>
            {open && (
              <DateRange
                onChange={(item) => setRange([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                rangeColors={["rgb(251, 192, 45, 1)"]}
                months={2}
                direction="horizontal"
                className={styles.calendarElement}
                minDate={new Date()}
              />
            )}
          </div>
        </div>
      )}

      {isMobile && (
        <div className={`${styles.calendarWrap} ${styles.datePicker}`}>
          <Icon css={styles.icon} icon={faCalendar} />
          <input
            value={`${format(range[0].startDate, "dd/MM/yyyy")} - ${format(
              range[0].endDate,
              "dd/MM/yyyy"
            )}`}
            readOnly
            className={styles.inputBox}
            onClick={() => {
              setOpen((open) => !open);
            }}
          />

          <div ref={refOne}>
            {open && (
              <DateRange
                onChange={(item) => setRange([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                rangeColors={["rgb(251, 192, 45, 1)"]}
                months={1}
                direction="vertical"
                className={styles.calendarElement}
                minDate={new Date()}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DatePickerRange;
