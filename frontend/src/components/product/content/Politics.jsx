import React from "react";
import styles from "./politics.module.css";

const Politics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>¿Qué tenés que saber?</h1>
        <hr className={styles.hr} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentItem}>
          <h2 className={styles.contentTitle}>Normas de la casa</h2>
          <p>Check-out: 10:00</p>
          <p>No se permiten fiestas</p>
          <p>No fumar</p>
        </div>
        <div className={styles.contentItem}>
          <h2 className={styles.contentTitle}>Salud y seguridad</h2>
          <p>Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus</p>
          <p>Detector de humo</p>
          <p>Depósito de seguridad</p>
        </div>
        <div className={styles.contentItem}>
          <h2 className={styles.contentTitle}>Política de cancelación</h2>
          <p>Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía</p>
        </div>
      </div>
    </div>
  );
};

export default Politics;
