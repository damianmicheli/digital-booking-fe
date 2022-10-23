import React from "react";

import PAISES_DATA from "../../../data/provincias.json";

import styles from "./select.module.css";

import Icon from "../../Icon";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const Select = () => {
  return (
    <>
      <div className={styles.inputGroup}>
        <div className={styles.iconContainer}>
          <Icon css="icon-clear-tone" icon={faLocationDot} />
        </div>
        <div className={styles.selectContainer}>
          <select className={styles.selectCities}>
            <option selected disabled>
              ¿A dónde vamos?
            </option>
            {PAISES_DATA.map((pais) => (
              <option>{pais.name}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
