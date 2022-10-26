import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useForm = (initialForm, validateForm) => {
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
    console.log(errors);

    if (Object.values(errors) === "") {
      alert("Tu cuenta se creó exitosamente");
      navigate("/");
    } else {
      return;
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
