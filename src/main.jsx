import { createRoot } from "react-dom/client";
import "./index.css";

import AuthProvider from "./Components/Provider/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import Router from "./Components/Route/Router.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={Router} />
  </AuthProvider>
);
