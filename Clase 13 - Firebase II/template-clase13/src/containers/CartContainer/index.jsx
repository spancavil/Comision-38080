import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvider';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const Cart = () => {

  const {cart, removeItem, clearCart} = useContext(Shop);

  const renderImage = (image) => {
    return(
      <img src={image.value} alt="cart-product" style={{height: '120px'}}></img>
    )
  }

  const renderRemoveButton = (item) => {
    const product = item.value
    return (
      <Button onClick={()=> removeItem(product)} variant="contained" color="error">
        Remove
      </Button>
    )
  }

  const columns = [
    { field: 'image', headerName: 'Image', width: 250, renderCell: renderImage},
    { field: 'title', headerName: 'Product', width: 450 },
    { field: 'quantity', headerName: 'Quantity', width: 80 },
    {
      field: 'remove',
      headerName: 'Remove',
      renderCell: renderRemoveButton,
      width: 120,
    },
  ];

  //Vamos a asignar un array con cada fila de la tabla, utilizando el cart
  const filas = []
  cart.forEach(item => {
    filas.push({
      id: item.id,
      image: item.image,
      title: item.title,
      quantity: item.quantity,
      remove: item,
    })
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={filas}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        rowHeight={'150px'}
      />
      <Button onClick={clearCart} color="error" variant="outlined">Clear cart</Button>
    </div>
  );
}

export default Cart;