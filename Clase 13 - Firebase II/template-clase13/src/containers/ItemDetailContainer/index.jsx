import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";
import {useParams} from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams();

    console.log(productId);
    
    //Gestionar la obtención de la data del detalle
    useEffect(()=> {

        const getProducts = async () => {
            try {
                //Genera la referencia al documento
                const docRef = doc(db, "products", productId);

                //Realizamos la petición o el llamado a Firebase
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    setProductDetail({id: docSnap.id, ...docSnap.data()});
                } else {
                // doc.data() will be undefined in this case
                    console.log("No such document!");
                }

                //const productSelected = products.find(product => product.id === productId)
                //const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                //const data = await response.json();

            } catch (error) {
                console.log(error);
            }
        }
        getProducts();

    }, [productId])

    return <ItemDetail product={productDetail}/>;
};

export default ItemDetailContainer;
