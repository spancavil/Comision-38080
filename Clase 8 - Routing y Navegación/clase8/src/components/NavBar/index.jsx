import React from "react";
import CartWidget from "../CartWidget";
import Select from "../Select";
import "./styles.css";
import { useState } from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {

    //Nombre del estado, setNombreDelEstado
    const [navColor, setNavColor] = useState("#f3f3f3")

    const onChangeColor = (event) => {
        const color = event.target.value;
        setNavColor(color)
    }

    console.log(navColor);

    return (
        <ul style={{
            backgroundColor: navColor
        }}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/category/men's clothing">Men's clothing</Link>
            </li>
            <li>
                <Link to="/category/women's clothing">Women's clothing</Link>
            </li>
            <li>
                <Link to="/category/electronics">Electronics</Link>
            </li>
            <li>
                <Link to="/category/jewelery">Jewelery</Link>
            </li>
            <CartWidget/>
            <Select handleColor={onChangeColor}/>
        </ul>
    );
};

export default NavBar;
