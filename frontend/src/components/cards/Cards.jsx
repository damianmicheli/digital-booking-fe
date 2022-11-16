import React from "react";

import Card from "./Card";
import styles from "./cards.module.css";

const Cards = ({ data }) => {

  return (
    <div className={styles.container}>
      <h2>Recomendaciones</h2>
      <div className={styles.cardsContainer}>
        {data &&
          data.map((producto) => (
            <div key={producto.id}>
              <Card
                id={producto.id}
                img={producto.imagenes[0] ? producto.imagenes[0].url : 'https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/categorias/placeholder.jpeg'}
                category={producto.categoria.titulo.toUpperCase()}
                title={producto.nombre}
                location={producto.direccion}
                description={producto.descripcion}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cards;
