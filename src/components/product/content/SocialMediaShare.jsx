import React from "react";
import Icon from "../../global/Icon";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import styles from "./socialMedia.module.css";
import useModal from "../../../hooks/useModal";
import Modal from "../../global/modal/Modal";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

const SocialMediaShare = ({ url, category, title }) => {
  const [isOpenModalSocialMedia, openModalSocialMedia, closeModalSocialMedia] = useModal(false);
  const text = `Mira este alojamiento! \nNombre: ${title} \nCategoria: ${category}`;
  return (
    <>
      <button onClick={openModalSocialMedia} className={styles.button}>
        <Icon css={styles.icon} icon={faShareNodes} />
      </button>
      <Modal
        className={styles.modal}
        isOpen={isOpenModalSocialMedia}
        closeModal={closeModalSocialMedia}
      >
        <div className={styles.modalContainer}>
          <div className={styles.textContainer}>
            <h4>¿Te gustó?</h4>
            <p>Compartilo en tus redes:</p>
          </div>
          <div className={styles.socialMediaContainer}>
            <FacebookShareButton url={url} hashtag="#DigitalBooking">
              <FacebookIcon logofillcolor="white" round={true} size={50} />
            </FacebookShareButton>
            <WhatsappShareButton title={text} url={url}>
              <WhatsappIcon logofillcolor="white" round={true} size={50} />
            </WhatsappShareButton>
            <TwitterShareButton
              title="Mira este alojamiento!"
              url={url}
              hashtags={["DigitalBooking", "Moderno", "Confiable"]}
            >
              <TwitterIcon logofillcolor="white" round={true} size={50} />
            </TwitterShareButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SocialMediaShare;
