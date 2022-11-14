import React from "react";
import CardCategory from "./CardCategory";
import styles from "./cardsCategories.module.css";


const CardsCategorias = ({ items }) => {
  return (
    <div className={styles.container}>
      <h2>Buscar por tipo de alojamiento</h2>
      <div className={styles.containerCategory}>
        {items && items.map((category) => (
          <div key={category.id}>
            <CardCategory
              category={category.titulo}
              img={category.url}
              description={category.descripcion}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsCategorias;
