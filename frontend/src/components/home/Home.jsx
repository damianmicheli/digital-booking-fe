import React from 'react';

import Search from '../search/Search';
import CardsCategories from '../categories/CardsCategories';

import useFetch from "../../hooks/useFetch";
import Pagination from '../pagination/Pagination';

const Home = () => {

  const [categorias] = useFetch('http://localhost:8080/categorias');

  return (
    <>
        <Search />
        <CardsCategories items={categorias}/>
        <Pagination itemsPerPage={8}/>
    </>
  )
}

export default Home;