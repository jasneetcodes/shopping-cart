
import { useOutletContext } from "react-router-dom";

export default function Product(props){

    const [cart, setCart] = useOutletContext();

    function submitHandler (){
        setCart([...cart, props]);
    }
    return(<div key={props.id}>
        <img src={props.image}></img>
        <h1>{props.title}</h1>
        <h2>{props.price} $</h2>
        <button onClick={submitHandler}>Add to cart</button>
    </div>)
}