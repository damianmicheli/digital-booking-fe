import React, { useState } from "react";
import styles from "./loginRegister.module.css";
import Button from "../global/Button";
import Icon from "../global/Icon";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import useForm from "../../hooks/useForm";
// import Buscador from "../buscador/Buscador";

const initialForm = {
  fName: "",
  surname: "",
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

const message = "Su cuenta se creó exitosamente";

const Register = () => {
  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    validateForm,
    message
  );

  const [showPass, setShowPass] = useState(false);
  const toggleBtnPass = () => {
    setShowPass((prevState) => !prevState);
  };

  return (
    <>
      {/* <Buscador /> */}
      <div className={styles.container}>
        <p className="headings heading1">Crear cuenta</p>

        <form
          id="registrationForm"
          action="/"
          method="POST"
          onSubmit={handleSubmit}
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
              />
              {errors.surname && (
                <p className={styles.pFormError}>{errors.surname}</p>
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
              />
              {errors.confirmPassword && (
                <p className={styles.pFormError}>{errors.confirmPassword}</p>
              )}
            </div>
            <div className={styles.groupForm}>
              {/* <button className="buttonForm" type="submit" /> */}
              <Button css="buttonForm" text="Crear cuenta" />
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
