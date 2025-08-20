

import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react"; 
export default function Cart(){

    const [cart, setCart] = useOutletContext();
    const [price, setPrice] = useState(0);

    useEffect(() =>{
        let total = 0;
        cart.forEach((product) =>{
            total = total + product.price;
        })

        setPrice(total.toFixed(2));
    },[cart])
    return(<div>
            <ul>
        {cart.map((product,i) => <li key={i} >{product.title}         {product.price}$</li>)}
    </ul>
    <p>Total: {price}$</p>
        </div>)
}