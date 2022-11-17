import React, { useState, useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

//Styles
import styles from "./buscador.module.css";

//Components
import Select from "./content/Select";
import Calendar from './content/Calendar';
import Button from "../global/Button";


const Search = () => {
  const [selected, setSelected] = useState("¿A dónde vamos?");

  const [idCity, setIdCity] = useState(null);
  
  const { setValuesForm } = useContext(FilterContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValuesForm(() => {
      return {
        city: selected,
        id: idCity
      };
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.buscador}>
        <div className={styles.title}>
          <h1>Busca ofertas en hoteles, casas y mucho más</h1>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.content}>
          <div className={styles.select}>
            <Select selected={selected} setSelected={setSelected} setIdCity={setIdCity} />
          </div>
          <div className={styles.datepicker}>
            <Calendar />
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
