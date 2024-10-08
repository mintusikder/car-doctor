import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Social/Login";
import Register from "../pages/Social/Register";
import Checkout from "../pages/Checkout/Checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
    ],
  },
]);
