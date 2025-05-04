import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    },
    {
        path:'*',
        element:<ErrorPage/>
    }
])
export default router;