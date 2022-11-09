import React, { useState } from "react";

import useFetch from "../../../hooks/useFetch";

import styles from "./select.module.css";

import Icon from "../../global/Icon";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Select = ({ selected, setSelected }) => {

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
            <div onClick={() => {
              setSelected(`${ciudad.ciudad}, ${ciudad.pais}`)
              setIsActive(false)
            }} 
              className={styles.dropdownItem}>
                <Icon css={styles.icon} icon={faLocationDot}/>
                {`${ciudad.ciudad}, ${ciudad.pais}`}
                </div>
          ))}

      </div>
      )}
    </div>
  );
};

export default Select;