import React from 'react';
import CardCategoriaItem from './CardCategoriaItem';
import styles from './cardsCategorias.module.css';

const CardsCategorias = ({ items }) => {
  return (
    <div className={styles.container}>
      <h2>Buscar por tipo de alojamiento</h2>
      <div className={styles.containerCategory}>
        {items.map(alojamiento => 
                <CardCategoriaItem 
                    category={alojamiento.category}
                    img={alojamiento.img}
                />
        )}
      </div>
    </div>
  )
}

export default CardsCategorias;