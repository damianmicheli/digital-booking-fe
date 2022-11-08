import React from "react";
import DatePicker from "react-date-range";

const Calendar = ({ months, bookings }) => {
  const bookings = [
    {
      from: new Date("01-05-2022"),
      to: new Date("01-18-2022"),
      middayCheckout: true,
    },
    {
      from: "06-25-2022",
      to: "07-03-2022",
      middayCheckout: false,
    },
  ];
  return <Datepicker controls={["calendar"]} display="inline" touchUi={true} />;
};

export default Calendar;
