import failureIcon from "../../../assets/img/failure-icon.png";
import { Link } from "react-router-dom";
import styles from "./success/success.module.css";
import Button from "../Button";

const Failure = ({ state, text1, text2, path, textBtn }) => {


  return (
    <>
      {state && (
        <div className={styles.container}>
          <div className={styles.backgroundContainer} />
          <div className={styles.cardContainer}>
            <img src={failureIcon} alt="failure_icon" />
            <h3 className={styles.failureH3}>{text1}</h3>
            <h3 className={styles.successH3}>{text2}</h3>
            <Link to={path}>
              <Button css={styles.successBtn} text={textBtn}/>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Failure;
