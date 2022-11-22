import React, { useState, useContext } from "react";
import FilterContext from "../../context/FilterContext";

//Styles
import styles from "./search.module.css";

//Components
import Select from "./content/Select";
import Calendar from "./content/Calendar";
import Button from "../global/Button";
import useMediaQuery from "../../hooks/useMediaQuery";

const Search = () => {
  const [selected, setSelected] = useState("¿A dónde vamos?");

  const [idCity, setIdCity] = useState(null);

  const { setValuesForm, setSelectedCategory } = useContext(FilterContext);

  const [reservationDate, setReservationDate] = useState({
    startDate: null,
    endDate: null,
  });

  const { startDate, endDate } = reservationDate;

  const formatDate = (date) => {
    let formatted_date = null;
    if (date) {
      formatted_date =
        date.getDate() + "-" + (date.getMonth() +1) + "-" + date.getFullYear();
    }

    return formatted_date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValuesForm(() => {
      return {
        city: selected,
        id: idCity,
        date: reservationDate && reservationDate
      };
    });
    setSelectedCategory(() => {
      return {
        title: null,
        id: null,
      };
    });
    let startDate = formatDate(reservationDate.startDate);
    let endDate = formatDate(reservationDate.endDate);
  };

  const isMobile = useMediaQuery(768);

  return (
    <div className={styles.container}>
      <div className={styles.buscador}>
        <div className={styles.title}>
          <h1>Busca ofertas en hoteles, casas y mucho más</h1>
        </div>
        <form
          onSubmit={(e) => {
            selected === "¿A dónde vamos?"
              ? e.preventDefault()
              : handleSubmit(e);
          }}
          className={styles.content}
        >
          <div className={styles.select}>
            <Select
              selected={selected}
              setSelected={setSelected}
              setIdCity={setIdCity}
            />
          </div>
          <div className={styles.datepicker}>
            {isMobile ? (
              <Calendar
                months={1}
                startDate={startDate}
                endDate={endDate}
                setReservationDate={setReservationDate}
              />
            ) : (
              <Calendar
                months={2}
                startDate={startDate}
                endDate={endDate}
                setReservationDate={setReservationDate}
              />
            )}
          </div>
          <div className={styles.buttonContainer}>
            <Button css={styles.button} text="Buscar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
