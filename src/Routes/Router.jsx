import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import ForgotPassword from "../Pages/ForgotPassword";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "./PrivateRoute";

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
            },
            {
                path:'/forgotPassword',
                element:<ForgotPassword/>
            },
            {
                path:'/profile',
                element:
                <PrivateRoute>
                    <MyProfile/>
                </PrivateRoute>
            }
        ]
    },
    {
        path:'*',
        element:<ErrorPage/>
    }
])
export default router;