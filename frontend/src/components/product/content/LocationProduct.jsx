import React from "react";
import styles from "./locationProduct.module.css";
import Icon from "../../global/Icon";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import useMediaQuery from "../../../hooks/useMediaQuery";

const LocationProduct = ({ direction, city, country }) => {
  
  const isMobile = useMediaQuery(624);

  return (
    <div className={styles.container}>
      {!isMobile && (
        <>
          <div className={styles.location}>
            <p className={styles.text1}>
              <Icon css={styles.icon} icon={faLocationDot} />
              {city}, {country}
            </p>
          </div>
          <p className={styles.text2}>{direction}</p>
        </>
      )}
      {isMobile && (
        <>
          <div className={styles.location}>
            <p className={styles.text1}>
              <Icon css={styles.icon} icon={faLocationDot} />
              {city}, {country}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default LocationProduct;
