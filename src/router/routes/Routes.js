import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../../Dashboard/Products/AddProducts/AddProducts";
import DashboardHome from "../../Dashboard/DashboardHome/DashboardHome";
import Dashboard from "../../layouts/Dashboard";
import Root from "../../layouts/Root";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/User/Login/Login";
import Register from "../../pages/User/Register/Register";
import AllProducts from "../../Dashboard/Products/AllProducts/AllProducts";
import Update from "../../Dashboard/Products/Update/UpdateProduct";
import AddService from "../../Dashboard/Services/AddService/AddService";
import AllServices from "../../Dashboard/Services/AllServices/AllServices";
import UpdateService from "../../Dashboard/Services/update/UpdateService";
import Profile from "../../pages/User/Profile/Profile";
import Checkout from "../../pages/Checkout/Checkout";
import Orders from "../../pages/Orders/Orders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Service from "../../pages/Service/Service";
import Contact from "../../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "home", element: <Home></Home> },
      { path: "about", element: <About></About> },
      {
        path: "orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
      { path: "profile", element: <Profile></Profile> },
      { path: "service", element: <Service></Service> },
      { path: "contact", element: <Contact></Contact> },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      { path: "home", element: <DashboardHome></DashboardHome> },
      {
        path: "add-product",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "products",
        loader: () => fetch("http://localhost:5000/products"),
        element: <AllProducts></AllProducts>,
      },
      {
        path: "product/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
        element: <Update></Update>,
      },
      {
        path: "add-service",
        element: <AddService></AddService>,
      },
      {
        path: "services",
        loader: () => fetch("http://localhost:5000/services"),
        element: <AllServices></AllServices>,
      },
      {
        path: "service/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <UpdateService></UpdateService>,
      },
    ],
  },
]);

export default router;
