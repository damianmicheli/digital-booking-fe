import React, { useState, useEffect, useContext } from "react";
import styles from "./administration.module.css";

import { useParams } from "react-router";

import HeaderProduct from "../product/content/HeaderProduct";
import Icon from "../global/Icon";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

import useFetch from "../../hooks/useFetch";
import AuthContext from "../../context/AuthContext";
import URL_BASE from "../global/getUrlBase";

import Success from "../global/modal/success/Success";
import Button from "../global/Button";

const Administration = () => {
  const { userLog } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [categorias] = useFetch(`${URL_BASE}/categorias`);
  const [ciudades] = useFetch(`${URL_BASE}/ciudades`);
  const [atributos] = useFetch(`${URL_BASE}/caracteristicas`);

  const [success, setSuccess] = useState(false);
  const [optionCategory, setOptionCategory] = useState({
    selectedOption: null,
  });
  const [optionCity, setOptionCity] = useState({
    selectedOption: null,
  });
  const [optionAttribute, setOptionAttribute] = useState({
    selectedOption: null,
  });

  const [prodName, setProdName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [cordinates, setCoordinates] = useState("");
  const [usePolicy, setUsePolicy] = useState("");
  const [healthPolicy, setHealthPolicy] = useState("");
  const [cancellationPolicy, setCancellationPolicy] = useState("");

  function darAltaProducto(settings) {
    fetch(`${URL_BASE}/productos`, settings)
      .then((response) => {
        console.log(response);
        if (response.ok !== true) {
          alert(
            "Lamentablemente no se pudo crear el producto. Por favor intente más tarde"
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log("Se dió de alta correctamente el producto");
      })
      .catch((err) => {
        console.log("Promesa rechazada:");
        console.log(err);
      });
  }

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
      categoria: optionCategory.selectedOption,
      ciudad: optionCity.selectedOption,
      /* "imagenes": "", */
      /* "caracteristicas": optionAttribute.selectedOption, */
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
    setSuccess(true);
  };

  const handleAttribute = () => {
    let container = document.getElementsByClassName("contentAttribute");
    console.log(container);
    container.innerHtml = `<div className=${styles.groupForm}>
    <label className="text2">Nombre e ícono</label>
    <select name="city">
      <option selected="selected">Elegí un atributo</option>
      ${
        atributos &&
        atributos.map((atributo) => (
          <option key={atributo.id} value={atributo.id}>
            {atributo.nombre}
            <Icon css={styles.icon} icon={atributo.icono} />
          </option>
        ))
      }
    </select>
  </div>`;
  };

  return (
    <>
      <Success state={success} text2={"Tu propiedad se ha creado con éxito."} path={"/"} textBtn={"volver"} />
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
                  <select
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
                  </select>
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
                  <label className="text2">Coordenadas</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Escribe las coordenadas de latitud y longitud"
                    value={cordinates}
                    onChange={(e) => setCoordinates(e.target.value)}
                  />
                </div>
                <div className={styles.groupForm}>
                  <label className="text2">Ciudad</label>
                  <select
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
                  </select>
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
              <div className={styles.contentAttributes}>
                <div className={styles.groupForm}>
                  <label className="text2">Nombre e ícono</label>
                  <select
                    name="attribute"
                    onChange={(e) => {
                      setOptionAttribute({
                        selectedOption: e.target.value,
                      });
                    }}
                  >
                    <option selected="selected">Elegí un atributo</option>
                    {atributos &&
                      atributos.map((atributo) => (
                        <option key={atributo.id} value={atributo.id}>
                          {atributo.nombre}
                          <Icon css={styles.icon} icon={atributo.icono} />
                        </option>
                      ))}
                  </select>
                </div>
                <Icon
                  css={styles.addIcon}
                  icon={faSquarePlus}
                  event={handleAttribute}
                />
              </div>
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
                    value={cancellationPolicy}
                    onChange={(e) => setCancellationPolicy(e.target.value)}
                  />
                </div>
              </div>
              <h2 className="heading2 color2 paddingTop">Cargar imágenes</h2>
              <div className={styles.contentImages}>
                <div className={styles.groupForm}>
                  <input
                    type="text"
                    id="urlImage"
                    name="urlImage"
                    placeholder="Insertar https://"
                  />
                </div>
                <Icon css={styles.addIcon} icon={faSquarePlus} />
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
