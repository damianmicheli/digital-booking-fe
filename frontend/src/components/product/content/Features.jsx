import React from 'react';
import styles from './features.module.css';
import Icon from '../../global/Icon';
import { faCar, faKitchenSet, faPaw, faSnowflake, faSwimmer, faTv, faWifi } from '@fortawesome/free-solid-svg-icons';

const Features = ({ features }) => {
  return (
    <div className={styles.container}>
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>¿Qué ofrece este lugar?</h1>
            <hr className={styles.hr}/>
        </div>
        <div className={styles.featuresContainer}>
            <div className={styles.item}>
                <Icon css={styles.icon} icon={faKitchenSet}/>
                <p className={styles.p}>Cocina</p>
            </div>
            <div className={styles.item}>
                <Icon css={styles.icon} icon={faTv}/>
                <p className={styles.p}>Televisión</p>
            </div>
            <div className={styles.item}>
                <Icon css={styles.icon} icon={faSnowflake}/>
                <p className={styles.p}>Aire acondicionado</p>
            </div>
            <div className={styles.item}>
                <Icon css={styles.icon} icon={faPaw}/>
                <p className={styles.p}>Apto mascotas</p>
            </div>
            <div className={styles.item}>
                <Icon css={styles.icon} icon={faCar}/>
                <p className={styles.p}>Estacionamiento gratuito</p>
            </div>
            <div className={styles.item}>
                <Icon css={styles.icon} icon={faSwimmer}/>
                <p className={styles.p}>Pileta</p>
            </div>
            <div className={styles.item}>
                <Icon css={styles.icon} icon={faWifi}/>
                <p className={styles.p}>Wifi</p>
            </div>
        </div>
    </div>
  )
}

export default Features;