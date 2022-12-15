import React, { useEffect/* , useContext */ } from "react";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";

import HeaderProduct from "./content/HeaderProduct";
import LocationProduct from "./content/LocationProduct";
import DescriptionProduct from "./content/DescriptionProduct";
import Features from "./content/Features";
import Politics from "./content/Politics";
import BookingCalendar from "./content/booking_calendar/BookingCalendar";
import GalleryContainer from "../gallery/GalleryContainer";
import SocialMediaShare from "./content/SocialMediaShare";
import Score from "./content/Score";

//import Button from "../global/Button";
//import Icon from "../global/Icon";
//import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
//import { faHeart as faSolideHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./product.module.css";

//import FavContext from "../../context/FavContext";

import URL_BASE from "../global/getUrlBase";
import MapView from "../map/MapView";

const Product = () => {
  const { id } = useParams();

 // const idNumber = Number(id);

  const [data] = useFetch(`${URL_BASE}/productos/buscar?id=${id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 /*  const {favorites, toggleItemInLocalStorage } = useContext(FavContext);

  useEffect(() => {
    console.log({ favorites });
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]); */

  /* const isFavorite = favorites.includes(idNumber); */

  return (
    <div className={styles.containerProduct}>
      {data && (
        <>
          <HeaderProduct
            category={data?.categoria.titulo.toUpperCase()}
            title={data?.nombre}
            path={"/"}
          />
          <LocationProduct
            direction={data?.direccion}
            city={data?.ciudad.ciudad}
            country={data?.ciudad.pais}
            score={data?.puntajePromedio}
          />
          <div className={styles.socialMediaContainer}>
            <SocialMediaShare
              url={`http://www.digitalbooking.ar/producto/${id}`}
            />
          {/*   <Button
             // event={toggleItemInLocalStorage(idNumber, isFavorite)}
              css="btnFav"
              text={
                <Icon
                  css="iconFavDetail"
                  icon={faRegularHeart}
                 // icon={isFavorite ? faSolideHeart : faRegularHeart}
                />
              }
            /> */}
          </div>
          <GalleryContainer images={data?.imagenes} />
          <div className={styles.descriptionContainer}>
            <DescriptionProduct
              title={data?.titulo}
              description={data?.descripcion}
              ciudad={data?.ciudad.ciudad}
            />
          </div>
          <Features features={data?.caracteristicas} />
          <BookingCalendar />
          <MapView
            latitud={data?.latitud}
            longitud={data?.longitud}
            city={data?.ciudad.ciudad}
            country={data?.ciudad.pais}
          />
          <Politics
            normas={data?.politica_de_uso}
            politicaSalud={data?.politica_de_salud_y_seguridad}
            politicaCancelacion={data?.politica_de_cancelacion}
          />
          <Score />
        </>
      )}
    </div>
  );
};

export default Product;
