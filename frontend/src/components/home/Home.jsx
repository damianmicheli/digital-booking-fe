import React from 'react';

import Search from '../search/Search';
import CardsCategories from '../categories/CardsCategories';
import Cards from '../cards/Cards';

import useFetch from "../../hooks/useFetch";
import Pagination from '../paginate/Pagination';

const Home = () => {

  const [categorias] = useFetch('http://localhost:8080/categorias');
  // const [random] = useFetch('http://localhost:8080/productos/random'); 

  return (
    <>
        <Search />
        <CardsCategories items={categorias}/>
        <Pagination itemsPerPage={8}/>
    </>
  )
}

export default Home;