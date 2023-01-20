import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import URL_BASE from "../global/getUrlBase";
import styles from "./mybookings.module.css";
import Icon from "../global/Icon";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Card from "../cards/Card";
import HeaderProduct from "../product/content/HeaderProduct";
import Button from "../global/Button";

const MyBookings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { userId } = useParams();
  const [data] = useFetch(`${URL_BASE}/reservas?usuario=${userId}`);
  console.log(data);
  const message = "No disponible";

  return (
    <div className={styles.container}>
      <HeaderProduct title={"Mis reservas"} path={"/"} />
      <div className={styles.containerReservation}>
        {data && data.length === 0 ? (
          <div className={styles.reservation}>
            <Icon css={styles.iconExclamation} icon={faCircleExclamation} />
            <h2>Aún no has efectuado ninguna reserva</h2>
            {/* <Link to={"/"}>
              <p className={styles.backHome}>Volver a home</p>
            </Link> */}
            <Link to={"/"}>
              <Button css="button6" text={"Volver al inicio"} />
            </Link>
          
          </div>
        ) : (
          <div className={styles.itemContainer}>
            {data &&
              data.map((reservation) => {
                return (
                  <div
                    key={reservation.id}
                    className="body__card recommendation respo"
                  >
                    <Card
                      id={
                        reservation.producto.id !== null
                          ? reservation.producto.id
                          : message
                      }
                      img={
                        reservation.producto.imagenes[0]
                          ? reservation.producto.imagenes[0].url
                          : "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/categorias/placeholder.jpeg"
                      }
                      category={
                        reservation.producto.categoria.titulo !== null
                          ? reservation.producto.categoria.titulo.toUpperCase()
                          : message
                      }
                      title={
                        reservation.producto.nombre !== null
                          ? reservation.producto.nombre
                          : message
                      }
                      location={
                        reservation.producto.direccion !== null
                          ? reservation.producto.direccion
                          : message
                      }
                      features={
                        reservation.producto.caracteristicas !== null
                          ? reservation.producto.caracteristicas
                          : message
                      }
                      startDate={`${reservation.fecha_inicial_reserva[2]}/${reservation.fecha_inicial_reserva[1]}/${reservation.fecha_inicial_reserva[0]}`}
                      endDate={`${reservation.fecha_final_reserva[2]}/${reservation.fecha_final_reserva[1]}/${reservation.fecha_final_reserva[0]}`}
                      hour={`${reservation.hora_comienzo_reserva[0]}hs`}
                      score={reservation.producto.puntajePromedio}
                    />
                    {console.log(typeof reservation)}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
