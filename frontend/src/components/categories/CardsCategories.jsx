import React from "react";
import CardCategory from "./CardCategory";
import styles from "./cardsCategories.module.css";
// import useFetch from "../../hooks/useFetch";
// import { useParams } from "react-router";


const CardsCategorias = ({ items }) => {

  // const { id } = useParams();

  // const [data] = useFetch(`http://localhost:8080/productos/categoria/${id}`);

  return (
    <div className={styles.container}>
      <h2>Buscar por tipo de alojamiento</h2>
      <div className={styles.containerCategory}>
        {items && items.map((category) => (
          <div key={category.id}>
            <CardCategory
              category={category.titulo}
              img={category.url}
              description="807.105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsCategorias;
