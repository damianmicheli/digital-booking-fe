import Icon from "./Icon";
import styles from "../product/content/features.module.css";
import {
  faWifi,
  faSwimmer,
  faFire,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

export const getIcons = (element) => {
  return element.type === "Piscina" ? (

    <Icon css={styles.icon} icon={faSwimmer} />

  ) : element.type === "Parrilla" ? (

    <Icon css={styles.icon} icon={faFire} />

  ) : element.type === "Aire Acondicionado" ? (

    <Icon css={styles.icon} icon={faSnowflake} />
    
  ) : (
    <Icon css={styles.icon} icon={faWifi} />
  );
};
