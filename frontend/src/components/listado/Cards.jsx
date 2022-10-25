import React from 'react';
import { Card } from './Card';
import styles from './cards.module.css';

const Cards = ({ items }) => {
  return (
    <div className={styles.cardsContainer}>
        {items.map(alojamiento => 
                <Card 
                    img={alojamiento.img}
                    category={alojamiento.category}
                    title={alojamiento.title} 
                    location={alojamiento.location} 
                    description={alojamiento.description} 
                />
            )}
    </div>
  )
}

export default Cards;