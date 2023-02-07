import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Admin from "../pages/Admin";
import Cart from "../pages/Cart";
import Check from "../pages/Check";
import Home, { HomeLoader } from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import UserCourses from "../pages/UserCourses";

export const router = createBrowserRouter( [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
                loader: HomeLoader,
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "checkout",
                element: <Check />,
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "admin",
                element: <Admin />
            },
            {
                path: "courses",
                element: <UserCourses />
            }
        ]
    }
] )