import React, { useState } from "react";

//Styles
import styles from "./buscador.module.css";

//Components
import Select from "./contenido/Select";
import DatePickerRange from "./contenido/DatePickerRange";
import Button from "../global/Button";

const Buscador = () => {

  const [selected, setSelected] = useState("¿A dónde vamos?");

  const [datePicked, setDatePicked] = useState("Check in - Check out");

  

  return (
      <div className={styles.container}>
        <div className={styles.buscador}>
          <div className={styles.title}>
            <h1>Busca ofertas en hoteles, casas y mucho más</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.select}>
              <Select selected={selected} setSelected={setSelected}/>
            </div>
            <div className={styles.datepicker}>
              <DatePickerRange datePicked={datePicked} setDatePicked={setDatePicked}/>
            </div>
            <div className={styles.buttonContainer}>
              <Button css={styles.button} text="Buscar" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Buscador;
