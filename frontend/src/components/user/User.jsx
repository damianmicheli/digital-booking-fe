import React, {useContext} from "react";
import Button from "../global/Button";
import Icon from "../global/Icon";
import styles from "./user.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/AuthContext";
import useMediaQuery from "../../hooks/useMediaQuery";

const User = ({ user }) => {

  const isMobile = useMediaQuery(768);
  const { handleAuth } = useContext(AuthContext); 

  const user1 = {
    id: 1,
    fName: "Gloria",
    surname: "Lunar",
    email: "glorialunar@gmail.com",
    password: "theghost",
  };
  const initials = `${user1.fName[0]} ${user1.surname[0]}`;

  return (
    <div className={styles.loggedUser}>
      <div className={styles.avatar}>{initials}</div>
      <p>
        Hola,
        <br />
        <span>
          {user1.fName} {user1.surname}
        </span>
      </p>
      {!isMobile && <Button
        css={styles.closeSession}
        event={handleAuth}
        text={<Icon css={styles.closeSession} icon={faXmark} />}
      />}
    </div>
  );
};

export default User;
