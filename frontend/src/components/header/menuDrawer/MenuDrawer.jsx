import React from "react";
import { NavLink } from "react-router-dom";
import SocialNetworks from "../SocialNetworks";
import styled from "styled-components";
import styles from "./menuDrawer.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../../global/Button";
import Icon from "../../global/Icon";

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
  return (
    <NavbarWrapper open={open}>
      <div className={styles.divMenu}>
        <Button
          css={styles.btnWrapper}
          event={handleClick}
          text={<Icon css={styles.xWrapper} icon={faXmark} />}
        ></Button>
        <p>MENÚ</p>
      </div>
      <div className={styles.divNavlinks}>
        <NavLink to="/register">Crear cuenta</NavLink>
        <div className={styles.line}></div>
        <NavLink to="/login">Iniciar sesión</NavLink>
      </div>
     <SocialNetworks color={"red"} />
    </NavbarWrapper>
  );
};

export default MenuDrawer;
