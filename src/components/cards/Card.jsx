//import React, { useState, useEffect, useContext } from "react";
import React from "react";

import Icon from "../global/Icon";
//import Button from "../global/Button";

import styles from "./card.module.css";
import {
  faLocationDot,
  /* faHeart as faSolideHeart, */
} from "@fortawesome/free-solid-svg-icons";
//import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { getIcons } from "../global/getIcons";
import { getDescriptionScore } from "../global/getDescriptionScore";
import { getStarNum } from "../global/getStarNum";
// import FavContext from "../../context/FavContext";

const Card = ({
  id,
  img,
  category,
  title,
  description,
  favorites,
  features,
  startDate,
  endDate,
  location,
  hour,
  score,
}) => {
  // const [isFavorite, setIsFavorite] = useState(false);

  // const {toggleItemInLocalStorage} = useContext(FavContext);

  // useEffect(() => {
  //   Array.isArray(favorites) && //Valida si es un array..tenga lenght o no
  //     setIsFavorite(favorites.includes(id));
  // }, [favorites]);

  return (
    <div className={styles.cardContainer} key={id}>
      <div className={styles.cardLeft}>
        <img className={styles.cardImg} src={img} alt="imagen" />
        {/* <Button
          // event={() => toggleItemInLocalStorage(id, isFavorite)}
          css={`
            ${styles.btnFav}
          `}
          text={
            <Icon
              css="iconFav"
              // icon={isFavorite ? faSolideHeart : faRegularHeart}
            />
          }
        /> */}
      </div>
      <div className={styles.informationContainer}>
        <div className={styles.cardHeader}>
          <div className={styles.title}>
            <div className={styles.categoryStarsContainer}>
              <h5>{category}</h5>
              <p className="stars">{getStarNum(score)}</p>
            </div>
            <h3>{title}</h3>
          </div>
          {
            score === 0 ? "" 
            : (
              <div className={styles.scoreContainer}>
                <div className={styles.score}>{score.toFixed()}</div>
                <p className={styles.scoreText} >{getDescriptionScore(score)}</p>
              </div>
            )
          }
        </div>
        <div className={styles.location}>
          <p>
            <Icon css={styles.iconCard} icon={faLocationDot} /> {location}{" "}
          </p>
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
              <p>
                <strong>Check In:</strong> {startDate}
              </p>
              <p>
                <strong>Check Out:</strong> {endDate}
              </p>
              <p>
                <strong>Hora de ingreso:</strong> {hour}
              </p>
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
