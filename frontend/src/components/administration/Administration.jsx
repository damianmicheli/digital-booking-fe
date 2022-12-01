import React, { useState, useEffect, useContext } from "react";
import styles from "./administration.module.css";

import { useParams } from "react-router";

import HeaderProduct from "../product/content/HeaderProduct";
import Icon from "../global/Icon";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

import useFetch from "../../hooks/useFetch";
import AuthContext from "../../context/AuthContext";
import URL_BASE from "../global/getUrlBase";

import SuccessAdmin from "../global/modal/success/SuccessAdmin";
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

  const handleSubmit = (e) => {};

  return (
    <>
      <SuccessAdmin state={success} />
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
                  <input type="text" id="name" name="name" />
                </div>
                <div className={styles.groupForm}>
                  <label className="text2">Categoría</label>
                  <select name="category">
                    <option selected="selected">Elegí una categoría</option>
                    {categorias &&
                      categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.titulo}>
                          {categoria.titulo}
                        </option>
                      ))}
                  </select>
                </div>
                <div className={styles.groupForm}>
                  <label className="text2">Dirección</label>
                  <input type="text" id="address" name="address" />
                </div>
                <div className={styles.groupForm}>
                  <label className="text2">Ciudad</label>
                  <select name="city">
                    <option selected="selected">Elegí una ciudad</option>
                    {ciudades &&
                      ciudades.map((ciudad) => (
                        <option key={ciudad.id} value={ciudad.ciudad}>
                          {ciudad.ciudad}, {ciudad.pais}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className={styles.groupForm}>
                <label className="text2">Descripción</label>
                <textarea id="description" name="description" />
              </div>
              <h2 className="heading2 color2 paddingTop">Atributos</h2>
              <div className={styles.contentAtributes}>
                <div className={styles.groupForm}>
                  <label className="text2">Nombre e ícono</label>
                  <select name="city">
                    <option selected="selected">Elegí un atributo</option>
                    {atributos &&
                      atributos.map((atributo) => (
                        <option key={atributo.id} value={atributo.nombre}>
                          {" "}
                          {atributo.nombre}{" "}
                          <Icon css={styles.icon} icon={atributo.icono} />
                        </option>
                      ))}
                  </select>
                </div>
                <Icon css={styles.addIcon} icon={faSquarePlus} />
              </div>
              <h2 className="heading2 color2 paddingTop">
                Políticas del producto
              </h2>
              <div className={styles.contentPolitics}>
                <div className={styles.groupForm}>
                  <h4 className="heading4">Normas de la casa</h4>
                  <label className="text2">Descripción</label>
                  <textarea id="description" name="description" />
                </div>
                <div className={styles.groupForm}>
                  <h4 className="heading4">Salud y seguridad</h4>
                  <label className="text2">Descripción</label>
                  <textarea id="description" name="description" />
                </div>
                <div className={styles.groupForm}>
                  <h4 className="heading4">Políticas de cancelación</h4>
                  <label className="text2">Descripción</label>
                  <textarea id="description" name="description" />
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
