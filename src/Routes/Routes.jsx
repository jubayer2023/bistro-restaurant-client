import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/HomePage/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import TestPrivate from "../pages/Shared/TestPrivate";
import DashBoard from "../pages/UserDasboard/Dashboard/Dashboard";
import Cart from "../pages/UserDasboard/Cart/Cart";
import AllUser from "../pages/UserDasboard/AllUser/AllUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>404 page || Error</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/test",
        element: (
          <PrivateRoute>
            <TestPrivate></TestPrivate>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/carts",
        element: <Cart></Cart>,
      },
      // admin routes
      {
        path: "/dashboard/users",
        element: <AllUser></AllUser>,
      },
    ],
  },
]);
