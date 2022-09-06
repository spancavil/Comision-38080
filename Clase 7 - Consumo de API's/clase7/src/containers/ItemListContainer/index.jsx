import React, { useEffect, useState } from 'react';
import './styles.scss';
// import { products } from '../../data/products';
import ItemList from '../../components/ItemList';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])

  //La promise se ejecuta una única vez cuando se monta el componente
  useEffect(()=> {
    
    (async ()=> {
    /* const obtenerProductos = new Promise ((accept, reject)=> {
        setTimeout(()=> {
          accept(products)
        }, 3000);
      })
       */
        /* obtenerProductos
          .then((result) => {
            console.log(result)
            setProductos(result)
          })
          .catch((error) => console.log(error)) */
        try {
          const response = await fetch("https://fakestoreapi.com/products");
          const productos = await response.json();
          setProductos(productos);
        } catch (error) {
          console.log(error);
        }

      })()

  }, [])

  console.log(productos)

  return (
    <div className='item-list-container'>
        <ItemList products={productos}/>
    </div>
  )
}

export default ItemListContainer;