import React from 'react';
import styles from './descriptionProduct.module.css';

const DescriptionProduct = ( {title, description, ciudad} ) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>
          {description}
        </p>
    </div>
  )
}

export default DescriptionProduct