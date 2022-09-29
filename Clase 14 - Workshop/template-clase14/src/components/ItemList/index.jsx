import React from 'react';
import Item from '../Item';
import './styles.scss';

const ItemList = ({products}) => {

  console.log(products);
  return (
    <div className='item-container'>
        {products.map(product => {
            return <Item key={product.id} product={product}/>
        })}
    </div>

  )
}

export default ItemList