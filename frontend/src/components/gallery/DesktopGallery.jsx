import React from "react";
import styles from "./gallery.module.css";
import useModal from "../../hooks/useModal";
import Modal from "../global/modal/Modal";
import MobileGallery from "./MobileGallery";

const GalleryDesktop = ({ images }) => {
  const [isOpenModalGallery, openModalGallery, closeModalGallery] =
    useModal(false);

  return (
    <section className={styles.container}>
      {images === null ? (
        <p> No disponible</p>
      ) : (
        <div className={styles.containerImages}>
          <ul className={styles.imgPpal}>
            <li id={images[0] ? images[0].id : "No disponible"}>
              <img
                src={
                  images[0]
                    ? images[0].url
                    : "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/categorias/placeholder.jpeg"
                }
                alt={images[0] ? images[0].titulo : "No disponible"}
              />
            </li>
          </ul>
          <ul className={styles.imgGrid}>
            <li id={images[1] ? images[1].id : "No disponible"}>
              <img
                src={
                  images[1]
                    ? images[1].url
                    : "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/categorias/placeholder.jpeg"
                }
                alt={images[1] ? images[1].titulo : "No disponible"}
              />
            </li>
            <li id={images[2] ? images[2].id : "No disponible"}>
              <img
                src={
                  images[2]
                    ? images[2].url
                    : "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/categorias/placeholder.jpeg"
                }
                alt={images[2] ? images[2].titulo : "No disponible"}
              />
            </li>
            <li id={images[3] ? images[3].id : "No disponible"}>
              <img
                src={
                  images[3]
                    ? images[3].url
                    : "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/categorias/placeholder.jpeg"
                }
                alt={images[3] ? images[3].titulo : "No disponible"}
              />
            </li>
            <li id={images[4] ? images[4].id : "No disponible"}>
              <img
                src={
                  images[4]
                    ? images[4].url
                    : "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/categorias/placeholder.jpeg"
                }
                alt={images[4] ? images[4].titulo : "No disponible"}
              />
            </li>
            <button onClick={openModalGallery}>Ver más</button>
          </ul>
        </div>
      )}

      <Modal isOpen={isOpenModalGallery} closeModal={closeModalGallery}>
        <MobileGallery images={images} />
      </Modal>
    </section>
  );
};

export default GalleryDesktop;
