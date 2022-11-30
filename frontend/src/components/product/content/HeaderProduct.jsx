import React from 'react';

import styles from './headerProduct.module.css';
import arrowBackHome from '../../../assets/img/arrowBackHome.png';

import { Link } from 'react-router-dom';

const HeaderProduct = ({ category, title, path }) => {
  return (
    <div className={styles.container}>
        <div className={styles.titleCategory}>
            <h4 className={styles.category}>{category}</h4>
            <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.backHomeBtn}>
            <Link to={path}>
                <img src={arrowBackHome} className={styles.arrowBackHome} alt="arrow-back-home" />
            </Link>
        </div>
    </div>
  )
}

export default HeaderProduct;