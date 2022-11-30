import Icon from "./Icon";
import styles from "../product/content/features.module.css";
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export const getIcons = (element) => {

  const faIcono = icon({iconName: element.icono })

  return  <Icon css={styles.icon} icon={faIcono} />
  
};


// import {
//   faWifi,
//   faSwimmer,
//   faFire,
//   faSnowflake,
// } from "@fortawesome/free-solid-svg-icons";

// export const getIcons = (element) => {
//   return element.nombre === "Piscina" ? (

//     <Icon css={styles.icon} icon={faSwimmer} />

//   ) : element.nombre === "Parrilla" ? (

//     <Icon css={styles.icon} icon={faFire} />

//   ) : element.nombre === "Aire Acondicionado" ? (

//     <Icon css={styles.icon} icon={faSnowflake} />
    
//   ) : (
//     <Icon css={styles.icon} icon={faWifi} />
//   );
// };
