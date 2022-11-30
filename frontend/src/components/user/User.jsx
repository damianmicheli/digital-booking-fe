import React, { useContext } from "react";
import Button from "../global/Button";
import Icon from "../global/Icon";
import styles from "./user.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/AuthContext";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";

const User = () => {
  const isMobile = useMediaQuery(768);
  const { handleAuth, userLog } = useContext(AuthContext);

  console.log(userLog);

  const initials = `${userLog.nombre[0]}${userLog.apellido[0]}`;

  return (
    <div className={styles.loggedUser}>
      <Link className={styles.link} to={`/${userLog.id}/reservas`}>
        Mis Reservas
      </Link>

      <div className={styles.avatar}>{initials}</div>
      <p>
        Hola,
        <br />
        <span>
          {userLog.nombre} {userLog.apellido}
        </span>
      </p>
      {!isMobile && (
        <Button
          css={styles.closeSession}
          event={handleAuth}
          text={<Icon css={styles.closeSession} icon={faXmark} />}
        />
      )}
    </div>
  );
};

export default User;
