import Product from "./Product"



export default function Shop(){

    return(<div>
        {[...Array(10)].map((e,i) => <Product key={i} />)}
    </div>)
}