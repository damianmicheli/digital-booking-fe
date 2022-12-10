import React from "react";
import Icon from "../../global/Icon";
import styles from "./bookingDetail.module.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Button from "../../global/Button";
import { getStarNum } from "../../global/getStarNum";

const BookingDetail = ({ startDate, endDate, title, category, location, image, score }) => {

  const onclick = () => {

  }

  return (
    <div className={styles.bookingDetail}>
      <h2 className="heading2 color2">Detalle de la reserva</h2>
      <div className={styles.imgContent}>
        <img
          className={styles.bookingImg}
          src={image
            ? image.url
            : "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/categorias/placeholder.jpeg"}
          alt="imagen"
        />
        <div className={styles.content}>
          <h5>{category}</h5>
          <h3 className="color2">{title}</h3>
          <p className="stars">{getStarNum(score)}</p>
          <h6>
            <Icon css={styles.iconLocation} icon={faLocationDot} />
            {location}
          </h6>
          <hr className="line" />
          <div className={styles.checkDate}>
            <p>Check in</p>
            <p>{startDate}</p>
          </div>
          <hr className="line"/>
          <div className={styles.checkDate}>
            <p>Check out</p>
            <p>{endDate}</p>
          </div>
          <hr className="line marginBottom" />
          <Button css="buttonCard centered" text={"Confirmar reserva"} event={onclick}/>
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
