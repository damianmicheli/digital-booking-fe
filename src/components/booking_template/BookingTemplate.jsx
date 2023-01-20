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
import Success from "../global/modal/success/Success";
import Failure from "../global/modal/Failure";
import Icon from "../global/Icon";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const BookingTemplate = () => {
  const { userLog } = useContext(AuthContext);
  const { id } = useParams();

  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const [dateRangeIsRequired, setDateRangeIsRequired] = useState(false);
  const [scheduleIsRequired, setScheduleIsRequired] = useState(false);
  const [vaccinationIsRequired, setVaccinationIsRequired] = useState(false);

  const isMobile = useMediaQuery(624);

  const [disabledDates] = useFetch(
    `${URL_BASE}/productos/fechasnodisponibles?id=${id}`
  );

  let fechasInhabilitadas = [];
  let newDate;
  disabledDates &&
    disabledDates?.fechasNoDisponibles.map((array) => {
      newDate = new Date(array[0], array[1] - 1, array[2]);
      return fechasInhabilitadas.push(newDate);
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data] = useFetch(`${URL_BASE}/productos/buscar?id=${id}`);

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
    selectedOption: null,
  });

  const [location, setLocation] = useState("");

  const { startDate, endDate } = reservationDate;

  const checkIn =
    startDate === null ? "__/__/__" : `${format(startDate, "dd/MM/yyyy")}`;
  const checkOut =
    endDate === null ? "__/__/__" : `${format(endDate, "dd/MM/yyyy")}`;

  function realizarReserva(settings) {
    fetch(`${URL_BASE}/reservas`, settings)
      .then((response) => {
        console.log({ response });
        if (!response.ok) {
          setFailure(true)
        }else{
          return response.json();
        }
        
      })
      .then((data) => {
        console.log({ data });
        console.log("Se registro ok la reserva");
        if (data) {
          setSuccess(true);
        }
      })
      .catch((err) => {
        console.log("Promesa rechazada:");
        console.log(err);
      });
  }

  const handleClick = () => {
    if (startDate !== null) {
      setDateRangeIsRequired(false)
    }
    if(option.selectedOption !== null){
      setScheduleIsRequired(false)
    }
    if(value.selectedOption !== null){
      setVaccinationIsRequired(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (startDate === null || option.selectedOption === null || value.selectedOption === null) {
      if (startDate === null) {
        setDateRangeIsRequired(true);
      } 
      if (option.selectedOption === null) {
        setScheduleIsRequired(true);
      } 
      if (value.selectedOption === null) {
        setVaccinationIsRequired(true)
      }
    } 
    const token = "Bearer " + JSON.parse(localStorage.getItem("jwt"));
    const payload = {
      hora_comienzo_reserva: option.selectedOption,
      fecha_inicial_reserva: format(startDate, "yyyy-MM-dd"),
      fecha_final_reserva: format(endDate, "yyyy-MM-dd"),
      producto: {
        id: `${id}`,
      },
      usuario: {
        id: `${userLog.id}`,
        ciudad: `${location}`,
      },
      aclaraciones: text.selectedOption,
      vacunado: `${value.selectedOption}`,
    };

    console.log({ location });

    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    if(startDate !== null && option.selectedOption !== null && value.selectedOption !== null) {
      realizarReserva(settings);
      setSuccess(true);
    }
  };

  return (
    <>
      <Failure
        state={failure}
        text1={"Lamentablemente no se ha podido realizar su reserva."}
        text2={"Por favor intente más tarde"}
        path={"/"}
        textBtn={"ok"}
      />
      <Success
        state={success}
        text1={"¡Muchas Gracias!"}
        text2={"Su reserva se ha realizado con éxito"}
        path={"/"}
        textBtn={"Ok"}
      />
      <div className={styles.title}>
        {data && (
          <HeaderProduct
            category={data?.categoria.titulo.toUpperCase()}
            title={data?.nombre}
            path={"/"}
          />
        )}
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
                      placeholder={userLog && userLog.ciudad}
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
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
                        onClick={handleClick}
                      />
                    ) : (
                      <Calendar
                        months={2}
                        bookings={fechasInhabilitadas}
                        setReservationDate={setReservationDate}
                        onClick={handleClick}
                      />
                    )}
                  </div>
                </div>
                {dateRangeIsRequired && (
                    <p className={styles.pFormError}>
                      Campo obligatorio. Debe seleccionar una opción
                    </p>
                  )}
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
                        onClick={handleClick}
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
                {scheduleIsRequired && (
                    <p className={styles.pFormError}>
                      Campo obligatorio. Debe seleccionar una opción
                    </p>
                  )}
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
                        onClick={handleClick}
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
                        onClick={handleClick}
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
                {
                  vaccinationIsRequired && (
                    <p className={styles.pFormError}>
                      Campo obligatorio. Debe seleccionar una opción
                    </p>
                  )}
              </div>
              <div className={styles.contentRight}>
                {data && (
                  <BookingDetail
                    startDate={checkIn}
                    endDate={checkOut}
                    title={data?.nombre}
                    category={data?.categoria.titulo.toUpperCase()}
                    location={data?.direccion}
                    image={data?.imagenes[0]}
                    score={data?.puntajePromedio}
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      {data && (
        <Politics
          normas={data?.politica_de_uso}
          politicaSalud={data?.politica_de_salud_y_seguridad}
          politicaCancelacion={data?.politica_de_cancelacion}
        />
      )}
    </>
  );
};

export default BookingTemplate;
