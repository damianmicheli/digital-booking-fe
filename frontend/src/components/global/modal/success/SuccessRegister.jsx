import successCheck from "../../../../assets/img/success-check.png";
import { Link } from "react-router-dom";
import styles from "./success.module.css";
import Button from "../../Button";

const SuccessUser = () => {
  return (
    <>
        <div className={styles.container}>
          <div className={styles.backgroundContainer}/>
          <div className={styles.cardContainer}>
            <img src={successCheck} alt="success-check" />
            <h2 className={styles.successH2}>¡Bienvenido/a!</h2>
            <h3 className={styles.successH3}>
              Su registro se ha realizado con éxito
            </h3>
            <Link to={"/login"}>
              <Button css={styles.successBtn} text={"Iniciar Sesión"} />
            </Link>
          </div>
        </div>
    </>
  );
};

export default SuccessUser;
