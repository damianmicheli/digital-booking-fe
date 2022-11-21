import successCheck from "../../../../assets/img/success-check.png";
import { Link, useNavigate } from 'react-router-dom';
import styles from "./success.module.css";
import Button from "../../Button";

const Success = () => {
  const navigate = useNavigate();
  return (
    <>
      {
        <div className={styles.container}>
          <div className={styles.backgroundContainer} onClick={()=>{setTimeout(() => navigate('/'), 500)}}/>
          <div className={styles.cardContainer}>
            <img src={successCheck} alt="success-check" />
            <h2 className={styles.successH2}>¡Muchas Gracias!</h2>
            <h3 className={styles.successH3}>Su reserva se ha realizado con éxito</h3>
            <Link to={"/"}>
                <Button css={styles.successBtn} text={"ok"} />
            </Link>
          </div>
        </div>
      }
    </>
  );
};


export default Success;

