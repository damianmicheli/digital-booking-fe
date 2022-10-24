import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
/* import useViewportSizes from "use-viewport-sizes"; */
import styles from "./header.module.css";
import logo from "../../assets/img/logo.svg";
import bars from "../../assets/img/bars.svg";

const Header = () => {

  const navigate = useNavigate();
  const linkToLogin = () => {
    navigate("/login");
  };

  const linkToRegister = () => {
    navigate("/register");
  };

  return (
    <header className={styles.header}>
      <Container>
        <Row className={styles.rowHeader}>
          <Col xs={6} md={4} lg={4} className={styles.logoSlogan}>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
            <a href="/">
              <span className={styles.slogan}>Sentite como en tu hogar</span>
            </a>
          </Col>
          <Col xs={6} md={8} lg={4}>
            <div className={`${styles.disableMobile} ${styles.divButtons}`}>
              <button className="button6" onClick={linkToRegister}>Crear cuenta</button>
              <button className="button6" onClick={linkToLogin}>Iniciar sesión</button>
            </div>
            <img src={bars} alt="menu-bars" className={styles.disableTablet} />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
