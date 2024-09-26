import { createBrowserRouter } from "react-router-dom";
import PublicRoutesLayouts from "./PublicAndPrivate/PublicRoutesLayouts";
import PrivateRoutesLayouts from "./PublicAndPrivate/PrivateRoutesLayouts";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import HomeLoggedIn from "./pages/private/HomeLoggedIn";
import Home from "./pages/public/Home";
import HomeLayouts from "./layouts/public/HomeLayouts";
import AuthLayouts from "./layouts/public/AuthLayouts";


const router = createBrowserRouter([
    {
        path:"/",
        element:<PublicRoutesLayouts/>,
        children:[
           {
            path:"home",
            element:<HomeLayouts />,
            children:[{
                index:true,
                element:<Home />
            }]

           },{
            path:"auth",
            element:<AuthLayouts />,
            children:[
                {
                    path:"login",
                    element:<Login />
                },{
                    path:"register",
                    element:<Register />
                }
            ]
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