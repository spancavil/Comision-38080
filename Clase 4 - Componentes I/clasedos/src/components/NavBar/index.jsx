import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';

const NavBar = ({categories, temp = "10"}) => {

  return (
    <div>
      <p>Navbar</p>
      <p>{temp} °C</p>
      <CartWidget/>
    </div>

  )
}

export default NavBar;