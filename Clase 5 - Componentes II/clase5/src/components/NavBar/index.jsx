import React from "react";
import CartWidget from "../CartWidget";
import Select from "../Select";
import "./styles.css";

const NavBar = () => {

    const onChangeColor = (event) => {
        console.log(event);
    }

    return (
        <ul>
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
