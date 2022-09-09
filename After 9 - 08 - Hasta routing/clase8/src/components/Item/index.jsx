import React from 'react';
import './styles.scss';
import {useNavigate} from 'react-router-dom';

//Corresponde a la card del producto
const Item = ({product}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail/${product.id}`)
  }

  return (
    <div className='card-container' onClick={handleNavigate}>
      <img className="card-img" src={product.thumbnail} width={250} alt="product"/>
      <h1 className='card-title'>{product.title}</h1>
      <span>${product.price}</span>
    </div>
  )
}

export default Item