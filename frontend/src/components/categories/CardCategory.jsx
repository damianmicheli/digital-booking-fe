import React from 'react';
import styles from './cardCategory.module.css';

const CardCategory = ({ category, img, description }) => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <img className={styles.img} src={img} alt="" />
        </div>
        <div className={styles.textContainer}>
            <h3>{category}</h3>
            <p className='heading4'>{`${description}`}</p>
        </div>
    </div>
  )
}

export default CardCategory;