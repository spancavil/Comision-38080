import React, { useEffect, useState } from "react";
// import { products } from '../../data/products';
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([])

    const { productPrice } = useParams();

    console.log(productPrice);

    useEffect(() => {
        (async () => {
            try {
                if (productPrice) {
                    switch (productPrice) {
                        case "0-2000":
                            const productosFiltrados1 = productos.filter(producto => producto.price <= 2000);
                            setProductosFiltrados(productosFiltrados1)
                            break;
                        case "2000-8000":
                            const productosFiltrados2 = productos.filter(producto => producto.price > 2000 && producto.price <= 8000);
                            setProductosFiltrados(productosFiltrados2)
                            break;
                        case "8000":
                            const productosFiltrados3 = productos.filter(producto => producto.price > 8000);
                            setProductosFiltrados(productosFiltrados3)
                            break;
                        default:
                            setProductosFiltrados(productos)
                            break;
                    }
                } else {
                    if(productos.length === 0){
                        const response = await fetch(
                            "https://api.mercadolibre.com/sites/MLA/search?category=MLA109026&limit=20"
                        );
                        const productos = await response.json();
                        setProductos(productos.results);
                        setProductosFiltrados(productos.results);
                    }
                    /* const response = await fetch(
                      "https://fakestoreapi.com/products"
                  );
                  const productos = await response.json();
                  setProductos(productos); */
                }
                /* const response = await fetch ('/mocks/zapatillas.json');
                const data = await response.json();
                console.log(data); */
            } catch (error) {
                console.log(error);
            }
        })();
    }, [productPrice, productos]);

    console.log(productos);
    console.log(productosFiltrados);

    return <ItemList products={productosFiltrados} />;
};

export default ItemListContainer;
