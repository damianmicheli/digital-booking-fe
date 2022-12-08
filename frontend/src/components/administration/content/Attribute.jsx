import React, { useEffect, useState } from "react";
import styles from "../administration.module.css";

import { getIcons } from "../../global/getIcons";

import Icon from "../../global/Icon";

import useFetch from "../../../hooks/useFetch";
import URL_BASE from "../../global/getUrlBase";

const Attribute = ({ handleAttribute, number, selected, setSelected, iconInput }) => {
  const [atributos] = useFetch(`${URL_BASE}/caracteristicas`);

  const [isActive, setIsActive] = useState(false);

  const [value, setValue] = useState(false);

  useEffect(()=>{
    setValue(selected !== "Elegí un atributo")
  }, [selected])

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
      <Icon
        css={value ? styles.addIcon : styles.addIconDisabled}
        icon={iconInput}
        //icon={selected === "Elegí un atributo" ? faSquarePlus : faSquareXmark}
        event={() =>
         value && handleAttribute(selected === "Elegí un atributo", number)
        }
      />
    </div>
  );
};

export default Attribute;
