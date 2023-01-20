import React, { useContext} from "react";
import CardCategory from "./CardCategory";
import styles from "./cardsCategories.module.css";
import FilterContext from '../../context/FilterContext';

const CardsCategorias = ({ items }) => {

  const { setSelectedCategory, setValuesForm } = useContext(FilterContext);

  const handleClick = (title, id) => {
    setSelectedCategory({
      title: title,
      id: id
    });
    setValuesForm({
      city: null,
      id: null,
      date: {
        startDate: null,
        endDate: null
      }
    })
  }
  
  return (
    <div className={styles.container}>
      <h2>Buscar por tipo de alojamiento</h2>
      <div className={styles.containerCategory}>
        {items && items.map((category) => (
          <div onClick={() => handleClick(category.titulo, category.id)} key={category.id}>
            <CardCategory
              img={category.url}
              category={category.titulo}
              description={category.descripcion}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsCategorias;
