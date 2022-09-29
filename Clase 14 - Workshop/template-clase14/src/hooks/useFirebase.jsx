import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useFirebase = (categoryId) => {

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState("")

    useEffect(()=> {
        (async () => {
            try {
                setLoading(true);
                //Ajustamos la query según el param que viene desde la navegación
                const q = categoryId
                    ? query(
                          collection(db, "products"),
                          where("category", "==", categoryId)
                      )
                    : query(collection(db, "products"));

                //2do realizar el llamado a firebase
                const querySnapshot = await getDocs(q);
                const productosFirebase = [];
                //3ero obtener el "snapshot" con los datos crudos.
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    productosFirebase.push({ id: doc.id, ...doc.data() });
                });
                setProductos(productosFirebase);

            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        })();

    }, [categoryId])

    return [loading, productos, error];
};

export default useFirebase;
