import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from '../../context/FilterContext';
// import { getDateFormat } from "../search/content/getDateFormat";
import ReactPaginate from "react-paginate";
import Icon from "../global/Icon";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./pagination.module.css";
import useFetch from "../../hooks/useFetch";
import Cards from "../cards/Cards";

const Paginate = ({ itemsPerPage }) => {

  const { valuesForm, selectedCategory } = useContext(FilterContext);

  const categoryName = selectedCategory && selectedCategory;
  const locationName = valuesForm.city && valuesForm.city;

  const [products] = useFetch('http://localhost:8080/productos/random');

  let allItems = products && products.filter(product => product.categoria.titulo === categoryName);

  let itemsRandom = products && products;

  let items = categoryName === null ? itemsRandom && itemsRandom : allItems && allItems;  

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(
      items && 
      items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items && items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = ((event.selected) * itemsPerPage)
    setItemOffset(newOffset);
  };
    
  return (
    <>
      <Cards data={currentItems}/>
      <ReactPaginate
        previousLabel={
          <Icon css={styles.iconPagination} icon={faArrowLeft} />
        }
        nextLabel={
          <Icon css={styles.iconPagination} icon={faArrowRight} />
        }
        breakLabel={"..."}
        pageCount={pageCount}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        containerClassName={styles.containerPagination}
        pageClassName={styles.itemPagination}
        pageLinkClassName={styles.itemLinkPagination}
        activeClassName={styles.activePagination}
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Paginate;
