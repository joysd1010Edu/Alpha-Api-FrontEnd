import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Error from "../../Pages/Error/Error";
import Package from "../../Pages/Package/Package";
import Payment from "../../Pages/Payment/Payment";
import Privateroute from "../Private_Route/Privateroute";
import Doc from "../../Pages/Doc/Doc";


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
        path: "plan",
        element: <Package />,
      },
      {
        path: "doc",
        element: <Doc />,
      },
    
      {
        path: "payment",
        element: <Privateroute><Payment /></Privateroute>,
      },
    
      {
        path: "*",
        element: <Error />,
      }
    ],
  }
]);

export default Router;
