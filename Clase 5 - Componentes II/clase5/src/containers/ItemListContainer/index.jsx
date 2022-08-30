import React from 'react';
import './styles.scss';

const ItemListContainer = ({greeting}) => {
  return (
    <div className='item-list-container'>
        <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer;