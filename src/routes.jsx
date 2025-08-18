import App from "./App";
import Home from "./components/Home";
import Nav from "./components/Nav";


const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: 'shop', element: <Shop/>
            }
        ]
    },
    
];


export default routes;