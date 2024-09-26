import { createBrowserRouter } from "react-router-dom";
import PublicRoutesLayouts from "./PublicAndPrivate/PublicRoutesLayouts";
import PrivateRoutesLayouts from "./PublicAndPrivate/PrivateRoutesLayouts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeLoggedIn from "./pages/HomeLoggedIn";
import HomeNotLogged from "./pages/HomeNotLogged";



const router = createBrowserRouter([
    {
        path:"/",
        element:<PublicRoutesLayouts />,
        children:[
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/register",
                element:<Register />
            },
            {
                path:"home-signed-out",
                element:<HomeNotLogged />
            }
        ]
    },{
        path:"/",
        element:<PrivateRoutesLayouts />,
        children:[{
            path:"/home-signed-in",
            element:<HomeLoggedIn />
        }]
    }
])


export default router