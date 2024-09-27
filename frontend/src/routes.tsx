import { createBrowserRouter } from "react-router-dom";
import PublicRoutesLayouts from "./PublicAndPrivate/PublicRoutesLayouts";
import PrivateRoutesLayouts from "./PublicAndPrivate/PrivateRoutesLayouts";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import Home from "./pages/public/Home";
import HomeLayouts from "./layouts/public/HomeLayouts";
import AuthLayouts from "./layouts/public/AuthLayouts";
import LayoutHome from "./pages/private/users/layouts/LayoutHome";
import HomeUser from "./pages/private/users/pages/HomeUser";
import Profile from "./pages/private/users/pages/Profile";

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
            path:"home/:id",
            element:<LayoutHome />,
            children:[
                {
                    index:true,
                    
                    element:<HomeUser />
                },{
                    path:"profile",
                    element:<Profile />
                }
            ]
        }]
    }
])


export default router