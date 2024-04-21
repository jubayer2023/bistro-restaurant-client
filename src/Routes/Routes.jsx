import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/HomePage/Home/Home";

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
    ],
  },
]);
