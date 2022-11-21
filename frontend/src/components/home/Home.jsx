import React from "react";

import Search from "../search/Search";
import CardsCategories from "../categories/CardsCategories";

import useFetch from "../../hooks/useFetch";

import Pagination from "../pagination/Pagination";

import { FilterContextProvider } from "../../context/FilterContext";
import { FavProvider } from "../../context/FavContext";

const Home = () => {
  
  const [categorias] = useFetch("http://localhost:8080/categorias");

  return (
    <>
      <FilterContextProvider>
        <Search />
        <CardsCategories items={categorias} />
        <FavProvider>
          <Pagination itemsPerPage={8} />
        </FavProvider>
      </FilterContextProvider>
    </>
  );
};

export default Home;
