import React, { useEffect } from 'react';

import HeaderProduct from './content/HeaderProduct';
import LocationProduct from './content/LocationProduct';
import DescriptionProduct from './content/DescriptionProduct';
import Features from './content/Features';
import Politics from './content/Politics';
import BookingCalendar from '../booking_calendar/BookingCalendar';

import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router";
import GalleryContainer from '../gallery/GalleryContainer';

import SocialMediaShare from './content/SocialMediaShare';
import Icon from '../global/Icon';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import styles from './product.module.css';

const Product = ({images}) => {

  const { id } = useParams();

  const [data] = useFetch(
    `http://localhost:8080/productos/${id}`
  );

  const nombre = data && data.nombre;
  const titulo = data && data.titulo;
  const descripcion = data && data.descripcion;
  const direccion = data && data.direccion;
  const caracteristicas = data && data.caracteristicas;
  const politicaDeCancelacion = data && data.politica_de_cancelacion;
  const politicaDeSaludYSeguridad = data && data.politica_de_salud_y_seguridad;
  const normasDeUso = data && data.politica_de_uso;
  const categoria = data && data.categoria.titulo.toUpperCase();
  const ciudad = data && data.ciudad.ciudad;
  const pais = data && data.ciudad.pais;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.containerProduct}>
        <HeaderProduct category={categoria} title={nombre}/>
        <LocationProduct direction={direccion} city={ciudad} country={pais}/>
        <div className={styles.socialMediaContainer}>
          <SocialMediaShare url={`http://www.calific.ar/producto/${id}`}/>
          <Icon css={styles.icon} icon={faHeart}/>
        </div>
        <GalleryContainer images={images}/>
        <DescriptionProduct title={titulo} description={descripcion} ciudad={ciudad} />
        <Features features={caracteristicas}/>
        <BookingCalendar />
        <Politics normas={normasDeUso} politicaSalud={politicaDeSaludYSeguridad} politicaCancelacion={politicaDeCancelacion}/>
    </div>
  )
}

export default Product;