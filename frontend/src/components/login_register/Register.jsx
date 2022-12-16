import React, { useState } from "react";
import styles from "./loginRegister.module.css";
import Button from "../global/Button";
import Icon from "../global/Icon";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import useForm from "../../hooks/useForm";
import Success from "../global/modal/success/Success";
import Failure from "../global/modal/Failure";

const initialForm = {
  fName: "",
  surname: "",
  city: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validateForm = (form) => {
  let errors = {};
  let isRequired = "Este campo es obligatorio";

  let regexEmail =
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";

  //Validación de nombre
  if (!form.fName.trim()) {
    errors.fName = isRequired;
  } else {
    errors.fName = "";
  }

  //Validación de apellido
  if (!form.surname.trim()) {
    errors.surname = isRequired;
  } else {
    errors.surname = "";
  }

  //Validación de ciudad
  if (!form.city.trim()) {
    errors.city = isRequired;
  } else {
    errors.city = "";
  }

  //Validación de email
  if (!form.email.trim()) {
    errors.email = isRequired;
  } else if (!form.email.match(regexEmail)) {
    errors.email = "Por favor ingresar un correo electrónico válido";
  } else {
    errors.email = "";
  }

  //Validación de contraseña
  const password = form.password;
  if (!password) {
    errors.password = isRequired;
  } else if (password.length < 6) {
    errors.password = "La contraseña debe tener más de 6 caracteres";
  } else if (password.length >= 20) {
    errors.password = "La contraseña no debe exceder los 20 caracteres";
  } else {
    errors.password = "";
  }

  //Validación de confirmación de contraseña
  if (!form.confirmPassword) {
    errors.confirmPassword = isRequired;
  } else if (form.confirmPassword !== form.password) {
    errors.confirmPassword = "Las contraseñas ingresadas no coinciden";
  } else {
    errors.confirmPassword = "";
  }

  return errors;
};

const Register = () => {
  const {
    form,
    errors,
    successRegister,
    failure,
    handleChange,
    handleBlur,
    handleSubmitRegister,
  } = useForm(initialForm, validateForm);

  const [showPass, setShowPass] = useState(false);
  const toggleBtnPass = () => {
    setShowPass((prevState) => !prevState);
  };

  const errorFree =
    Object.values(errors).find((error) => error !== "") === undefined
      ? true
      : false;

  return (
    <>
      <Failure
        state={failure}
        text1={"Lamentablemente no ha podido registrarse."}
        text2={"Por favor intente más tarde"}
        path={"/"}
        textBtn={"ok"}
      />
      <Success
        state={successRegister}
        text1={`Bienvenid@, ${form.fName}!`}
        text2={"Has creado tu cuenta con éxito 😊"}
        path={"/login"}
        textBtn={"ok"}
      />
      <div className={styles.container}>
        <p className="headings heading1">Crear cuenta</p>

        <form
          id="registrationForm"
          //action="/"
          method="POST"
          onSubmit={errorFree && handleSubmitRegister}
        >
          <div className={styles.divInputs}>
            <div className={`${styles.groupForm} ${styles.groupWrap}`}>
              <label className="text2">Nombre</label>
              <input
                type="text"
                name="fName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.fName}
                className={errors.fName && styles.errorInput}
              />
              {errors.fName && (
                <p className={styles.pFormError}>{errors.fName}</p>
              )}
            </div>
            <div className={`${styles.groupForm} ${styles.groupWrap}`}>
              <label className="text2">Apellido</label>
              <input
                type="text"
                name="surname"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.surname}
                className={errors.surname && styles.errorInput}
              />
              {errors.surname && (
                <p className={styles.pFormError}>{errors.surname}</p>
              )}
            </div>

            <div className={styles.groupForm}>
              <label className="text2">Ciudad</label>
              <input
                type="text"
                name="city"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.city}
                className={errors.city && styles.errorInput}
              />
              {errors.city && (
                <p className={styles.pFormError}>{errors.city}</p>
              )}
            </div>

            <div className={styles.groupForm}>
              <label className="text2">Correo electrónico</label>
              <input
                type="email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.email}
                className={errors.email && styles.errorInput}
              />
              {errors.email && (
                <p className={styles.pFormError}>{errors.email}</p>
              )}
            </div>

            <div className={styles.groupForm}>
              <label className="text2">Contraseña</label>
              <div className={styles.iconInput}>
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.password}
                  className={errors.password && styles.errorInput}
                />
                <span onClick={toggleBtnPass}>
                  {showPass ? (
                    <Icon icon={faEye} css={styles.iconEye} />
                  ) : (
                    <Icon icon={faEyeSlash} css={styles.iconEye} />
                  )}
                </span>
              </div>
              {errors.password && (
                <p className={styles.pFormError}>{errors.password}</p>
              )}
            </div>
            <div className={styles.groupForm}>
              <label className="text2">Confirmar contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.confirmPassword}
                className={errors.confirmPassword && styles.errorInput}
              />
              {errors.confirmPassword && (
                <p className={styles.pFormError}>{errors.confirmPassword}</p>
              )}
            </div>
            <div className={styles.groupForm}>
              {errorFree ? (
                <Button css="buttonForm" text="Crear cuenta" />
              ) : (
                <Button
                  css="buttonFormDisabled"
                  text="Crear cuenta"
                  isDisabled={!errorFree}
                />
              )}

              <span className="text2 spanForm">
                ¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
