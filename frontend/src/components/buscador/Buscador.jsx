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
import { Button } from "../Button";

const Buscador = () => {
  return (
    <div className={styles.containerPadre}>
      <Container className={styles.containerHijo}>
        <div className={styles.rowBuscador}>
          <Row className={styles.title}>
            <h1>Busca ofertas en hoteles, casas y mucho más</h1>
          </Row>
          <Row className={styles.content}>
            <Col xs={12} md={4.5} lg={4}>
              <Select />
            </Col>
            <Col xs={12} md={4.5} lg={4}>
              <DatePickerRange />
            </Col>
            <Col xs={12} md={3} lg={2}>
              <Button css="button1" text="Buscar" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Buscador;
