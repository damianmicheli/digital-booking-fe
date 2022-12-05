import React from "react";
import Icon from "../../Icon";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import styles from "./alert.module.css";
import { useLocation } from 'react-router-dom';


const Alert = ()=> {
  const location = useLocation();
  const showAlert = new URLSearchParams(location.search).get('showAlert');

  return (
    <div className={styles.container}>
      <div className={!showAlert ? styles.alertHidden : styles.alertErrorAlert}>
        <Icon icon={faCircleExclamation} css={styles.iconAlert} />
        <h4 className={styles.alertTxt}>Para realizar una reserva necesitas estar logueado</h4>
      </div>
    </div>

  );
}

export default Alert;