import React, { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';
import Item from '../Item';
import './styles.scss';

const ItemList = ({products}) => {

  const {setMensaje} = useContext(Shop);

  const onChangeMensaje = () => {
    setMensaje("Chau")
  }

  return (
    <div className='item-container'>
        {products.length ? products.map(product => {
            return <Item key={product.id} product={product}/>
        })
        :
        <h2>Loading...</h2>
      }
      <button onClick={onChangeMensaje}>Cambiar mensaje NavBar</button>
    </div>
  )
}

export default ItemList