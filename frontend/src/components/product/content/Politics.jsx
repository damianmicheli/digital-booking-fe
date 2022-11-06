import React from "react";
import styles from "./politics.module.css";

const Politics = ({ normas, politicaCancelacion, politicaSalud }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>¿Qué tenés que saber?</h1>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentItem}>
          <h2 className={styles.contentTitle}>Normas de la casa</h2>
          {normas}
        </div>
        <div className={styles.contentItem}>
          <h2 className={styles.contentTitle}>Salud y seguridad</h2>
          {politicaSalud}
        </div>
        <div className={styles.contentItem}>
          <h2 className={styles.contentTitle}>Política de cancelación</h2>
          {politicaCancelacion}
        </div>
      </div>
    </div>
  );
};

export default Politics;
