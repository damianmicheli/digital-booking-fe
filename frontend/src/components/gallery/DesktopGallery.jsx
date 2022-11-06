import React /* , {useState, useEffect} */ from "react";
import styles from "./gallery.module.css";
import useModal from "../../hooks/useModal";
import Modal from "../global/modal/Modal";
import MobileGallery from "./MobileGallery";

const GalleryDesktop = ({ images }) => {
  const [isOpenModalGallery, openModalGallery, closeModalGallery] = useModal(false);

  return (
    <section className={styles.container}>
      <div className={styles.containerImages}>
        <ul className={styles.imgPpal}>
          <li id="first-img">
            <img src={images[0].URL} alt={images[0].titulo} />
          </li>
        </ul>
        <ul className={styles.imgGrid}>
          <li id="second-img">
            <img src={images[1].URL} alt={images[1].titulo} />
          </li>
          <li id="third-img">
            <img src={images[2].URL} alt={images[2].titulo} />
          </li>
          <li id="fourth-img">
            <img src={images[3].URL} alt={images[3].titulo} />
          </li>
          <li id="fifth-img">
            <img src={images[4].URL} alt={images[4].titulo} />
          </li>
          <button onClick={openModalGallery}>Ver más</button>
        </ul>
      </div>
      <Modal isOpen={isOpenModalGallery} closeModal={closeModalGallery}>
        <MobileGallery images={images} />
      </Modal>
    </section>
  );
};

export default GalleryDesktop;
