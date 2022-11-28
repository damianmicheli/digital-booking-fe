import React, { useState, useEffect, useContext } from "react";
import styles from "./bookingTemplate.module.css";

import { useParams } from "react-router";

import useMediaQuery from "../../hooks/useMediaQuery";
import Calendar from "./Calendar";
import HeaderProduct from "../product/content/HeaderProduct";
import BookingDetail from "./booking_detail/BookingDetail";
import Politics from "../product/content/Politics";
import useFetch from "../../hooks/useFetch";
import AuthContext from "../../context/AuthContext";
import format from "date-fns/format";
import URL_BASE from "../global/getUrlBase";
import SuccessUser from "../global/modal/success/SuccessUser";

const BookingTemplate = () => {
  const { userLog } = useContext(AuthContext);
  const { id } = useParams();

  const [success, setSuccess] = useState(false);

  const isMobile = useMediaQuery(624);

  const [disabledDates] = useFetch(
    `${URL_BASE}/productos/fechasnodisponibles?id=${id}`
  );

  const fechas = disabledDates && disabledDates.fechasNoDisponibles;
  let fechasInhabilitadas = [];
  let newDate;
  fechas &&
    fechas.map((array) => {
      newDate = new Date(array[0], array[1] - 1, array[2]);
      return fechasInhabilitadas.push(newDate);
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //const [bookings] = useFetch(`${URL_BASE}/reservas/producto/${id}`)

  const [data] = useFetch(`${URL_BASE}/productos/buscar?id=${id}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  const nombre = data && data.nombre;
  const categoria = data && data.categoria.titulo.toUpperCase();
  const politicaDeCancelacion = data && data.politica_de_cancelacion;
  const politicaDeSaludYSeguridad = data && data.politica_de_salud_y_seguridad;
  const normasDeUso = data && data.politica_de_uso;
  const ciudad = data && data.ciudad.ciudad;
  const direccion = data && data.direccion;
  const imagen = data && data.imagenes[0];

  const [reservationDate, setReservationDate] = useState({
    startDate: null,
    endDate: null,
  });

  const { startDate, endDate } = reservationDate;

  const checkIn =
    startDate === null ? "__/__/__" : `${format(startDate, "dd/MM/yyyy")}`;
  const checkOut =
    endDate === null ? "__/__/__" : `${format(endDate, "dd/MM/yyyy")}`;

  return (
    <>
      <SuccessUser state={success} />
      <div className={styles.title}>
        <HeaderProduct category={categoria} title={nombre} path={"/"} />
      </div>
      <div className={styles.bookingTemplate}>
        <div className={styles}>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            id="bookingForm"
            // action="/"
            // method="POST"
          >
            <div className={styles.content}>
              <div className={styles.contentLeft}>
                <h2 className="heading2 color2 paddingTop">
                  Completá tus datos
                </h2>
                <div className={styles.divInputs}>
                  <div className={styles.groupForm}>
                    <label className="text2">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={userLog && userLog.nombre}
                      disabled
                    />
                  </div>
                  <div className={styles.groupForm}>
                    <label className="text2">Apellido</label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      value={userLog && userLog.apellido}
                      disabled
                    />
                  </div>
                  <div className={styles.groupForm}>
                    <label className="text2">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={userLog && userLog.email}
                      disabled
                    />
                  </div>
                  <div className={styles.groupForm}>
                    <label className="text2">Ciudad</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={ciudad}
                    />
                  </div>
                </div>
                <h2 className="heading2 color2 paddingTop paddingBottom">
                  Seleccioná tu fecha de reserva
                </h2>
                <div className={styles.calendar}>
                  {isMobile ? (
                    <Calendar
                      months={1}
                      bookings={fechasInhabilitadas}
                      setReservationDate={setReservationDate}
                    />
                  ) : (
                    <Calendar
                      months={2}
                      bookings={fechasInhabilitadas}
                      setReservationDate={setReservationDate}
                    />
                  )}
                </div>
              </div>
              <div className={styles.contentRight}>
                <BookingDetail
                  startDate={checkIn}
                  endDate={checkOut}
                  title={nombre}
                  category={categoria}
                  location={direccion}
                  image={imagen}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <Politics
        normas={normasDeUso}
        politicaSalud={politicaDeSaludYSeguridad}
        politicaCancelacion={politicaDeCancelacion}
      />
    </>
  );
};

export default BookingTemplate;
