import React from "react";
import CartWidget from "../CartWidget";
import Select from "../Select";
import "./styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AuthContainer from "../../containers/AuthContainer";

const NavBar = () => {
    //Nombre del estado, setNombreDelEstado
    const [navColor, setNavColor] = useState("#f3f3f3");
    //Consumimos el context desde la NavBar
    // const value = useContext(Shop)

    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);

    const onChangeColor = (event) => {
        const color = event.target.value;
        setNavColor(color);
    };

    const handleLogin = () => {
        setLoginModal(true);
    };

    const handleSignup = ()=> {
        setSignupModal(true);
    }

    return (
        <>
            <ul
                style={{
                    backgroundColor: navColor,
                }}
            >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/category/men's clothing">Men's clothing</Link>
                </li>
                <li>
                    <Link to="/category/women's clothing">
                        Women's clothing
                    </Link>
                </li>
                <li>
                    <Link to="/category/electronics">Electronics</Link>
                </li>
                <li>
                    <Link to="/category/jewelery">Jewelery</Link>
                </li>
                <div className="buttons-container">
                    <Button
                        size="medium"
                        variant="outlined"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                    <Button
                        size="medium"
                        variant="contained"
                        onClick={handleSignup}
                    >
                        Signup
                    </Button>
                </div>
                <CartWidget />
                {/* <span>{value.mensaje}</span> */}
                <Select handleColor={onChangeColor} />
            </ul>
            {(loginModal || signupModal) && (
                    <AuthContainer
                        handleClose={() => {
                            setLoginModal(false);
                            setSignupModal(false);
                        }}
                        login={loginModal}
                        signUp={signupModal}
                    />
                )}
        </>
    );
};

export default NavBar;
