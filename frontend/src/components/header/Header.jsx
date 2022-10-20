import React from "react";
import { Container, Row, Col } from "react-bootstrap";
/* import useViewportSizes from "use-viewport-sizes"; */
import styles from "./header.module.css";
import logo from "../../assets/img/logo.svg";
import bars from "../../assets/img/bars.svg";
git 
const Header = () => {
 
  return (
    <header className={styles.header}>
      <Container>
        <Row className={styles.rowHeader}>
          <Col xs={6} md={4} lg={4}>
            <Row className={styles.logoSlogan}>
              <img src={logo} alt="logo" />
              <span className={styles.slogan}>Sentite como en tu hogar</span>
            </Row>
          </Col>
          <Col xs={6} md={8} lg={4}>
            <div className={`${styles.disableMobile} ${styles.divButtons}`}>
              <button className="button6">Crear cuenta</button>
              <button className="button6">Iniciar sesión</button>
            </div>
            <img src={bars} alt="menu-bars" className={styles.disableTablet} />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
