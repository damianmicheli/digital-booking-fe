import React from "react";
import CardCategory from "./CardCategory";
import styles from "./cardsCategories.module.css";


const CardsCategorias = ({ items }) => {

  return (
    <div className={styles.container}>
      <h2>Buscar por tipo de alojamiento</h2>
      <div className={styles.containerCategory}>
        {items && items.map((alojamiento) => (
          <div key={alojamiento.id}>
            <CardCategory
              category={alojamiento.titulo}
              img={alojamiento.url}
              description={alojamiento.descripcion}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsCategorias;
