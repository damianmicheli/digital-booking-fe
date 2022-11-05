import React from 'react';

import HeaderProduct from './content/HeaderProduct';
import LocationProduct from './content/LocationProduct';
import DescriptionProduct from './content/DescriptionProduct';
import Features from './content/Features';
import Politics from './content/Politics';

// import CATEGORIAS_DATA from '../../data/categorias.json';
import ALOJAMIENTOS_DATA from '../../data/alojamientos.json';

import useFetch from '../../hooks/useFetch';

// import { useParams } from "react-router-dom";


const Product = () => {

  // const { id } = useParams();

  const [dataProducto] = useFetch(
    `http://localhost:8080/productos/1`
  );

  const [dataCategoria] = useFetch(
    `http://localhost:8080/categorias/1`
  );

  const nombre = dataProducto && dataProducto.nombre;
  const titulo = dataProducto && dataProducto.titulo;
  const categoria = dataCategoria && dataCategoria.titulo.toUpperCase();

  return (
    <div className='container'>
        <HeaderProduct category={categoria} title={titulo}/>
        <LocationProduct location={nombre}/>
        <DescriptionProduct title={ALOJAMIENTOS_DATA[0].titleDescription} description={ALOJAMIENTOS_DATA[0].description} />
        <Features 
        // pasar features como props
        />
        <Politics 
        // pasar politics como props
        />
    </div>
  )
}

export default Product;