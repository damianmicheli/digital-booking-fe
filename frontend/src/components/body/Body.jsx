import { Route, Routes } from "react-router-dom";
import styles from "./body.module.css";
import Login from "../login_register/Login"
import Register from "../login_register/Register"
import Buscador from "../buscador/Buscador"

const Body = () => {
  return (
    <div className={styles.body}>
      <Routes>
      <Route path="/" element={<Buscador/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
};

export default Body;
