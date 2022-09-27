import React, { useState } from 'react'
import { createContext } from "react";

//Primero declara el context
export const Shop = createContext();

//Paso dos, crear el provider (proveedor) que me va a envolver a la aplicación
const ShopProvider = ({children}) => {
    
    //Dentro del context irían: estados, efectos y funciones auxiliares
    const [cart, setCart] = useState([])

    const addItem = (item) => {

        const productoRepetido = isInCart(item.id);
        console.log(productoRepetido);
        if (productoRepetido) {
            const cartModified = cart.map(product => {
                if (product.id === item.id) {
                    product.quantity += item.quantity
                    return product
                }
                return product
            })
            setCart(cartModified)
        } else {
            const cartModificado = [...cart, item]
            setCart(cartModificado)
        }

    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    //Completar la lógica
    const removeItem = (itemToRemove) => {
        const filteredProducts = cart.filter(item => item !== itemToRemove);
        setCart(filteredProducts)
    }

    const clearCart = () => {
        setCart([]);
    }

    // const [mensaje, setMensaje] = useState("Hola")

    return (
        <Shop.Provider value={{ cart, addItem, removeItem, clearCart}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider;