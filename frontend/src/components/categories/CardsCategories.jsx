import React, { useContext } from "react";
import CardCategory from "./CardCategory";
import styles from "./cardsCategories.module.css";
import { FilterContext } from '../../context/FilterContext';

const CardsCategorias = ({ items }) => {

  const { setSelectedCategory } = useContext(FilterContext);

  const handleClick = (title) => {
    setSelectedCategory(title);
}

  return (
    <div className={styles.container}>
      <h2>Buscar por tipo de alojamiento</h2>
      <div className={styles.containerCategory}>
        {items && items.map((category) => (
          <div onClick={() => handleClick(category.titulo)} key={category.id}>
            <CardCategory
              img={category.url}
              category={category.titulo}
              description="807.105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsCategorias;
