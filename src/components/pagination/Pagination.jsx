import React, { useState, useEffect, useContext } from "react";
import FilterContext from "../../context/FilterContext";

import ReactPaginate from "react-paginate";
import Icon from "../global/Icon";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./pagination.module.css";
import useFetch from "../../hooks/useFetch";
import Cards from "../cards/Cards";
import format from "date-fns/format";
import URL_BASE from "../global/getUrlBase";

const Paginate = ({ itemsPerPage }) => {
  const { valuesForm, selectedCategory } = useContext(FilterContext);

  const category = selectedCategory.id && selectedCategory.id;
  const {startDate, endDate} = valuesForm.date; 
  const checkIn = startDate !== null ? format(startDate, "yyyy-MM-dd") : null;
  const checkOut = endDate !== null ? format(endDate,  "yyyy-MM-dd") : null;
  const city = valuesForm.id && valuesForm.id;
  let search;

  if(!city && !category && !checkIn && !checkOut){
    search = "/random"
  } else if (category && !city) {
    search = `?categoria=${category}`
  } else if (checkIn && checkOut && city) {
    search = `?fechaInicio=${checkIn}&fechaFin=${checkOut}&ciudad=${city}`
  } else if (checkIn && checkOut && !city) {
    search = `?fechaInicio=${checkIn}&fechaFin=${checkOut}`
  } else if (city) {
    search = `?ciudad=${city}`
  } 
  
  let [items] = useFetch(`${URL_BASE}/productos${search}`);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items && items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items && items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Cards data={currentItems} />
      <ReactPaginate
        previousLabel={<Icon css={styles.iconPagination} icon={faArrowLeft} />}
        nextLabel={<Icon css={styles.iconPagination} icon={faArrowRight} />}
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
