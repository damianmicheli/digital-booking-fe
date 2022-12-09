import React, { useEffect, useState, useContext } from "react";
import styles from "../administration.module.css";

import { getIcons } from "../../global/getIcons";
import { faSquarePlus, faSquareXmark } from "@fortawesome/free-solid-svg-icons";

import Icon from "../../global/Icon";

import useFetch from "../../../hooks/useFetch";
import URL_BASE from "../../global/getUrlBase";

import AttributeContext from "../../../context/AttributeContext";

const Attribute = ({ number }) => {
  const { handleAttribute } = useContext(AttributeContext);
  const [atributos] = useFetch(`${URL_BASE}/caracteristicas`);
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState(false);
  const [selected, setSelected] = useState("Elegí un atributo");
  const [id, setId] = useState(null);
  const [iconInput, setIconInput] = useState(faSquarePlus);

  useEffect(() => {
    setValue(selected !== "Elegí un atributo");
    
  }, [selected]);

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
                    setId(atributo.id);
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
        event={() =>
          value &&
          handleAttribute(
            //selected === "Elegí un atributo",
            value,
            number,
            id,
            iconInput,
            setIconInput
          )
        }
      />
    </div>
  );
};

export default Attribute;
