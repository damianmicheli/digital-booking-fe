import React, { useEffect, useState, useContext, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../global/Button";
import Icon from "../global/Icon";
import styles from "./header.module.css";
import logo from "../../assets/img/logo.svg";
import MenuDrawer from "../header/menuDrawer/MenuDrawer";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/AuthContext";
import User from "../user/User";

const Header = () => {
  const { auth } = useContext(AuthContext);
  const refMenu = useRef(null);

  /* --- menú mobile --- */
  const [open, setOpen] = useState(false);

  const hideOnClickOutside = (e) => {
    if (refMenu.current && !refMenu.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleClick = () => {
    setOpen(!open);
  };

  /* --- redireccionamientos --- */
  const navigate = useNavigate();

  const linkToLogin = () => {
    navigate("/login");
  };
  const linkToRegister = () => {
    navigate("/register");
  };

  const [path, setPath] = useState(useLocation().pathname);

  useEffect(() => {
    setPath(path);
  }, [path]);

  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.rowHeader}>
          <div className={styles.logoSlogan}>
            <a href="/">
              <img src={logo} alt="logo" className={styles.logo} />
            </a>
            <a href="/">
              <span className={styles.slogan}>Sentite como en tu hogar</span>
            </a>
          </div>
          <div>
            {!auth ? (
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
            ) : (
              <div className={styles.disableMobile}>
                <User />
              </div>
            )}

            <Button
              css={styles.btnWrapper}
              event={handleClick}
              text={<Icon css={styles.barsWrapper} icon={faBars} />}
            ></Button>
            <div ref={refMenu}>
              <MenuDrawer open={open} handleClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

/*   const btnLogin = useRef(null);

  const btnRegister = useRef(null); */

/*   const handleButtonsHeader = () => {
    if (path === "/login") {
      console.log(btnLogin.current);
     btnLogin.current.classname=
    } else if (path === "/register") {
      
    } else if (path === "/user") {
     
  }; 
    
*/
