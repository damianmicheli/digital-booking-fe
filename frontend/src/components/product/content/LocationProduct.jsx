import React from 'react';
import styles from './locationProduct.module.css';
import Icon from '../../global/Icon';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const LocationProduct = ({ location }) => {
  return (
    <div className={styles.container}>
        <Icon css={styles.icon} icon={faLocationDot} />
        <p className={styles.location}>{location}</p>
    </div>
  )
}

export default LocationProduct