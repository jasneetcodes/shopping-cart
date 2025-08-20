
import { Link } from "react-router-dom"

export default function Nav(props){



    return(<ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="shop">Shop</Link></li>
        <li><Link to="cart">Cart: </Link>{props.cart.length}</li>
    </ul>)
}