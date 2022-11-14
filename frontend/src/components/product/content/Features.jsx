import React from "react";
import styles from "./features.module.css";
import { getIcons } from '../../global/getIcons';


const Features = ({ features }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>¿Qué ofrece este lugar?</h1>
      </div>
      <div className={styles.featuresContainer}>
        {features === null ? (
          <p> No disponible</p>
        ) : (
          features.map((feature) => {
            return (
              <div key={feature.id} className>
                {getIcons(feature)}

                <h4 className="product_h4_paddingleft">{feature.title}</h4>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Features;
