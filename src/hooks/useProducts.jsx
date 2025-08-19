import { useState, useEffect } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if(response.status >= 400){
                    throw new Error("Server Error");
                }
                return response.json();
            })
            .then((response) => setProducts(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(true));
    }, []);

    return {products, error, loading};
}

export default useProducts;

