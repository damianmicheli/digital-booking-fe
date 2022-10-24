import { Container, Row, Col } from "react-bootstrap";
import SocialNetworks from "../header/SocialNetworks";
import styles from "./footer.module.css";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.rowFooter}>
          <Col xs={8} md={8} lg={6}>
            <span>©2021 Digital Booking</span>
          </Col>
          <Col xs={4} md={4} lg={6}>
            <SocialNetworks color={"white"}/>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
