import { Outlet } from "react-router-dom";

import Nav from "../Pages/Nav&Footer/Nav";
import Footer from "../Pages/Nav&Footer/Footer";

const Layout = () => {
  return (
    <div className="md:mx-28 font-meri bg-white">
      <Nav />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
