import React, { useState, useEffect } from "react";
import styles from "../administration.module.css";

import useFetch from "../../../hooks/useFetch";
import URL_BASE from "../../global/getUrlBase";

const City = ({ setCity, setCityIsEmpty}) => {

  const [ciudades] = useFetch(`${URL_BASE}/ciudades`);

  const [selected, setSelected] = useState("Elegí una ciudad");

  const [isActive, setIsActive] = useState(false);

  useEffect(()=>{
    selected !== "Elegí una ciudad" && setCityIsEmpty(false)
  }, [selected])

  //console.log({selected});
  return (
    <div
      className={styles.dropdown}
      tabIndex={0}
      onFocus={() => {
       // console.log("focus city");
      }}
      onBlur={() => {
        //  console.log("blur city");
          setCityIsEmpty(selected === "Elegí una ciudad");
        }}
    >
      <div
        className={styles.dropdownBtn}    
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected}
      </div>
      {isActive && (
        <div className={styles.dropdownContent}>
          {ciudades?.map((ciudad) => (
            <div
              key={ciudad.id}
              onClick={() => {
                setSelected(`${ciudad.ciudad}, ${ciudad.pais}`);
                setIsActive(false);
                setCity(ciudad.id);
              }}
              className={styles.dropdownItem}
            >
              <div className={styles.dropdownItemAttribute}>
                {ciudad.ciudad}, {ciudad.pais}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default City;
