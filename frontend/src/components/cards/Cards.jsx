import React, { useContext } from "react";

import Card from "./Card";
import { FilterContext } from "../../context/FilterContext";
import Icon from "../global/Icon";
import { faXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styles from "./cards.module.css";

const Cards = ({ data }) => {
  
  const { valuesForm, selectedCategory, filterHandlers } = useContext(FilterContext);

  return (
    <>
      {selectedCategory !== null ||
      valuesForm.city !== null ? (
        <span className={styles.clearFilterDelete} onClick={filterHandlers.handleClearFilters}>
          {" "}
          <Icon css={styles.iconClear}icon={faTrashCan} />
          Limpiar Filtros
        </span>
      ) : (
        ""
      )}
      <div className={styles.container}>
        <h2>Recomendaciones</h2>
        <div className={styles.filterContainer}>
          {selectedCategory === null ? (
            ""
          ) : (
            <span className={styles.filterItem}>
              {" "}
              {selectedCategory}{" "}
              <Icon
                onClick={filterHandlers.handleDeleteCategory}
                css={styles.iconDelete}
                icon={faXmark}
              />{" "}
            </span>
          )}
          {valuesForm.city === null ? (
            ""
          ) : (
            <span className={styles.filterItem}>
              {" "}
              {valuesForm.city}{" "}
              <Icon
                onClick={filterHandlers.handleDeleteCity}
                css={styles.iconDelete}
                icon={faXmark}
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
