import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../global/Button";
import Icon from "../global/Icon";
import styles from "./header.module.css";
import logo from "../../assets/img/logo.svg";
import MenuDrawer from "../header/menuDrawer/MenuDrawer";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  const linkToLogin = () => {
    navigate("/login");
  };
  const linkToRegister = () => {
    navigate("/register");
  };

  const [path, setPath] = useState(useLocation().pathname);

  /*   const btnLogin = useRef(null);

  const btnRegister = useRef(null); */

  /*   const handleButtonsHeader = () => {
    if (path === "/login") {
      console.log(btnLogin.current);
     btnLogin.current.classname=
    } else if (path === "/register") {
      
    } else if (path === "/user") {
     
  }; */

  useEffect(() => {
    setPath(path);
  }, [path]);

  return (
    <header className={styles.header}>
      <Container>
        <Row className={styles.rowHeader}>
          <Col xs={6} md={4} lg={4} className={styles.logoSlogan}>
            <a href="/">
              <img src={logo} alt="logo" className={styles.logo} />
            </a>
            <a href="/">
              <span className={styles.slogan}>Sentite como en tu hogar</span>
            </a>
          </Col>
          <Col xs={6} md={8} lg={4}>
            <div className={`${styles.disableMobile} ${styles.divButtons}`}>
              <Button
                id="btnRegister"
                css="button6"
                text="Crear cuenta"
                event={linkToRegister}
              ></Button>
              <Button
                id="btnLogin"
                css="button6"
                text="Iniciar sesión"
                event={linkToLogin}
              ></Button>
            </div>
            <Button
              css={styles.btnWrapper}
              event={handleClick}
              text={<Icon css={styles.barsWrapper} icon={faBars} />}
            ></Button>
            <MenuDrawer open={open} handleClick={handleClick}/>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
