import React from 'react';
import CardCategoriaItem from './CardCategoriaItem';
import styles from './cardsCategorias.module.css';

const CardsCategorias = ({ items }) => {
  return (
    <div className={styles.container}>
        {items.map(alojamiento => 
                <CardCategoriaItem 
                    category={alojamiento.category}
                    img={alojamiento.img}
                />
            )}
    </div>
  )
}

export default CardsCategorias;