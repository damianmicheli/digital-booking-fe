import React, { useState } from "react";
import styles from "../administration.module.css";

import useFetch from "../../../hooks/useFetch";
import URL_BASE from "../../global/getUrlBase";

const Category = ({setCategory}) => {
  const [categorias] = useFetch(`${URL_BASE}/categorias`);

  const [selected, setSelected] = useState("Elegí una categoria");

  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdownBtn}
        onClick={(e) => setIsActive(!isActive)}
      >        {selected}
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
              <div className={styles.dropdownItemAttribute}>{categoria.titulo}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
