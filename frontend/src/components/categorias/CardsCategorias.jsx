import React from "react";
import CardCategoriaItem from "./CardCategoriaItem";
import styles from "./cardsCategorias.module.css";

import useFetch from "../../hooks/useFetch";

const CardsCategorias = ({ items }) => {

  const [categorias] = useFetch('http://localhost:8080/categorias');

  return (
    <div className={styles.container}>
      <h2>Buscar por tipo de alojamiento</h2>
      <div className={styles.containerCategory}>
        {categorias && categorias.map((alojamiento) => (
          <CardCategoriaItem
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
