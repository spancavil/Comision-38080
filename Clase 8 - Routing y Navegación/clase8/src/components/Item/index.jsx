import React from 'react';
import './styles.scss';

//Corresponde a la card del producto
const Item = ({product}) => {
  return (
    <div className='card-container'>
      <img className="card-img" src={product.image} width={250} alt="product"/>
      <h1 className='card-title'>{product.title}</h1>
    </div>
  )
}

export default Item