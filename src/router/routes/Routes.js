import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../layouts/Dashboard";
import Root from "../../layouts/Root";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/User/Login/Login";
import Register from "../../pages/User/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "home", element: <Home></Home> },
      { path: "about", element: <About></About> },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
  },
]);

export default router;
