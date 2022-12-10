import React, { useContext} from "react";

import Card from "./Card";
import FilterContext from "../../context/FilterContext";
import Icon from "../global/Icon";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./cards.module.css";
import format from "date-fns/format";

const Cards = ({ data }) => {
  const { valuesForm, selectedCategory, filterHandlers } = useContext(FilterContext);

  const { startDate, endDate } = valuesForm.date;

  const checkIn = startDate !== null ? format(startDate, "dd-MM-yyyy") : null;
  const checkOut = endDate !== null ? format(endDate, "dd-MM-yyyy") : null;

 
  return (
    
      <div className={styles.container}>
        <h2>{selectedCategory.title === null && valuesForm.date.startDate === null && valuesForm.date.endDate === null && valuesForm.city === null ? "Recomendaciones" : "Resultado de tu búsqueda"}</h2>       
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
          {valuesForm.city === null || valuesForm.city === "¿A dónde vamos?" ? (
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
          {!checkIn || !checkOut ? (
            ""
          ) : (
            <span className={styles.filterItem}>
              {`${checkIn}/${checkOut}`}
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
                    score={producto.puntajePromedio}
                    location={`${producto.ciudad.ciudad}, ${producto.ciudad.pais}`}
                    description={producto.descripcion}
                    features={producto.caracteristicas}
                  />
                </div>
              ))}
        </div>
      </div>
   
  );
};

export default Cards;
