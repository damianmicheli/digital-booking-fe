import React from 'react';
import Card  from './Card';
import styles from './cards.module.css';

const Cards = ({ items }) => {
  return (
    <div className={styles.container}>
      <h2>Recomendaciones</h2>
      <div className={styles.cardsContainer}>
        {items && items.map(producto => 
                <Card
                    id={producto.id}
                    img={'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                    category={'CASA'}
                    title={producto.nombre} 
                    location={producto.direccion} 
                    //en realidad no es direccion, iria ciudad
                    description={producto.descripcion} 
                />
        )}
      </div>
    </div>
  )
}

export default Cards;