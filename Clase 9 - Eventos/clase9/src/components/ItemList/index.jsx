import React, {useState} from 'react';
import Item from '../Item';
import Modal from '../Modal';
import './styles.scss';

const ItemList = ({products}) => {

  const [modalShow, setModalShow] = useState(true);

  return (
    <div className='item-container'>
        {products.length ? products.map(product => {
            return <Item key={product.id} product={product}/>
        })
        :
        <h2>Loading...</h2>
      }
      { modalShow ? <Modal handleClose={setModalShow}/> : null}
    </div>
  )
}

export default ItemList