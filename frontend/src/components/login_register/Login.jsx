import React from 'react'
import { Container } from "react-bootstrap";
import styles from "./loginRegister.module.css";
import Button from "../Button";
import Icon from "../Icon";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <div className="bgGray flex">
      <p className="headings heading1">Iniciar sesión</p>
      <Container>
        <form onSubmit={""}>
          <div className={styles.divInputs}>
            <div className={styles.groupForm}>
              <label className="text2">Correo electrónico</label>
              <input type="mail" id="email" name="email" required />
            </div>
            <div className={styles.groupForm}>
              <label className="text2">Contraseña</label>
              <input type="password" id="password" name="password" placeholder={<Icon icon={faEyeSlash}/>} required />
            </div>
            <div className={styles.groupForm}>
              <Button css="buttonForm" text="Ingresar" />
              <span  className="text2 spanForm">
                ¿Aún tienes una cuenta? <a href="/">Registrate</a>
              </span>
            </div>
          </div>
        </form>
      </Container>
    </div>
  )
}

export default Login;