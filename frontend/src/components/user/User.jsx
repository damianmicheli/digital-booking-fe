import React from "react";
import styles from "./user.module.css";

const User = ({ user }) => {

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
        <span>{user1.fName} {user1.surname}</span>
      </p>
    </div>
  );
};

export default User;
