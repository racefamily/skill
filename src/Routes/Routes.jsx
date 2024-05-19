import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Order from "../pages/Order/Order/Freeclass";
import Menu from "../pages/Menu/Menu/OurEvent";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Class from "../pages/Shared/Secret/Class";
import OurEvent from "../pages/Menu/Menu/OurEvent";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: 'OurEvent', 
          element: <OurEvent></OurEvent>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'Class',
          element: <PrivateRoute><Class></Class></PrivateRoute>
        }
      ]
    },
  ]);