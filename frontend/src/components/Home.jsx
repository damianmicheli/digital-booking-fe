import React from 'react'
import Buscador from './buscador/Buscador'
import CardsCategorias from './categorias/CardsCategorias'
import CATEGORIAS_DATA from '../data/categorias.json';
import Cards from './listado/Cards';
import ALOJAMIENTOS_DATA from '../data/alojamientos.json';

const Home = () => {
  return (
    <>
        <Buscador />
        <CardsCategorias items={CATEGORIAS_DATA}/>
        <Cards items={ALOJAMIENTOS_DATA}/>
    </>
  )
}

export default Home