import React, { useState } from "react";
import styles from "./administration.module.css";

import { getIcons } from "../global/getIcons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Icon from "../global/Icon";

import useFetch from "../../hooks/useFetch";
import URL_BASE from "../global/getUrlBase";

const Attribute = ({handleAttribute}) => {
  const [atributos] = useFetch(`${URL_BASE}/caracteristicas`);

  const [selected, setSelected] = useState("Elegí un atributo");

  const [isActive, setIsActive] = useState(false);


  return (
    <div className={styles.contentAttributes}>
      <div className={styles.groupForm}>
        <label className="text2">Ícono y nombre</label>
        <div className={styles.dropdown}>
          <div
            className={styles.dropdownBtn}
            onClick={(e) => setIsActive(!isActive)}
          >
            {selected}
          </div>
          {isActive && (
            <div className={styles.dropdownContent}>
              {atributos?.map((atributo) => (
                <div
                  key={atributo.id}
                  onClick={() => {
                    setSelected(`${atributo.nombre}`);
                    setIsActive(false);
                  }}
                  className={styles.dropdownItem}
                >
                <div className={styles.dropdownItemAttribute}>
                  {getIcons(atributo)}                  
                    <p>{atributo.nombre}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Icon css={styles.addIcon} icon={faSquarePlus} event={handleAttribute} />
    </div>
  );
};

export default Attribute;
