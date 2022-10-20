import { Container, Row, Col } from "react-bootstrap";
import styles from "./footer.module.css";
import Icon from "../Icon";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.rowFooter}>
          <Col xs={8} md={8} lg={6}>
            <span>©2021 Digital Booking</span>
          </Col>
          <Col xs={4} md={4} lg={6}>
            <div
              className={`${styles.disableMobile} ${styles.divSocialNetworks}`}
            >
              <Icon icon={faFacebook} />
              <Icon icon={faLinkedinIn} />
              <Icon icon={faTwitter} />
              <Icon icon={faInstagram} />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
