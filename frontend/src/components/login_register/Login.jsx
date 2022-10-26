import React from "react";
import { Container } from "react-bootstrap";
import styles from "./loginRegister.module.css";
import Button from "../global/Button";
import Icon from "../global/Icon";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useForm from "../../hooks/useForm";

const initialForm = {
  emailLogin: "",
  passwordLogin: "",
};

const validateForm = (form) => {
  let errors = {};

  const user1 = {
    id: 1,
    fName: "Gloria",
    surname: "Lunar",
    email: "glorialunar@gmail.com",
    password: "theghost",
  };

  const password = form.passwordLogin;

  //Validación de email y contraseña
  if (!form.emailLogin.trim() || !password) {
    errors.emailLogin = "Se requiere ingresar un correo electrónico";
    errors.passwordLogin = "Se requiere ingresar una contraseña";
  } else if (!form.emailLogin.match(user1.email) || !password.match(user1.password) ) {
    errors.emailLogin = "Por favor vuelva a intentarlo, sus credenciales son inválidas";
  } else {
    errors.emailLogin = "";
    errors.passwordLogin = "";
  }  

  return errors;
};

const Login = () => {
  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    validateForm
  );

  return (
    <div className="bgGray flex">
      <p className="headings heading1">Iniciar sesión</p>
      <Container>
        <form 
        id="loginForm"
        action="/"
        method="POST"
        onSubmit={handleSubmit}
        >
          <div className={styles.divInputs}>
            <div className={styles.groupForm}>
              <label className="text2">Correo electrónico</label>
              <input
                type="mail"
                id="emailLogin"
                name="emailLogin"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.emailLogin}
              />
              {errors.emailLogin && <p className={styles.pFormError}>{errors.emailLogin}</p>}
            </div>
            <div className={styles.groupForm}>
              <label className="text2">Contraseña</label>
              <input
                type="password"
                id="passwordLogin"
                name="passwordLogin"
                placeholder={
                  <Icon
                    icon={faEyeSlash}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.passwordLogin}
                  />
                }
              />
              {errors.passwordLogin && <p className={styles.pFormError}>{errors.passwordLogin}</p>}
            </div>
            
            <div className={styles.groupForm}>
              <Button css="buttonForm" text="Ingresar" type="submit" />
              <span className="text2 spanForm">
                ¿Aún tienes una cuenta? <a href="/register">Registrate</a>
              </span>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;
