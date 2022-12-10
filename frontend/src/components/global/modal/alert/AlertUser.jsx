import React from "react";
import Icon from "../../Icon";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import styles from "./alertUser.module.css";
import { useLocation } from 'react-router-dom';


const AlertUser = ({ text })=> {
  const location = useLocation();
  const showAlert = new URLSearchParams(location.search).get('showAlert');

  return (
    <div className={styles.container}>
      <div className={!showAlert ? styles.alertHidden : styles.alertError}>
        <Icon icon={faCircleExclamation} css={styles.iconAlert} />
        <h4 className={styles.alertTxt}>{text}</h4>
      </div>
    </div>

  );
}

export default AlertUser;