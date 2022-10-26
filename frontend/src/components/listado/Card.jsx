import React from "react";
import Button from "../../components/global/Button";
import styles from "./card.module.css";
import Icon from "../../components/global/Icon";
import {
  faLocationDot,
  // faWifi,
  // faSwimmer,
  // faStar,
  // faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ img, category, title, location, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={img} alt="alojamiento" className={styles.imgCard} />
      </div>
      <div className={styles.textContainer}>
        <span>{category}</span>
        <h3>{title}</h3>
        <h5>
          <Icon css={styles.icon} icon={faLocationDot} />
          {location}
        </h5>
        <p>{description}</p>
        <Button css="button1" text="Ver detalle" />
      </div>
    </div>
  );
};

export default Card;
