import React, { useState, useEffect, useContext } from "react";
import styles from "./administration.module.css";

import HeaderProduct from "../product/content/HeaderProduct";
import Icon from "../global/Icon";
import { faSquareCheck, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

import URL_BASE from "../global/getUrlBase";

import AttributeContext from "../../context/AttributeContext";

import Failure from "../global/modal/Failure";
import Success from "../global/modal/success/Success";
import Button from "../global/Button";

import useFileUpload from "../../hooks/useFileUpload";
import Attribute from "./content/Attribute";
import City from "./content/City";
import Category from "./content/Category";

const Administration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const [city, setCity] = useState("");
  const [cityIsEmpty, setCityIsEmpty] = useState(null);
  const [category, setCategory] = useState(null);
  const [categoryIsEmpty, setCategoryIsEmpty] = useState(null);

  // *** ATRIBUTOS ***
  const { attributeCounter, handleAttribute, attributesLoaded } =
    useContext(AttributeContext);
  const [attributesLoadedIsEmpty, setAttributesLoadedIsEmpty] = useState(null);

  // *** IMAGENES ***
  const [iconUpload, setIconUpload] = useState(faSquarePlus);
  const images = [];
  const {
    files,
    fileUploadProgress,
    fileUploadResponse,
    urlImagesAws,
    errorImages,
    setErrorImages,
    setFileUploadProgress,
    setFileUploadResponse,
    handleSubmission,
    changeHandler,
    blurHandler,
  } = useFileUpload();

  // *** Errores ***

  const [errors, setErrors] = useState([]);
  const [errorsFree, setErrorsFree] = useState();

  // *** VALIDACIONES ***

  const [form, setForm] = useState({
    prodName: "",
    title: "",
    address: "",
    latitude: "",
    lengthMap: "",
    city: "",
    category: "",
    description: "",
    usePolicy: "",
    healthPolicy: "",
    cancellationPolicy: "",
  });

  let isRequired = "Este campo es obligatorio";

  const validateForm = (form) => {
    let errorsForm = {};

    //Validación de nombre del producto
    if (!form.prodName.trim()) {
      errorsForm.prodName = isRequired;
    } else {
      errorsForm.prodName = "";
    }

    //Validación de titulo
    if (!form.title.trim()) {
      errorsForm.title = isRequired;
    } else {
      errorsForm.title = "";
    }

    //Validación de dirección
    if (!form.address.trim()) {
      errorsForm.address = isRequired;
    } else {
      errorsForm.address = "";
    }

    //Validación de latitud
    if (!form.latitude.trim()) {
      errorsForm.latitude = isRequired;
    } else {
      errorsForm.latitude = "";
    }

    //Validación de longitud
    if (!form.lengthMap.trim()) {
      errorsForm.lengthMap = isRequired;
    } else {
      errorsForm.lengthMap = "";
    }

    //Validación de descripción
    if (!form.description.trim()) {
      errorsForm.description = isRequired;
    } else {
      errorsForm.description = "";
    }

    //Validación de politicas de uso
    if (!form.usePolicy.trim()) {
      errorsForm.usePolicy = isRequired;
    } else {
      errorsForm.usePolicy = "";
    }

    //Validación de politicas de salud
    if (!form.healthPolicy.trim()) {
      errorsForm.healthPolicy = isRequired;
    } else {
      errorsForm.healthPolicy = "";
    }

    //Validación de politicas de cancelación
    if (!form.cancellationPolicy.trim()) {
      errorsForm.cancellationPolicy = isRequired;
    } else {
      errorsForm.cancellationPolicy = "";
    }

    return errorsForm;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const darAltaProducto = (settings) => {
    fetch(`${URL_BASE}/productos`, settings)
      .then((response) => {
        console.log({ response });
        if (response.ok === false) {
          setFailure(true);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log({ data });
        if (data) {
          setSuccess(true);
          console.log("Se dió de alta correctamente el producto");
        }
      })
      .catch((err) => {
        console.log("Promesa rechazada:");
        console.log({ err });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   // console.log({fileUploadResponse});
    setErrorImages(images.length === 0 && fileUploadResponse === null)
    setCategoryIsEmpty(categoryIsEmpty === null);
    setCityIsEmpty(cityIsEmpty === null);
    setAttributesLoadedIsEmpty(attributesLoadedIsEmpty === null);

    for (let i = 0; i < files.length; i++) {
      images.push({ titulo: files[i].name, url: urlImagesAws[i] });
    }

    setErrors(validateForm(form));

    console.log({ images });

    const token = "Bearer " + JSON.parse(localStorage.getItem("jwt"));
    const payload = {
      titulo: form.title,
      nombre: form.prodName,
      descripcion: form.description,
      direccion: form.address,
      politica_de_uso: form.usePolicy,
      politica_de_salud_y_seguridad: form.healthPolicy,
      politica_de_cancelacion: form.cancellationPolicy,
      categoria: category,
      ciudad: city,
      latitud: form.latitude,
      longitud: form.lengthMap,
      imagenes: images,
      caracteristicas: attributesLoaded,
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };

    setErrorsFree(Object.values(errors).find((error) => error !== ""));

    console.log({ images });

    if (
      errorsFree === undefined &&
      cityIsEmpty === false &&
      categoryIsEmpty === false &&
      attributesLoadedIsEmpty === false &&
      errorImages === false
    ) {
      console.log("entra porque no hay errores");
      console.log(errors);
      darAltaProducto(settings);
    } else {
      console.log({
        errors,
        cityIsEmpty,
        categoryIsEmpty,
        attributesLoadedIsEmpty,
        images,
      });
      console.log("No se pudo completar el alta de producto");
    }
  };

  useEffect(() => {
    if (files.length !== 0 && urlImagesAws.length === files.length) {
      setFileUploadProgress(false);
      setFileUploadResponse(true);
      setIconUpload(faSquareCheck);
      setErrorImages(false);
    }
  }, [urlImagesAws]);

  console.log({ fileUploadResponse });

  return (
    <>
      <Failure
        state={failure}
        text1={"Lamentablemente el producto no ha podido crearse."}
        text2={"Por favor intente más tarde"}
        path={"/"}
        textBtn={"ok"}
      />
      <Success
        state={success}
        text2={"Tu propiedad se ha creado con éxito."}
        path={"/"}
        textBtn={"volver"}
      />

      <div className={styles.title}>
        <HeaderProduct title={"Administración"} path={"/"} />
      </div>
      <div className={styles.administration}>
        <div className="container">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            id="productForm"
          >
            <div>
              <h2 className="heading2 color2 paddingTop">Crear propiedad</h2>
            </div>
            <div className={styles.content}>
              <div className={styles.contentFlex}>
                <div className={styles.groupForm}>
                  <label className="text2">Nombre de la propiedad</label>
                  <input
                    type="text"
                    id="prodName"
                    name="prodName"
                    value={form.prodName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.prodName && styles.errorInput}
                  />
                  {errors.prodName && (
                    <p className={styles.pFormError}>{errors.prodName}</p>
                  )}
                </div>

                <div className={styles.groupForm}>
                  <label className="text2">Título</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.title && (
                    <p className={styles.pFormError}>{errors.title}</p>
                  )}
                </div>

                <div className={styles.groupForm}>
                  <label className="text2">Categoría</label>
                  <Category
                    setCategory={setCategory}
                    setCategoryIsEmpty={setCategoryIsEmpty}
                  />
                  {categoryIsEmpty && (
                    <p className={styles.pFormError}>{isRequired}</p>
                  )}
                </div>
                <div className={styles.groupForm}>
                  <label className="text2">Dirección</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.address && (
                    <p className={styles.pFormError}>{errors.address}</p>
                  )}
                </div>
                <div className={styles.groupForm}>
                  <label className="text2">
                    Latitud (en coordinadas decimales)
                  </label>
                  <input
                    type="text"
                    id="latitude"
                    name="latitude"
                    placeholder="Ejemplo: -31.4218908"
                    value={form.latitude}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.latitude && (
                    <p className={styles.pFormError}>{errors.latitude}</p>
                  )}
                </div>
                <div className={styles.groupForm}>
                  <label className="text2">
                    Longitud (en coordinadas decimales)
                  </label>
                  <input
                    type="text"
                    id="lengthMap"
                    name="lengthMap"
                    placeholder="Ejemplo: -64.1878106"
                    value={form.lengthMap}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lengthMap && (
                    <p className={styles.pFormError}>{errors.lengthMap}</p>
                  )}
                </div>
                <div className={styles.groupForm}>
                  <label className="text2">Ciudad</label>
                  <City setCity={setCity} setCityIsEmpty={setCityIsEmpty} />
                  {cityIsEmpty && (
                    <p className={styles.pFormError}>{isRequired}</p>
                  )}
                </div>
              </div>
              <div className={styles.groupForm}>
                <label className="text2">Descripción</label>
                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.description && (
                  <p className={styles.pFormError}>{errors.description}</p>
                )}
              </div>
              <h2 className="heading2 color2 paddingTop">Atributos</h2>
              <div className={styles.contentAttributes_pError}>
                {attributeCounter.map((number, index) => (
                  <Attribute
                    handleAttribute={handleAttribute}
                    key={index}
                    number={number}
                    setAttributesLoadedIsEmpty={setAttributesLoadedIsEmpty}
                  />
                ))}
                {attributesLoadedIsEmpty && (
                  <p className={styles.pFormError}>{isRequired}</p>
                )}
              </div>
              <h2 className="heading2 color2 paddingTop">
                Políticas del producto
              </h2>
              <div className={styles.contentPolitics}>
                <div className={styles.groupForm}>
                  <h4 className="heading4">Normas de la casa</h4>
                  <label className="text2">Descripción</label>
                  <textarea
                    id="usePolicy"
                    name="usePolicy"
                    placeholder="Ingresar las políticas separadas por una coma (,)"
                    value={form.usePolicy}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.usePolicy && (
                    <p className={styles.pFormError}>{errors.usePolicy}</p>
                  )}
                </div>
                <div className={styles.groupForm}>
                  <h4 className="heading4">Salud y seguridad</h4>
                  <label className="text2">Descripción</label>
                  <textarea
                    id="healthPolicy"
                    name="healthPolicy"
                    placeholder="Ingresar las políticas separadas por una coma (,)"
                    value={form.healthPolicy}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.healthPolicy && (
                    <p className={styles.pFormError}>{errors.healthPolicy}</p>
                  )}
                </div>
                <div className={styles.groupForm}>
                  <h4 className="heading4">Políticas de cancelación</h4>
                  <label className="text2">Descripción</label>
                  <textarea
                    id="cancellationPolicy"
                    name="cancellationPolicy"
                    placeholder="Ingresar las políticas separadas por una coma (,)"
                    value={form.cancellationPolicy}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.cancellationPolicy && (
                    <p className={styles.pFormError}>
                      {errors.cancellationPolicy}
                    </p>
                  )}
                </div>
              </div>
              <h2 className="heading2 color2 paddingTop">Cargar imágenes</h2>
              <div className={styles.contentImages}>
                <div className={styles.groupForm}>
                  <label className="text2">
                    Selecciona uno o varios archivos de imagen (.jpg)
                  </label>
                  <input
                    type="file"
                    name="file"
                    multiple
                    onBlur={blurHandler}
                    className={styles.inputImage}
                    onChange={changeHandler}
                  />
                  {fileUploadProgress && (
                    <p className={styles.filePicked}>Cargando imágenes...</p>
                  )}
                  {fileUploadResponse && fileUploadResponse !== null && (
                    <p className={styles.filePicked}>
                      Carga de imágenes finalizada
                    </p>
                  )}
                  {errorImages && (
                    <p className={styles.pFormError}>{isRequired}</p>
                  )}
                </div>
                <Icon
                  css={styles.addIcon}
                  icon={iconUpload}
                  event={handleSubmission}
                />
              </div>
              <Button text="Crear" css="button4 centered" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Administration;
