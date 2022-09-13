import React from 'react'
import ItemCount from '../ItemCount';
import './styles.scss';

const ItemDetail = ({product}) => {
  return (
    <div className='detail-container'>
        <img className="detail-img"src={product.image} alt="product-detail"/>
        <div className='detail-subcontainer'>
          <h1>{product.title}</h1>
          <ItemCount/>
        </div>
    </div>
  )
}

export default ItemDetail