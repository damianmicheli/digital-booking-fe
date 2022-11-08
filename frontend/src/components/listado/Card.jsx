import React from "react";

import Button from "../global/Button";
import Icon from "../global/Icon";

import styles from "./card.module.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Card = ({ id, img, category, title, location, description }) => {
  return (
    <div className={styles.cardContainer} key={id}>
      <div className={styles.imgContainer}>
          <img className={styles.cardImg} src={img} alt="imagen" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>
          <h5>{category}</h5>
          <h3>{title}</h3>
        </div>
        <div className={styles.location}>
          <Icon css={styles.iconCard} icon={faLocationDot}/>
          <p>{location}</p>
        </div>
        <div className={styles.description}>
          <p>{description}</p>
          <Button css="buttonCard" text="Ver detalle"/>
        </div>
      </div>
    </div>
  );
};

export default Card;