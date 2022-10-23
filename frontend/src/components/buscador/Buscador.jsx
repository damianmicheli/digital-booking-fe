import React from "react";

//Styles
import styles from "./buscador.module.css";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Components
import { Select } from "./contenido/Select";
import { DatePickerRange } from "./contenido/DatePickerRange";
import { Button } from "./contenido/Button";

const Buscador = () => {
  return (
    <div className={styles.containerPadre}>
      <Container className={styles.containerHijo}>
        <Row className={styles.rowBuscador}>
          <Col className={styles.title}>
            <h1>Busca ofertas en hoteles, casas y mucho más</h1>
          </Col>
          <Col className={styles.content}>
            <Select />
            <DatePickerRange />
            <Button />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Buscador;
