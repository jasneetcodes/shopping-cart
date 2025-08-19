import Product from "./Product"
import useProducts from "../hooks/useProducts"


export default function Shop(){

    const {products, error, loading} = useProducts();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered. Please try again later.</p>

    return(<div>
        {products.map((product) => <Product 
        key={product.id} 
        title={product.title} 
        price={product.price} 
        description={product.description}
        image={product.image} />)}
    </div>)
}




//Build Cart component that shares product in cart on nav as well,
//Build atleast 3 test cases to practice React testing library