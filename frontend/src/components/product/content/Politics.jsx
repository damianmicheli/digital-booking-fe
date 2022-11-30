import React from "react";
import styles from "./politics.module.css";

const Politics = ({ normas, politicaCancelacion, politicaSalud }) => {
  const normasDeUso = normas && normas.split(",");
  const politicaDeSaludYSeguridad = politicaSalud && politicaSalud.split(",");
  const politicaDeCancelacion =
    politicaCancelacion && politicaCancelacion.split(",");

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>¿Qué tenés que saber?</h1>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentItem}>
          <h2 className={styles.contentTitle}>Normas de la casa</h2>
          {normasDeUso &&
            normasDeUso.map((norma, index) => <p key={index}>{norma}</p>)}
        </div>
        <div className={styles.contentItem}>
          <h2 className={styles.contentTitle}>Salud y seguridad</h2>
          {politicaDeSaludYSeguridad &&
            politicaDeSaludYSeguridad.map((politica, index) => (
              <p key={index}>{politica}</p>
            ))}
        </div>
        <div className={styles.contentItem}>
          <h2 className={styles.contentTitle}>Política de cancelación</h2>
          {politicaDeCancelacion &&
            politicaDeCancelacion.map((politica, index) => <p key={index}>{politica}</p>)}
        </div>
      </div>
    </div>
  );
};

export default Politics;
