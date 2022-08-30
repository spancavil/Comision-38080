import React from "react";
import CartWidget from "../CartWidget";
import Select from "../Select";
import "./styles.css";
import { useState } from 'react';

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
                <a href="/#">Home</a>
            </li>
            <li>
                <a href="/#">News</a>
            </li>
            <li>
                <a href="/#">Contact</a>
            </li>
            <li>
                <a href="/#">About</a>
            </li>
            <CartWidget/>
            <Select handleColor={onChangeColor}/>
        </ul>
    );
};

export default NavBar;
