import React from 'react';

import Buscador from './buscador/Buscador';
import CardsCategorias from './categorias/CardsCategorias';
import Cards from './listado/Cards';

import ALOJAMIENTOS_DATA from '../data/alojamientos.json';
import useFetch from "../hooks/useFetch";


const Home = () => {

  const [categorias] = useFetch('http://localhost:8080/categorias');
  // const [productos] = useFetch('http://localhost:8080/productos'); 

  return (
    <>
        <Buscador />
        <CardsCategorias items={categorias}/>
        <Cards items={ALOJAMIENTOS_DATA}/>
    </>
  )
}

export default Home