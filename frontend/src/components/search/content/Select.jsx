import React, { useState } from "react";

import CIUDADES_DATA from "../../../data/ciudades.json";

import styles from "./select.module.css";

import Icon from "../../global/Icon";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Select = ({ selected, setSelected }) => {

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
          {CIUDADES_DATA.map(ciudad => (
            <div onClick={() => {
              setSelected(`${ciudad.provincia}, ${ciudad.pais}`)
              setIsActive(false)
            }} 
              className={styles.dropdownItem}>
                <Icon css={styles.icon} icon={faLocationDot}/>
                {`${ciudad.provincia}, ${ciudad.pais}`}
                </div>
          ))}

      </div>
      )}
    </div>
  );
};

export default Select;