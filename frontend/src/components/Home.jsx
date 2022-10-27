import React from 'react'
import Buscador from './buscador/Buscador'
import CardsCategorias from './categorias/CardsCategorias'
import CATEGORIAS_DATA from '../data/categorias.json';

const Home = () => {
  return (
    <>
        <Buscador />
        <CardsCategorias items={CATEGORIAS_DATA}/>
    </>
  )
}

export default Home