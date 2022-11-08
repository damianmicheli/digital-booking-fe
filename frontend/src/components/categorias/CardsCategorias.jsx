import React from "react";
import CardCategoriaItem from "./CardCategoriaItem";
import styles from "./cardsCategorias.module.css";


const CardsCategorias = ({ items }) => {

  return (
    <div className={styles.container}>
      <h2>Buscar por tipo de alojamiento</h2>
      <div className={styles.containerCategory}>
        {items && items.map((alojamiento) => (
          <CardCategoriaItem
            key={alojamiento.id}
            category={alojamiento.titulo}
            img={alojamiento.url}
            description={alojamiento.descripcion}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsCategorias;
