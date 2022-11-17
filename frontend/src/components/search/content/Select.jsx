import React, { useState } from "react";

import useFetch from "../../../hooks/useFetch";

import styles from "./select.module.css";

import Icon from "../../global/Icon";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Select = ({ selected, setSelected, setIdCity }) => {

  const [ciudades] = useFetch('http://localhost:8080/ciudades');

  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownBtn} onClick={
        e => setIsActive(!isActive)
      }>
        <Icon css={"icon"} icon={faLocationDot}/>
        {selected}
      </div>
      {isActive && (
        <div className={styles.dropdownContent}>
          {ciudades.map(ciudad => (
            <div key={ciudad.id} onClick={() => {
              setSelected(ciudad.ciudad)
              setIdCity(ciudad.id)
              setIsActive(false)
            }} 
              className={styles.dropdownItem}>
                <Icon css={styles.icon} icon={faLocationDot}/>
                <div className={styles.dropdownItemCity}>
                  <p>{ciudad.ciudad}</p>
                  <span>{ciudad.pais}</span>
                </div>
                </div>
          ))}

      </div>
      )}
    </div>
  );
};

export default Select;