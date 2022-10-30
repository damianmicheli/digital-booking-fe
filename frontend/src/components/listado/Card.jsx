import React from "react";
import Button from "../global/Button";
import styles from "./card.module.css";
import Icon from "../global/Icon";
import { faLocationDot, faWifi, faSwimmer, faStar,  faStarHalfStroke, faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = ({ img, category, title, location, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Icon css={styles.iconHeart} icon={faHeart} />
        <img className={styles.imgCard} src={img} alt="alojamiento" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.cardHeader}>
          <div className={styles.title}>
            <div className={styles.category}>
              <span>{category}</span>
              <div>
                <Icon css={styles.icon3} icon={faStar}/>
                <Icon css={styles.icon3} icon={faStar}/>
                <Icon css={styles.icon3} icon={faStar}/>
                <Icon css={styles.icon3} icon={faStar}/>
                <Icon css={styles.icon3} icon={faStarHalfStroke}/>
              </div>
            </div>         
            <h3 className={styles.text} >{title}</h3>
          </div>
          <div className={styles.numberBox}>
            <div className={styles.number}>
              <h3>8</h3>
            </div>
            <h4 className={styles.text}>Muy bueno</h4>
          </div>
        </div>
        <div className={styles.locationBox}>
          <h5 className={styles.text}><Icon css={styles.icon} icon={faLocationDot}/>{location}</h5>
          <Icon css={`${styles.icon} ${styles.icon2}`} icon={faWifi}/>
          <Icon css={styles.icon} icon={faSwimmer}/>
        </div>
        <div className={styles.description}>
          <p>{description}</p>
          <Button css="buttonCard" text="Ver más" />
        </div>
      </div>
    </div>
  );
};

export default Card;