import React from 'react';

import Buscador from './search/Search';
import CardsCategories from './categories/CardsCategories';
import Cards from './cards/Cards';

import useFetch from "../hooks/useFetch";


const Home = () => {

  const [categorias] = useFetch('http://localhost:8080/categorias');
  const [productos] = useFetch('http://localhost:8080/productos'); 

  return (
    <>
        <Buscador />
        <CardsCategories items={categorias}/>
        <Cards data={productos}/>
    </>
  )
}

export default Home