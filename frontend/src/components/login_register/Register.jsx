import React from "react";
import { Container } from "react-bootstrap";
import styles from "./loginRegister.module.css";
import Button from "../global/Button";
import Icon from "../global/Icon";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useForm from "../../hooks/useForm";
import Buscador from "../buscador/Buscador";

const initialForm = {
  fName: "",
  surname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validateForm = (form) => {
  let errors = {};
  /*  let regexName = "/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/"; */
  let regexEmail =
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";
  /* /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$ */

  //Validación de nombre
  if (!form.fName.trim()) {
    errors.fName = "Debe ingresar su nombre";
  } /* else if (regexName.test(form.fName.trim())) {
    errors.fName = "El campo nombre sólo admite letras";
  } */ else {
    errors.fName = "";
  }

  //Validación de apellido
  if (!form.surname.trim()) {
    errors.surname = "Debe ingresar su apellido";
  } /* else if (regexName.test(form.surname.trim())) {
    errors.surname = "El campo apellido sólo admite letras";
  } */ else {
    errors.surname = "";
  }

  //Validación de email
  if (!form.email.trim()) {
    errors.email = "Se requiere ingresar un correo electrónico";
  } else if (!form.email.match(regexEmail)) {
    errors.email = "Por favor ingresar un correo electrónico válido";
  } else {
    errors.email = "";
  }

  //Validación de contraseña
  const password = form.password;
  if (!password) {
    errors.password = "Se requiere ingresar una contraseña";
  } else if (password.length < 6) {
    errors.password = "La contraseña debe tener más de 6 caracteres";
  } else if (password.length >= 20) {
    errors.password = "La contraseña no debe exceder los 20 caracteres";
  } else {
    errors.password = "";
  }

  //Validación de confirmación de contraseña
  if (!form.confirmPassword) {
    errors.confirmPassword = "Se requiere confirmar la contraseña";
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

  return (
    <>
      <Buscador />
      <div className="bgGray flex">
        <p className="headings heading1">Crear cuenta</p>
        <Container>
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
                <input
                  type="password"
                  name="password"
                  placeholder={<Icon icon={faEyeSlash} />}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.password}
                />
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
        </Container>
      </div>
    </>
  );
};

export default Register;
