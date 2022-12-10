import React from "react";
import styles from "./locationProduct.module.css";
import Icon from "../../global/Icon";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { getDescriptionScore } from "../../global/getDescriptionScore";

const LocationProduct = ({ direction, city, country, score }) => {
  const isMobile = useMediaQuery(624);

  return (
    <div className={styles.container}>
      {!isMobile && (
        <>
          <div className={styles.locationContainer}>
            <div className={styles.textContainer}>
              <div className={styles.location}>
                <p className={styles.text1}>
                  <Icon css={styles.icon} icon={faLocationDot} />
                  {city}, {country}
                </p>
              </div>
              <p className={styles.text2}>{direction}</p>
            </div>
            {score === 0 ? (
              ""
            ) : (
              <div className={styles.scoreContainer}>
                <p className={styles.scoreText}>{getDescriptionScore(score)}</p>
                <div className={styles.score}>{score.toFixed()}</div>
              </div>
            )}
          </div>
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
