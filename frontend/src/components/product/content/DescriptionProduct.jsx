import React from 'react';
import styles from './descriptionProduct.module.css';

const DescriptionProduct = ( {title, description, ciudad} ) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{`${title} ${ciudad}`}</h1>
        <p className={styles.description}>
          {description}
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eaque, deleniti quae sequi beatae quo ad libero quasi magni quas maiores ea culpa pariatur possimus aliquam molestias exercitationem officia distinctio.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eaque, deleniti quae sequi beatae quo ad libero quasi magni quas maiores ea culpa pariatur possimus aliquam molestias exercitationem officia distinctio.
        </p>
    </div>
  )
}

export default DescriptionProduct