import React from "react";

import Icon from "../global/Icon";
import Button from "../global/Button";

import styles from "./card.module.css";
import { faLocationDot, faHeart as faSolideHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';

import { Link } from "react-router-dom";

import useFavorites from "../../hooks/useFavorites";

const Card = ({ id, img, category, title, location, description }) => {

  const [favorites, toggleItemInLocalStorage] = useFavorites();
  const isFavorite = favorites.includes(id);

  return (
    <div className={styles.cardContainer} key={id}>
      <div className={styles.imgContainer}>
        <img className={styles.cardImg} src={img} alt="imagen" />
        <Button event={toggleItemInLocalStorage(id)} css={`${styles.btnFav}`} text={<Icon css="iconFav" icon={isFavorite ? faSolideHeart : faRegularHeart } />}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>
          <h5>{category}</h5>
          <h3>{title}</h3>
        </div>
        <div className={styles.location}>
          <Icon css={styles.iconCard} icon={faLocationDot} />
          <p>{location}</p>
          {/* <a className={styles.enlace} href="/">MOSTRAR EN EL MAPA</a> */}
        </div>
        <div className={styles.description}>
          <p>{description}</p>
          <Link className="buttonCard" to={`/producto/${id}`}> Ver detalle </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
