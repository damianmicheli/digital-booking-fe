import useMediaQuery from "../../hooks/useMediaQuery";
import SocialNetworks from "../header/SocialNetworks";
import styles from "./footer.module.css";

const Footer = () => {
 const isMobile = useMediaQuery(768);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.rowFooter}>
          <span>©2022 Digital Booking</span>
          {!isMobile && <SocialNetworks color={"white"} />}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
