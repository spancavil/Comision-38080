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
                <Link to="/price/0-2000">Precio: 0-2000</Link>
            </li>
            <li>
                <Link to="/price/2000-8000">Precio: 2000-8000</Link>
            </li>
            <li>
                <Link to="/price/8000">Precio: 8000-infinito</Link>
            </li>
            <CartWidget/>
            <Select handleColor={onChangeColor}/>
        </ul>
    );
};

export default NavBar;
