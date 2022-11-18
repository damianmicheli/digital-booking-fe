import React, { useContext, useEffect} from "react";

import Card from "./Card";
import FilterContext from "../../context/FilterContext";
import FavContext from "../../context/FavContext";
import Icon from "../global/Icon";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styles from "./cards.module.css";

const Cards = ({ data }) => {
 
  const { valuesForm, selectedCategory, filterHandlers } = useContext(FilterContext);

  const { favorites, toggleItemInLocalStorage} = useContext(FavContext);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      {selectedCategory.title !== null ||
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
          {/* {selectedCategory.title === null ? (
            ""
          ) : (
            <span className={styles.filterItem}>
              {selectedCategory.title}
            </span>
          )}
          {valuesForm.city === null ? (
            ""
          ) : (
            <span className={styles.filterItem}>
              {valuesForm.city}
            </span>
          )} */}
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
                    toggleItemInLocalStorage={toggleItemInLocalStorage}
                    favorites={favorites}
                  />
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
