import React, { useState, useEffect, useContext } from "react";
import styles from "./administration.module.css";

import { useParams } from "react-router";

import useMediaQuery from "../../hooks/useMediaQuery";

import HeaderProduct from "../product/content/HeaderProduct";

import useFetch from "../../hooks/useFetch";
import AuthContext from "../../context/AuthContext";
import URL_BASE from "../global/getUrlBase";

import SuccessAdmin from "../global/modal/success/SuccessAdmin";

const Administration = () => {
  const { userLog } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [categorias] = useFetch(`${URL_BASE}/categorias`);

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
            <div className={styles.content}>
              <h2 className="heading2 color2 paddingTop">Crear propiedad</h2>
            </div>
            <div className={styles.content}>
              <div className={styles.groupForm}>
                <label className="text2">Nombre de la propiedad</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className={styles.groupForm}>
                <label className="text2">Categoría</label>

                <select name="category">
                  {categorias &&
                    categorias.map((categoria) => (
                      <option key={categoria.id} value={categoria.titulo}>{categoria.titulo}</option>
                    ))}
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Administration;
