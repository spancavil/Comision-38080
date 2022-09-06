import React from 'react'

//Corresponde a la card del producto
const Item = ({product}) => {
  return (
    <div>
      <img src={product.image} width={250} alt="product"/>
      <h1>{product.title}</h1>
    </div>
  )
}

export default Item