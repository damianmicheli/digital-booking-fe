import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
// import { getDateFormat } from "../search/content/getDateFormat";
import ReactPaginate from "react-paginate";
import Icon from "../global/Icon";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./pagination.module.css";
import useFetch from "../../hooks/useFetch";
import Cards from "../cards/Cards";

const Paginate = ({ itemsPerPage }) => {
  const { valuesForm, selectedCategory} = useContext(FilterContext);

  const category = selectedCategory.id && selectedCategory.id;
  const city = valuesForm.id && valuesForm.id;
  let search;

  if(!city && !category){
    search = "random"
  } else if (category && !city) {
    search = `categoria/${category}`
  } else if (city) {
    search = `ciudad/${city}`
  }

  let [items] = useFetch(`http://localhost:8080/productos/${search}`);

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
