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
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/UserDasboard/AddItems/AddItems";
import ManageItem from "../pages/UserDasboard/ManageItem/ManageItem";
import UpdateItem from "../pages/UserDasboard/UpdateItem/UpdateItem";
import Payment from "../pages/UserDasboard/Payment/Payment";
import PaymentHistory from "../pages/UserDasboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/UserDasboard/UserHome/UserHome";
import AdminHome from "../pages/UserDasboard/AdminHome/AdminHome";

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
        path: "/dashboard/userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard/carts",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/carts/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      // admin routes here
      {
        path: "/dashboard/adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageItems",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
