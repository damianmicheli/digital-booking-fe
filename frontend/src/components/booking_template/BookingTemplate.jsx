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
import Icon from "../global/Icon";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

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

  const [data] = useFetch(`${URL_BASE}/productos/buscar?id=${id}`);

  const nombre = data && data.nombre;
  const categoria = data && data.categoria.titulo.toUpperCase();
  const politicaDeCancelacion = data && data.politica_de_cancelacion;
  const politicaDeSaludYSeguridad = data && data.politica_de_salud_y_seguridad;
  const normasDeUso = data && data.politica_de_uso;
  const direccion = data && data.direccion;
  const imagen = data && data.imagenes[0];

  const [reservationDate, setReservationDate] = useState({
    startDate: null,
    endDate: null,
  });

  const [text, setText] = useState({
    selectedOption: "Ïngrese su texto aqui",
  });

  const [value, setValue] = useState({
    selectedOption: null,
  });

  const [option, setOption] = useState({
    selectedOption: "....hs"
  });

  const { startDate, endDate } = reservationDate;

  const checkIn =
    startDate === null ? "__/__/__" : `${format(startDate, "dd/MM/yyyy")}`;
  const checkOut =
    endDate === null ? "__/__/__" : `${format(endDate, "dd/MM/yyyy")}`;

  function realizarReserva(settings) {
    fetch(`${URL_BASE}/reservas`, settings)
      .then((response) => {
        console.log(response);
        if (response.ok !== true) {
          alert(
            "Lamentablemente no se pudo realizar su reserva. Por favor intente más tarde"
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log("Se registro ok la reserva");
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
      "hora_comienzo_reserva": option.selectedOption,
      "fecha_inicial_reserva": format(startDate, "yyyy-MM-dd"),
      "fecha_final_reserva": format(endDate, "yyyy-MM-dd"),
      "producto": {
        "id": `${id}`,
      },
      "usuario": {
        "id": `${userLog.id}`,
      },
      "aclaraciones": text.selectedOption,
      "vacunado": `${value.selectedOption}`,
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    realizarReserva(settings);
    setSuccess(true);
  };

  console.log(value);

  return (
    <>
      <SuccessUser state={success} />
      <div className={styles.title}>
        <HeaderProduct category={categoria} title={nombre} path={"/"} />
      </div>
      <div className={styles.bookingTemplate}>
        <div className="container">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            id="bookingForm"
          >
            <div className={styles.content}>
              <div className={styles.contentLeft}>
                <h2 className="heading2 color2">Completá tus datos</h2>
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
                      value={userLog.ciudad}
                      disabled
                    />
                  </div>
                </div>
                <h2 className="heading2 color2">
                  Seleccioná tu fecha de reserva
                </h2>
                <div className={styles.calendarContainer}>
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
                <h2 className="heading2 color2">Tu horario de llegada</h2>
                <div className={styles.divInputs}>
                  <div className={styles.scheduleContainer}>
                    <p className={styles.scheduleTitle}>
                      <Icon css={styles.iconCheck} icon={faCircleCheck} />
                      Tu alojamiento estará listo para el check-in entre las
                      10:00 AM y las 11:00 PM
                    </p>
                    <div className={styles.select}>
                      <select
                        id="hour"
                        name="check_in"
                        className={styles.scheduleOptions}
                        onChange={(e) => {
                          setOption({
                            selectedOption: e.target.value,
                          });
                        }}
                        required
                      >
                        <option value="" key="default" hidden>
                          Seleccionar hora de llegada
                        </option>
                        <option value={"10:00:00"} key={"10:00"}>
                          10:00 AM
                        </option>
                        <option value={"11:00:00"} key={"11:00"}>
                          11:00 AM
                        </option>
                        <option value={"12:00:00"} key={"12:00"}>
                          12:00 PM
                        </option>
                        <option value={"13:00:00"} key={"13:00"}>
                          01:00 PM
                        </option>
                        <option value={"14:00:00"} key={"14:00"}>
                          02:00 PM
                        </option>
                        <option value={"15:00:00"} key={"15:00"}>
                          03:00 PM
                        </option>
                        <option value={"16:00:00"} key={"16:00"}>
                          04:00 PM
                        </option>
                        <option value={"17:00:00"} key={"17:00"}>
                          05:00 PM
                        </option>
                        <option value={"18:00:00"} key={"18:00"}>
                          06:00 PM
                        </option>
                        <option value={"19:00:00"} key={"19:00"}>
                          07:00 PM
                        </option>
                        <option value={"20:00:00"} key={"20:00"}>
                          08:00 PM
                        </option>
                        <option value={"21:00:00"} key={"21:00"}>
                          09:00 PM
                        </option>
                        <option value={"22:00:00"} key={"22:00"}>
                          10:00 PM
                        </option>
                        <option value={"23:00:00"} key={"23:00"}>
                          11:00 PM
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <h2 className="heading2 color2">Datos adicionales</h2>
                <div className={styles.divInputs}>
                  <div className={styles.groupForm}>
                    <label className="text2">Aclaraciones</label>
                    <textarea
                      id="aclaraciones"
                      name="aclaraciones"
                      rows="4"
                      cols="50"
                      className={styles.textarea}
                      placeholder={text.selectedOption}
                      onChange={(e) => {
                        setText({
                          selectedOption: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className={`${styles.groupForm} ${styles.vacunado}`}>
                    <label className="text2">
                      ¿Está vacunado contra COVID?
                    </label>
                    <div>
                      <input
                        type="radio"
                        id="vacunado"
                        name="vacunado"
                        required={true}
                        value={true}
                        className={styles.radioButton}
                        onChange={(e) => {
                          setValue({
                            selectedOption: e.target.value,
                          });
                        }}
                      />
                      <label className="text2">Si</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="vacunado"
                        name="vacunado"
                        value={false}
                        className={styles.radioButton}
                        onChange={(e) => {
                          setValue({
                            selectedOption: e.target.value,
                          });
                        }}
                      />
                      <label className="text2">No</label>
                    </div>
                  </div>
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
