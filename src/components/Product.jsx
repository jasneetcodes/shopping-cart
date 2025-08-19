
import { useOutletContext } from "react-router-dom";

export default function Product(props){

    const [cart, setCart] = useOutletContext();

    function submitHandler (){
        setCart([...cart, {props}]);
    }
    return(<div>
        <img src={props.image}></img>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <button onClick={submitHandler}>Add to cart</button>
    </div>)
}