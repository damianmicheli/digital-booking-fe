import { Route, Routes } from "react-router-dom";
import styles from "./body.module.css";
/* import Login from "../login_register/Login" */
import Register from "../login_register/Register"

const Body = () => {
  return (
    <div className={styles.body}>
      <Routes>
        <Route path="/" element={<Register/>} />
      </Routes>
    </div>
  );
};

export default Body;
