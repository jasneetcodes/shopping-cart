import Product from "./Product"



export default function Shop(){

    return(<div>
        {[...Array(10)].map((e,i) => <Product key={i} />)}
    </div>)
}



//Build API to get store products
//Build Cart component that shares product in cart on nav as well,
//Build atleast 3 test cases to practice React testing library