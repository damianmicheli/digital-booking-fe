import { Route, Routes } from "react-router-dom";
import styles from "./body.module.css";

const Body = () => {
  return (
    <div className={styles.body}>
      <Routes>
        <Route path="/"  />
      </Routes>
    </div>
  );
};

export default Body;
