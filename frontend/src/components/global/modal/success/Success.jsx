import successCheck from "../../../../assets/img/success-check.png";
import { Link } from "react-router-dom";
import styles from "./success.module.css";
import Button from "../../Button";

const Success = ({ state, text1, text2, path, textBtn }) => {
  return (
    <>
      {state && (
        <div className={styles.container}>
          <div className={styles.backgroundContainer}/>
          <div className={styles.cardContainer}>
            <img src={successCheck} alt="success-check" />
            <h2 className={styles.successH2}>{text1}</h2>
            <h3 className={styles.successH3}>
              {text2}
            </h3>
            <Link to={path}>
              <Button css={styles.successBtn} text={textBtn} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Success;
