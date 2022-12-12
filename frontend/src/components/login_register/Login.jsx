import React, { useState, useEffect } from "react";
import styles from "./loginRegister.module.css";
import Button from "../global/Button";
import Icon from "../global/Icon";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import useForm from "../../hooks/useForm";
import AlertUser from "../global/modal/alert/AlertUser";
import Success from "../global/modal/success/Success";
import Failure from "../global/modal/Failure";

const initialForm = {
  emailLogin: "",
  passwordLogin: "",
};

const validateForm = (form) => {
  let errors = {};
  let isRequired = "Este campo es obligatorio";

  const password = form.passwordLogin;

  //Validación de email
  if (!form.emailLogin.trim()) {
    errors.emailLogin = isRequired;
  } else {
    errors.emailLogin = "";
  }

  //Validación de contraseña
  if (!password) {
    errors.passwordLogin = isRequired;
  } else {
    errors.passwordLogin = "";
  }
  return errors;
};

const Login = () => {
  const {
    form,
    errors,
    successLogin,
    failure,
    handleChange,
    handleBlur,
    handleSubmitLogin,
  } = useForm(initialForm, validateForm);

  const [showPass, setShowPass] = useState(false);
  const toggleBtnPass = () => {
    setShowPass((prevState) => !prevState);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const errorFree =
    Object.values(errors).find((error) => error !== "") === undefined
      ? true
      : false;

  return (
    <>
      <Failure
        state={failure}
        text1={"Lamentablemente no ha podido iniciar sesión."}
        text2={"Por favor intente más tarde"}
        path={"/"}
        textBtn={"ok"}
      />
      <Success
        state={successLogin}
        text1={`Hola!`}
        text2={"Un placer volvernos a encontrar 😊"}
        path={"/"}
        textBtn={"ok"}
      />
      <div className={styles.container}>
        <AlertUser
          text={"Para realizar una reserva necesitas estar logueado"}
        />
        <div className={styles.content}>
          <p className="headings heading1">Iniciar sesión</p>
          <form
            id="loginForm"
            action="/"
            method="POST"
            onSubmit={handleSubmitLogin}
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
                  className={errors.emailLogin && styles.errorInput}
                />
                {errors.emailLogin && (
                  <p className={styles.pFormError}>{errors.emailLogin}</p>
                )}
              </div>
              <div className={styles.groupForm}>
                <label className="text2">Contraseña</label>
                <div className={styles.iconInput}>
                  <input
                    type={showPass ? "text" : "password"}
                    id="passwordLogin"
                    name="passwordLogin"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.passwordLogin}
                    className={errors.passwordLogin && styles.errorInput}
                  />
                  <span onClick={toggleBtnPass}>
                    {showPass ? (
                      <Icon icon={faEye} css={styles.iconEye} />
                    ) : (
                      <Icon icon={faEyeSlash} css={styles.iconEye} />
                    )}
                  </span>
                </div>
                {errors.passwordLogin && (
                  <p className={styles.pFormError}>{errors.passwordLogin}</p>
                )}
              </div>

              <div className={styles.groupForm}>
                {errorFree ? (
                  <Button css="buttonForm" text="Ingresar" />
                ) : (
                  <Button
                    css="buttonFormDisabled"
                    text="Ingresar"
                    isDisabled={!errorFree}
                  />
                )}

                <span className="text2 spanForm">
                  ¿Aún tienes una cuenta? <a href="/registro">Registrate</a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
