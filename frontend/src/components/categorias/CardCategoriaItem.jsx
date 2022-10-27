import React from 'react';
import styles from './cardCategoriaItem.module.css';

const CardCategoriaItem = ({ category, img }) => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <img className={styles.img} src={img} alt="" />
        </div>
        <div className={styles.textContainer}>
            <h2 className='heading2'>{category}</h2>
            <p className='heading4'>807.105 hoteles</p>
        </div>
    </div>
  )
}

export default CardCategoriaItem;