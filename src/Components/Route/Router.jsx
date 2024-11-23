import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        element: <Signup />,
      },       
      {
        path: "login",
        element: <Login />,
      },
    
      {
        path: "*",
        element: <Error />,
      }
    ],
  }
]);

export default Router;