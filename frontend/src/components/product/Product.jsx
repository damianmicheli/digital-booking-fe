import React from 'react';

import HeaderProduct from './content/HeaderProduct';
import LocationProduct from './content/LocationProduct';
import DescriptionProduct from './content/DescriptionProduct';
import Features from './content/Features';
import Politics from './content/Politics';

import ALOJAMIENTOS_DATA from '../../data/alojamientos.json';

import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router-dom";
import GalleryContainer from '../gallery/GalleryContainer';

const Product = ({images}) => {

  const { id } = useParams();

  const [dataProducto] = useFetch(
    `http://localhost:8080/productos/${id}`
  );

  const [dataCategoria] = useFetch(
    `http://localhost:8080/categorias/${id}`
  );


  const nombre = dataProducto && dataProducto.nombre;
  const titulo = dataProducto && dataProducto.titulo;
  const descripcion = dataProducto && dataProducto.descripcion;
  const direccion = dataProducto && dataProducto.direccion;
  const politicaDeCancelacion = dataProducto && dataProducto.politica_de_cancelacion;
  const politicaDeSaludYSeguridad = dataProducto && dataProducto.politica_de_salud_y_seguridad;
  const normasDeUso = dataProducto && dataProducto.politica_de_uso;

  const categoria = dataCategoria && dataCategoria.titulo.toUpperCase();

  return (
    <div className='container'>
        <HeaderProduct category={category} title={nameProduct}/>
        <LocationProduct location={location}/>
        <DescriptionProduct title={ALOJAMIENTOS_DATA[0].titleDescription} description={ALOJAMIENTOS_DATA[0].description} />
        <Features 
        // pasar features como props
        />
        <Politics normas={normasDeUso} politicaSalud={politicaDeSaludYSeguridad} politicaCancelacion={politicaDeCancelacion}/>
    </div>
  )
}

export default Product;