import React, { useContext } from "react";

import Card from "./Card";
import FilterContext from "../../context/FilterContext";
import Icon from "../global/Icon";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./cards.module.css";
import { getDateFormat } from "../global/getDateFormat";

const Cards = ({ data }) => {
  const { valuesForm, selectedCategory, filterHandlers } =
    useContext(FilterContext);

  const date = valuesForm.date && valuesForm.date;

  const checkIn = date && getDateFormat.getDate(date.startDate);
  const checkOut = date && getDateFormat.getDate(date.endDate);
  const dateFormat = checkIn + " / " + checkOut;

  return (
    <>
      <div className={styles.container}>
        <h2>Recomendaciones</h2>
        <div className={styles.filterContainer}>
          {selectedCategory.title === null ? (
            ""
          ) : (
            <span className={styles.filterItem}>
              {selectedCategory.title}
              <Icon
                css={styles.iconDelete}
                icon={faXmark}
                event={filterHandlers.handleClearCategory}
              />
            </span>
          )}
          {valuesForm.city === null 
          || valuesForm.city === "¿A dónde vamos?"
          ? (
            ""
          ) : (
            <span className={styles.filterItem}>
              {valuesForm.city}
              <Icon
                css={styles.iconDelete}
                icon={faXmark}
                event={filterHandlers.handleClearCity}
              />
            </span>
          )}
          {valuesForm.date === undefined 
          ? (
            ""
          ) : (
            <span className={styles.filterItem}>
              {dateFormat}
              <Icon
                css={styles.iconDelete}
                icon={faXmark}
                event={filterHandlers.handleClearDate}
              />
            </span>
          )}
        </div>
        <div className={styles.cardsContainer}>
          {typeof currentItems === "string"
            ? "No se encontraron resultados"
            : data &&
              data.map((producto) => (
                <div key={producto.id}>
                  <Card
                    id={producto.id}
                    img={
                      producto.imagenes[0]
                        ? producto.imagenes[0].url
                        : "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/categorias/placeholder.jpeg"
                    }
                    category={producto.categoria.titulo.toUpperCase()}
                    title={producto.nombre}
                    location={`${producto.ciudad.ciudad}, ${producto.ciudad.pais}`}
                    description={producto.descripcion}
                  />
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
