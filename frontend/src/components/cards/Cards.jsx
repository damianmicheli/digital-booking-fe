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
                img={
                  "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
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
