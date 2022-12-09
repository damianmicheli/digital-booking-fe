import React, { useState, useEffect, useContext } from "react";
import styles from "./administration.module.css";

import HeaderProduct from "../product/content/HeaderProduct";
import Icon from "../global/Icon";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

import URL_BASE from "../global/getUrlBase";

import AttributeContext from "../../context/AttributeContext";

import Success from "../global/modal/Failure";
import Failure from "../global/modal/success/Success";
import Button from "../global/Button";

import FileUpload from "./content/FileUpload";
import Attribute from "./content/Attribute";
import City from "./content/City";
import Category from "./content/Category";

const Administration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [success, setSuccess] = useState(false);

  const [prodName, setProdName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [latitude, setLatitude] = useState("");
  const [length, setLength] = useState("");
  const [usePolicy, setUsePolicy] = useState("");
  const [healthPolicy, setHealthPolicy] = useState("");
  const [cancellationPolicy, setCancellationPolicy] = useState("");

  // *** ATRIBUTOS ***
  const { attributeCounter, handleAttribute, attributeList } =
    useContext(AttributeContext);

  const [failure, setFailure] = useState(false);

  const darAltaProducto = (settings) => {
    fetch(`${URL_BASE}/productos`, settings)
      .then((response) => {
        console.log(response);
        if (response.ok !== true) {
          setFailure(true);
        }
        return response.json();
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
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = "Bearer " + JSON.parse(localStorage.getItem("jwt"));
    const payload = {
      titulo: title,
      nombre: prodName,
      descripcion: description,
      direccion: address,
      politica_de_uso: usePolicy,
      politica_de_salud_y_seguridad: healthPolicy,
      politica_de_cancelacion: cancellationPolicy,
      categoria: category,
      ciudad: city,
      latitud: latitude,
      longitud: length,
      /* "imagenes": "", */
      caracteristicas: attributeList,
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    darAltaProducto(settings);
  };

  // *** IMAGENES ***
  const { selectedFile, isFilePicked, handleSubmission, changeHandler } =
    FileUpload;

  useEffect(() => {
    /*   console.log(selectedFile); */
  }, [selectedFile]);

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
                    value={prodName}
                    onChange={(e) => setProdName(e.target.value)}
                  />
                </div>

                <div className={styles.groupForm}>
                  <label className="text2">Título</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className={styles.groupForm}>
                  <label className="text2">Categoría</label>
                  <Category setCategory={setCategory} />
                </div>
                <div className={styles.groupForm}>
                  <label className="text2">Dirección</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
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
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                  />
                </div>
                <div className={styles.groupForm}>
                  <label className="text2">
                    Longitud (en coordinadas decimales)
                  </label>
                  <input
                    type="text"
                    id="length"
                    name="length"
                    placeholder="Ejemplo: -64.1878106"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                  />
                </div>
                <div className={styles.groupForm}>
                  <label className="text2">Ciudad</label>
                  <City setCity={setCity} />
                </div>
              </div>
              <div className={styles.groupForm}>
                <label className="text2">Descripción</label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <h2 className="heading2 color2 paddingTop">Atributos</h2>
              {/*  <Attribute
                handleAttribute={handleAttribute}
                //addInput={addInput}
              /> */}
              {/*   {attributeInputs} */}

              {attributeCounter.map((number, index) => (
                <Attribute
                  handleAttribute={handleAttribute}
                  key={index}
                  number={number}
                />
              ))}
              <h2 className="heading2 color2 paddingTop">
                Políticas del producto
              </h2>
              <div className={styles.contentPolitics}>
                <div className={styles.groupForm}>
                  <h4 className="heading4">Normas de la casa</h4>
                  <label className="text2">Descripción</label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Ingresar las políticas separadas por una coma (,)"
                    value={usePolicy}
                    onChange={(e) => setUsePolicy(e.target.value)}
                  />
                </div>
                <div className={styles.groupForm}>
                  <h4 className="heading4">Salud y seguridad</h4>
                  <label className="text2">Descripción</label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Ingresar las políticas separadas por una coma (,)"
                    value={healthPolicy}
                    onChange={(e) => setHealthPolicy(e.target.value)}
                  />
                </div>
                <div className={styles.groupForm}>
                  <h4 className="heading4">Políticas de cancelación</h4>
                  <label className="text2">Descripción</label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Ingresar las políticas separadas por una coma (,)"
                    value={cancellationPolicy}
                    onChange={(e) => setCancellationPolicy(e.target.value)}
                  />
                </div>
              </div>
              <h2 className="heading2 color2 paddingTop">Cargar imágenes</h2>
              <div className={styles.contentImages}>
                <div className={styles.groupForm}>
                  <label className="text2">
                    Selecciona un archivo de imagen (.jpg)
                  </label>
                  <input
                    type="file"
                    name="file"
                    className={styles.inputImage}
                    onChange={changeHandler}
                  />
                  {isFilePicked && (
                    <div>
                      <p>Nombre de archivo: {selectedFile.name}</p>
                      <p>Tipo de archivo: {selectedFile.type}</p>
                      <p>Tamaño en bytes: {selectedFile.size}</p>
                      <p>
                        Fecha modificación:{" "}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>
                <Icon
                  css={styles.addIcon}
                  icon={faSquarePlus}
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
{
  /*  const addAttribute = (e) => {
    setAttributes(attributes.concat(<Attribute key={attributes.length} handleAttribute={handleAttribute} />));
  };
 */
  /* attributeInputs.push(<Attribute key={i} handleAttribute={handleAttribute} />) */
  /*   const toggleAddDeleteAttribute = () => {
    if (addAttribute) {
      setAttributesCounter(attributeCounter + 1);
      console.log({attributeCounter});
      console.log("Se agregó un input de atributo");
    }else if(!addAttribute && attributeCounter > 1 ){
      setAttributesCounter(attributeCounter - 1);
      console.log({attributeCounter});
      console.log("Se eliminó un input de atributo");
    }
  }; */
  /*   <select
    name="city"
    onChange={(e) => {
      setOptionCity({
        selectedOption: e.target.value,
      });
    }}
    required
  >
    <option selected="selected">Elegí una ciudad</option>
    {ciudades &&
      ciudades.map((ciudad) => (
        <option key={ciudad.id} value={ciudad.id}>
          {ciudad.ciudad}, {ciudad.pais}
        </option>
      ))}
  </select>; */
  /* <select
  name="category"
  onChange={(e) => {
    setOptionCategory({
      selectedOption: e.target.value,
    });
  }}
  required
>
  <option selected="selected">Elegí una categoría</option>
  {categorias &&
    categorias.map((categoria) => (
      <option key={categoria.id} value={categoria.id}>
        {categoria.titulo}
      </option>
    ))}
</select>; */
  /*  const [optionCategory, setOptionCategory] = useState({
    selectedOption: null,
  });
  const [optionCity, setOptionCity] = useState({
    selectedOption: null,
  });
 */
}
