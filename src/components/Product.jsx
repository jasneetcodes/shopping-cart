
export default function Product(props){


    return(<div>
        <img src={props.image}></img>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <button>Add to cart</button>
    </div>)
}