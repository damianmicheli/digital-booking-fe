import React from "react";
import styles from "./Modal.module.css";
import Icon from '../Icon';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ModalGallery = ({ children, isOpen, closeModal }) => {
  //Evita que el evento de cerrar se propague en todo en contenido hijo-- sólo se aplica en el fondo con transparencia
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`${styles.modal} ${isOpen && styles.isOpen}`} onClick={closeModal}>
      <div className={styles.modalContainer} onClick={handleModalContainerClick}>
        <button className={styles.modalClose} onClick={closeModal}>
          <Icon css="icon" icon={faXmark} />
        </button>
        {children}
      </div>
    </article>
  );
};

export default ModalGallery;
