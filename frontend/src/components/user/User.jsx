import React, { useContext } from "react";
import Icon from "../global/Icon";
import styles from "./user.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/AuthContext";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";

const User = () => {
  const isMobile = useMediaQuery(624);

  const { handleAuth, userLog } = useContext(AuthContext);

  const initials = `${userLog.nombre[0]}${userLog.apellido[0]}`;

  return (
    <div className={styles.loggedUser}>
      <Link
        className={styles.linkDesktop}
        to={
          userLog.roles[0].id === 2
            ? `/${userLog.id}/reservas`
            : "/administracion"
        }
      >
        {userLog.roles[0].id === 2 ? "Mis Reservas" : "Administración"}
      </Link>
      <div className={styles.avatar}>{initials}</div>
      <p>
        Hola,
        <br />
        <span>
          {userLog.nombre} {userLog.apellido}
        </span>
      </p>
      <Link
        className={styles.linkMobile}
        to={
          userLog.roles[0].id === 2
            ? `/${userLog.id}/reservas`
            : "/administracion"
        }
      >
        {userLog.roles[0].id === 2 ? "Mis Reservas" : "Administración"}
      </Link>
      {!isMobile && (
        <Link className={styles.closeSession} onClick={handleAuth} to={"/"}>
          <Icon css={styles.closeSession} icon={faXmark} />
        </Link>
      )}
    </div>
  );
};

export default User;
