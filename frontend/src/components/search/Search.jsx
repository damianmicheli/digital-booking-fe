import React, { useState } from "react";

//Styles
import styles from "./buscador.module.css";

//Components
import Select from "./content/Select";
import DatePickerRange from "./content/DatePickerRange";
import Button from "../global/Button";

const Search = () => {

  const [selected, setSelected] = useState("¿A dónde vamos?");

  return (
    <div className={styles.container}>
      <div className={styles.buscador}>
        <div className={styles.title}>
          <h1>Busca ofertas en hoteles, casas y mucho más</h1>
        </div>
        <form className={styles.content}>
          <div className={styles.select}>
            <Select selected={selected} setSelected={setSelected} />
          </div>
          <div className={styles.datepicker}>
            <DatePickerRange />
          </div>
          <div className={styles.buttonContainer}>
            <Button css={styles.button} text="Buscar" type="submit"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
