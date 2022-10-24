import React from "react";
import { Container } from "react-bootstrap";
import styles from "./loginRegister.module.css";
import Button from "../Button";
import Icon from "../Icon";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const Register = () => {
  const sendEmail = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bgGray flex">
      <p className="headings heading1">Crear cuenta</p>
      <Container>
        <form onSubmit={sendEmail}>
          <div className={styles.divInputs}>
            <div className={`${styles.groupForm} ${styles.groupWrap}`}>
              <label className="text2">Nombre</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={`${styles.groupForm} ${styles.groupWrap}`}>
              <label className="text2">Apellido</label>
              <input type="text" id="surname" name="surname" required />
            </div>
            <div className={styles.groupForm}>
              <label className="text2">Correo electrónico</label>
              <input type="mail" id="email" name="email" required />
            </div>
            <div className={styles.groupForm}>
              <label className="text2">Contraseña</label>
              <input type="password" id="password" name="password" placeholder={<Icon icon={faEyeSlash}/>} required />
            </div>
            <div className={styles.groupForm}>
              <label className="text2">Confirmar contraseña</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className={styles.groupForm}>
              <Button css="buttonForm" text="Crear cuenta" />
              <span  className="text2 spanForm">
                ¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a>
              </span>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Register;
