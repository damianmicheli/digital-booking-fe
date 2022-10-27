import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useForm = (initialForm, validateForm, message) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  /*   const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null); */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
  
    e.preventDefault();   
    setErrors(validateForm(form));   

    if(Object.values(errors)[0] === "") {
      console.log(errors);
      alert(message);
      navigate("/");
    }
  };

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useForm;
