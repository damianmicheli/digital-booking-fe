import React, { useEffect, useState } from "react";
import styles from "../administration.module.css";

import useFetch from "../../../hooks/useFetch";
import URL_BASE from "../../global/getUrlBase";

const Category = ({ setCategory, setCategoryIsEmpty}) => {

  const [categorias] = useFetch(`${URL_BASE}/categorias`);

  const [selected, setSelected] = useState("Elegí una categoria");

  const [isActive, setIsActive] = useState(false);

  useEffect(()=>{
    selected !== "Elegí una categoria" && setCategoryIsEmpty(false)
  }, [selected])

 // console.log({selected});
  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdownBtn}
        tabIndex={0}
        onFocus={() => {
         // console.log("focus category");
        }}
        onBlur={() => {
          //console.log("blur category");
          setCategoryIsEmpty(selected === "Elegí una categoria");
        }}
        onClick={(e) => setIsActive(!isActive)}
      >
        {" "}
        {selected}
      </div>
      {isActive && (
        <div className={styles.dropdownContent}>
          {categorias?.map((categoria) => (
            <div
              key={categoria.id}
              onClick={() => {
                setSelected(`${categoria.titulo}`);
                setIsActive(false);
                setCategory(categoria.id);
              }}
              className={styles.dropdownItem}
            >
              <div className={styles.dropdownItemAttribute}>
                {categoria.titulo}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
