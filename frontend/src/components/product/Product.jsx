import React, { useEffect } from 'react';

import HeaderProduct from './content/HeaderProduct';
import LocationProduct from './content/LocationProduct';
import DescriptionProduct from './content/DescriptionProduct';
import Features from './content/Features';
import Politics from './content/Politics';

// import CATEGORIAS_DATA from '../../data/categorias.json';
import ALOJAMIENTOS_DATA from '../../data/alojamientos.json';

import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router-dom";
import GalleryContainer from '../gallery/GalleryContainer';

const Product = ({images}) => {

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [dataProduct] = useFetch(
    `http://localhost:8080/productos/${id}`
  );

  const [dataCategory] = useFetch(
    `http://localhost:8080/categorias/${id}`
  )

  const category = dataCategory && dataCategory.titulo;
  const nameProduct = dataProduct && dataProduct.nombre;
  const location = dataProduct && dataProduct.direccion;


  return (
    <div className='container'>
        <HeaderProduct category={category} title={nameProduct}/>
        <LocationProduct location={location}/>
        <GalleryContainer images={images}/>
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