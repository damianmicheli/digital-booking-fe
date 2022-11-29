import React, { useState, useEffect, Fragment } from "react";

import Icon from "../global/Icon";
import Button from "../global/Button";

import styles from "./card.module.css";
import {
  faLocationDot,
  faHeart as faSolideHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { getIcons } from "../global/getIcons";

const Card = ({
  id,
  img,
  category,
  title,
  description,
  favorites,
  toggleItemInLocalStorage,
  features,
  startDate,
  endDate,
  hour,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    Array.isArray(favorites) && //Valida si es un array..tenga lenght o no
      setIsFavorite(favorites.includes(id));
  }, [favorites]);

  return (
    <div className={styles.cardContainer} key={id}>
      <div className={styles.cardLeft}>
        <img className={styles.cardImg} src={img} alt="imagen" />
        <Button
          event={() => toggleItemInLocalStorage(id, isFavorite)}
          css={`
            ${styles.btnFav}
          `}
          text={
            <Icon
              css="iconFav"
              icon={isFavorite ? faSolideHeart : faRegularHeart}
            />
          }
        />
      </div>
      <div className={styles.informationContainer}>
        <div className={styles.title}>
          <h5>{category}</h5>
          <h3>{title}</h3>
        </div>
        <div className={styles.location}>
          
          <p><Icon css={styles.iconCard} icon={faLocationDot} /> A {Math.floor(Math.random() * 1000)} m del centro</p>
          {/* <a className={styles.enlace} href="/">MOSTRAR EN EL MAPA</a> */}
          <div className={styles.features}>
            {features.map((element, i) => {
              return <div key={i}>{getIcons(element)}</div>;
            })}
          </div>
        </div>
        <div className={styles.description}>
          {startDate === undefined ? (
            ""
          ) : (
            <>
              <p><strong>Check In:</strong> {startDate}</p>
              <p><strong>Check Out:</strong> {endDate}</p>
              <p><strong>Hora de ingreso:</strong> {hour}</p>
            </>
          )}
          <p>{description}</p>
        </div>

        <Link className={styles.buttonCard} to={`/producto/${id}`}>
          Ver detalle
        </Link>

      </div>
    </div>
  );
};

export default Card;


