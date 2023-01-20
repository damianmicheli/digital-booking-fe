import React, { useState, useContext } from "react";
import { useParams } from "react-router";
import styles from "./score.module.css";
import Button from "../../global/Button";
import URL_BASE from "../../global/getUrlBase";
import Success from "../../global/modal/success/Success";
import Failure from "../../global/modal/Failure";
import AuthContext from "../../../context/AuthContext";
import AlertUser from "../../global/modal/alert/AlertUser";

const Score = () => {
  const { userLog, auth } = useContext(AuthContext);
  const { id } = useParams();

  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const [score, setScore] = useState({
    selectedOption: null,
  });

  function realizarPuntuacion(settings) {
    fetch(`${URL_BASE}/productos/puntuar`, settings)
      .then((response) => {
        console.log({ response });
        if (response.ok !== true) {
          console.log("fallo");
        }
        return response.json();
      })
      .then((data) => {
        console.log({ data });
        console.log("Se registro ok la puntuacion");
        if (data) {
          setSuccess(true);
        }
      })
      .catch((err) => {
        console.log("Promesa rechazada:");
        console.log({ err });
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!auth) {
      setFailure(true)
    }
    const token = "Bearer " + JSON.parse(localStorage.getItem("jwt"));
    const payload = {
      puntuacion: score.selectedOption,
      producto: {
        id: id,
      },
      usuario: {
        id: userLog.id,
      },
    };
    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    realizarPuntuacion(settings);
  };

  return (
    <>
      <Success
        state={success}
        text1={"¡Muchas Gracias!"}
        text2={"Su puntuación se ha realizado con éxito"}
        path={"/"}
        textBtn={"ok"}
      />
      <Failure
        state={failure}
        text2={"Para poder calificar un producto necesitas estar logueado"}
        path={"/login"}
        textBtn={"ok"}
      />
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>¿Qué te pareció?</h1>
        </div>
        <AlertUser text={"Para puntuar un producto necesitas estar logueado"} />
        <div className={styles.contentContainer}>
          <p>
            Te invitamos a calificar el producto. Tu opinión es muy importante
            para que podamos mejorar!
          </p>
          <form
            className={styles.form}
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className={styles.scoreContainer}>
              <div
                className={
                  score.selectedOption === 1
                    ? styles.btnSelected
                    : styles.btnScore
                }
                onClick={() => {
                  setScore({
                    selectedOption: 1,
                  });
                }}
              >
                1
              </div>
              <div
                className={
                  score.selectedOption === 2
                    ? styles.btnSelected
                    : styles.btnScore
                }
                onClick={() => {
                  setScore({
                    selectedOption: 2,
                  });
                }}
              >
                2
              </div>
              <div
                className={
                  score.selectedOption === 3
                    ? styles.btnSelected
                    : styles.btnScore
                }
                onClick={() => {
                  setScore({
                    selectedOption: 3,
                  });
                }}
              >
                3
              </div>
              <div
                className={
                  score.selectedOption === 4
                    ? styles.btnSelected
                    : styles.btnScore
                }
                onClick={() => {
                  setScore({
                    selectedOption: 4,
                  });
                }}
              >
                4
              </div>
              <div
                className={
                  score.selectedOption === 5
                    ? styles.btnSelected
                    : styles.btnScore
                }
                onClick={() => {
                  setScore({
                    selectedOption: 5,
                  });
                }}
              >
                5
              </div>
            </div>
            <div className={styles.text}>
              <p>Regular</p>
              <p>Muy Bueno</p>
            </div>
            <Button text={"Enviar"} css={styles.btnSubmit} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Score;
