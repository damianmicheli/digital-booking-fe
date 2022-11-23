import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import URL_BASE from "../components/global/getUrlBase";

const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const { handleAuth } = useContext(AuthContext);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const navigate = useNavigate();

  function realizarLogin(settings) {
 
    fetch(`${URL_BASE}/autenticar`, settings)
      .then((response) => {
        console.log(response);
        if (response.ok !== true) {
          alert("Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde");
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
      });
  }

  

  const handleSubmit = (e) => {

    e.preventDefault();
    setErrors(validateForm(form));

    const payload = 
      {
        "username": form.emailLogin,
        "password": form.passwordLogin,
      }

    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    };    
 
    if (Object.values(errors)[0] === "") {
      console.log(errors);
      realizarLogin(settings);
      navigate("/");
    }else{
      return "Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde";
    }     
  };

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  };
};

export default useForm;

