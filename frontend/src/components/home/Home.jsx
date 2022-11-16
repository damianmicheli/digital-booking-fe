import React from "react";

import Search from "../search/Search";
import CardsCategories from "../categories/CardsCategories";

import useFetch from "../../hooks/useFetch";

import Pagination from "../pagination/Pagination";

import { FilterContextProvider } from "../../context/FilterContext";

const Home = () => {

  const [categorias] = useFetch("http://localhost:8080/categorias");

  return (
    <>
      <FilterContextProvider>
        <Search />
        <CardsCategories items={categorias} />
        <Pagination itemsPerPage={8} />
      </FilterContextProvider>
    </>
  );
};

export default Home;
