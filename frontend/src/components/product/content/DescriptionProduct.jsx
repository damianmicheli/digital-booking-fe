import React from 'react';
import styles from './descriptionProduct.module.css';

const DescriptionProduct = ( {title, description} ) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>
          {description}
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores quis, ipsam officia dolorum vero cupiditate ipsa praesentium sequi adipisci, hic explicabo laboriosam necessitatibus ullam, corrupti animi voluptates. Autem, consectetur magni praesentium distinctio similique est perspiciatis expedita delectus nulla excepturi molestiae odio, impedit facilis atque voluptatum recusandae, sapiente ex corrupti.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quisquam, voluptatum sit facere officiis quis. Ullam quibusdam vitae nostrum illo.
        </p>
    </div>
  )
}

export default DescriptionProduct