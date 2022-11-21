import React from "react";
import Icon from "../../global/Icon";
import styles from "./bookingDetail.module.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Button from "../../global/Button";

const BookingDetail = () => {
  return (
    <div className={styles.bookingDetail}>
      <h2 className="heading2 color2">Detalle de la reserva</h2>
      <div className={styles.imgContent}>
        <img
          className={styles.bookingImg}
          src="https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/categorias/placeholder.jpeg"
          alt="imagen"
        />
        <div className={styles.content}>
          <h5>{/* {category} */}HOTEL</h5>
          <h3 className="color2">{/* {title} */}Hermitage Hotel</h3>
          <h6>
            <Icon css={styles.iconLocation} icon={faLocationDot} />
            {/* {location} */}Av. Colón 1643, Buenos Aires, Ciudad Autónoma de
            Buenos Aires, Argentina
          </h6>
          <div className="line"></div>
          <div className={styles.checkDate}>
            <p>Check in</p>
            <p>26/11/2022</p>
          </div>
          <div className="line"></div>
          <div className={styles.checkDate}>
            <p>Check out</p>
            <p>06/12/2022</p>
          </div>
          <div className="line marginBottom"></div>

          <Button css="buttonCard" text={"Confirmar reserva"} />
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
