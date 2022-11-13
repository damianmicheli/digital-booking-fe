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

const Product = ({images}) => {

  const { id } = useParams();

  const [dataProducto] = useFetch(
    `http://localhost:8080/productos/${id}`
  );

  const nombre = dataProducto && dataProducto.nombre;
  const titulo = dataProducto && dataProducto.titulo;
  const descripcion = dataProducto && dataProducto.descripcion;
  const direccion = dataProducto && dataProducto.direccion;
  const politicaDeCancelacion = dataProducto && dataProducto.politica_de_cancelacion;
  const politicaDeSaludYSeguridad = dataProducto && dataProducto.politica_de_salud_y_seguridad;
  const normasDeUso = dataProducto && dataProducto.politica_de_uso;
  const categoria = dataProducto && dataProducto.categoria.titulo.toUpperCase();
  const ciudad = dataProducto && dataProducto.ciudad.ciudad;
  const pais = dataProducto && dataProducto.ciudad.pais;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='containerProduct'>
        <HeaderProduct 
        category={categoria}
        title={nombre}/>
        <LocationProduct direction={direccion} city={ciudad} country={pais}/>
        <GalleryContainer images={images}/>
        <DescriptionProduct title={titulo} description={descripcion} ciudad={ciudad} />
        <Features 
        // pasar features como props
        />
        <BookingCalendar />
        <Politics normas={normasDeUso} politicaSalud={politicaDeSaludYSeguridad} politicaCancelacion={politicaDeCancelacion}/>
    </div>
  )
}

export default Product;