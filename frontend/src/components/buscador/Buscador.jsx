import React from "react";

//Styles
import styles from "./buscador.module.css";

//Components
import Select from "./contenido/Select";
import DatePickerRange from "./contenido/DatePickerRange";
import Button from "../global/Button";

const Buscador = () => {
  return (
      <div className={styles.container}>
        <div className={styles.buscador}>
          <div className={styles.title}>
            <h1>Busca ofertas en hoteles, casas y mucho más</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.select}>
              <Select />
            </div>
            <div className={styles.datepicker}>
              <DatePickerRange />
            </div>
            <div>
              <Button css="button1" text="Buscar" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Buscador;
