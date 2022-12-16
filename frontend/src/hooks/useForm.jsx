import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import URL_BASE from "../components/global/getUrlBase";

const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const { handleAuth } = useContext(AuthContext);
  const [successLogin, setSuccessLogin] = useState(false);
  const [successRegister, setSuccessRegister] = useState(false);
  const [failure, setFailure] = useState(false);
  const [errorsFree, setErrorsFree] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));    
  };

  /***** LOGIN *****/
  const token = localStorage.getItem("token");

  function realizarLogin(settings) {
    fetch(`${URL_BASE}/autenticar`, settings)
      .then((response) => {
        console.log(response);
        if (response.ok !== true) {
          setFailure(true);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.jwt) {
          //guardo en LocalStorage el objeto con el token
          handleAuth(data.jwt);
          setSuccessLogin(true);
        }
      })
      .catch((err) => {
        console.log("Promesa rechazada:");
        console.log(err);
      });
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    const payload = {
      username: form.emailLogin,
      password: form.passwordLogin,
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };

    if (Object.values(errors)[0] === "") {
      console.log(errors);
      realizarLogin(settings);
    } else {
      console.log("No se pudo completar el login");
    }
  };

  /***** REGISTRO *****/

  function realizarRegistro(settings) {
    fetch(`${URL_BASE}/usuario`, settings)
      .then((response) => {
        console.log({response});
        if (!response.ok) {
          setFailure(true);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log({data});
        if (data) {
          setSuccessRegister(true);
        }
        /*    const payloadLogin = {
          username: data.email,
          password: data.password,
        };

        const settingsLogin = {
          method: "POST",
          body: JSON.stringify(payloadLogin),
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        };
        fetch(`${URL_BASE}/autenticar`, settingsLogin)
          .then((response) => {
            console.log(response);
            if (response.ok !== true) {
              setFailure(true);
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.jwt) {
              //guardo en LocalStorage el objeto con el token
              handleAuth(data.jwt);
            }
          })
          .catch((err) => {
            console.log("Promesa rechazada:");
            console.log(err);
          }); */
      })
      .catch((err) => {
        console.log("Promesa rechazada:");
        console.log({err});
      });
  }



  const handleSubmitRegister = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    const payload = {
      nombre: form.fName,
      apellido: form.surname,
      ciudad: form.city,
      password: form.password,
      email: form.email,
      roles: [
        {
          id: 2,
        },
      ],
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    };
   
    setErrorsFree(Object.values(errors).find(error => error !== ""));

    console.log({errorsFree});

    if (errorsFree === undefined) {
      console.log({ errors });
      realizarRegistro(settings);
    } else {
      console.log("No se pudo completar el registro");
    }
  };

  return {
    form,
    errors,
    successLogin,
    successRegister,
    failure,
    handleChange,
    handleBlur,
    handleSubmitLogin,
    handleSubmitRegister,
  };
};

export default useForm;
