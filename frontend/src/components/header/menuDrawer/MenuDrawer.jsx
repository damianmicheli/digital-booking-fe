import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import SocialNetworks from "../SocialNetworks";
import styled from "styled-components";
import styles from "./menuDrawer.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../../global/Button";
import Icon from "../../global/Icon";
import User from "../../user/User";
import AuthContext from "../../../context/AuthContext";

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: right;
  background-color: white;
  color: var(--color-2);
  box-shadow: 0px 4px 10px lightgrey;
  font-size: 12px;
  font-weight: 700;
  line-height: 300%;
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 70%;
  max-width: 300px;
  min-width: 150px;
  height: 100vh;
  transition: right 0.3s linear;
  z-index: 99993;

  @media only screen and (min-width: 624px) {
    display: none;
  }
`;

const MenuDrawer = ({ open, handleClick }) => {
  const { auth, handleAuth } = useContext(AuthContext);

  return (
    <NavbarWrapper open={open}>
      <div className={styles.divMenu}>
        <Button
          css={styles.btnWrapper}
          event={handleClick}
          text={<Icon css={styles.xWrapper} icon={faXmark} />}
        ></Button>
        <div className={styles.menuUser}>{!auth ? <p>MENÚ</p> : <User />}</div>
      </div>
      <div className={styles.divNavNetwork}>
        {!auth ? (
          <div className={styles.divNavlinks}>
            <NavLink to="/registro">Crear cuenta</NavLink>
            <div className={styles.lineTop}></div>
            <NavLink to="/login">Iniciar sesión</NavLink>
          </div>
        ) : (
          <div className={styles.divCloseSession}>
          ¿Deseas <NavLink to="/" onClick={handleAuth}>
            cerrar sesión
            </NavLink>?
          </div>
        )}
        <div className={styles.footerMenu}>
          <div className={styles.lineBottom}></div>
          <SocialNetworks color={"var(--color-3)"} />
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default MenuDrawer;
