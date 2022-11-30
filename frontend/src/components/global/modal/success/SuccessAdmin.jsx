import successCheck from "../../../../assets/img/success-check.png";
import { Link } from "react-router-dom";
import styles from "./success.module.css";
import Button from "../../Button";

const Success = ({ state }) => {
  return (
    <>
      {state && (
        <div className={styles.container}>
          <div className={styles.backgroundContainer}/>
          <div className={styles.cardContainer}>
            <img src={successCheck} alt="success-check" />
            <h3 className={styles.successAdminH4}>
              Tu propiedad se ha creado con éxito.
            </h3>
            <Link to={"/"}>
              <Button css={styles.successBtn} text={"volver"} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Success;
