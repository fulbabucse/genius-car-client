import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "home", element: <Home></Home> },
      { path: "about", element: <About></About> },
    ],
  },
]);

export default router;
