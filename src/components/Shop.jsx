import Product from "./Product"
import useProducts from "../hooks/useProducts"

export default function Shop(){

    
    const {products, error, loading} = useProducts();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered. Please try again later.</p>

    return(<div className="products">
        {products.map((product) => <Product 
        key={product.id} 
        id={product.id}
        title={product.title} 
        price={product.price} 
        image={product.image} />)}
    </div>)
}


