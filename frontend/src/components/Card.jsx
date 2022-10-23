import React from "react";
import styles from "./card.module.css";

export const Card = ({ img, category, title, location, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={img} alt="alojamiento" />
      </div>
      <div className={styles.textContainer}>
        <span>{category}</span>
        <h2>{title}</h2>
        <h5>{location}</h5>
        <p>{description}</p>
        <button>Ver detalle</button>
      </div>
    </div>
  );
};
