import { NavLink } from "react-router-dom";
import logo from "./../../assets/logo.png";
import useAuth from "../../Components/Hooks/useAuth";
const Nav = () => {
  const { user } = useAuth();

  return (
    <div className=" flex justify-between items-center">
      <div>
        {" "}
        <NavLink to={"/"}>
          <img src={logo} className=" w-28" />
        </NavLink>
      </div>
      <div className=" flex md:gap-10">
        <NavLink to="/" className="group">
          <div className="md:px-5 text-xl font-medium">
            <h1>Home</h1>
          </div>
          <hr className="w-0 border-white group-hover:w-full transition-all duration-500 border-2 group-hover:border-black" />
        </NavLink>
        <NavLink to="/" className="group">
          <div className="md:px-5 text-xl font-medium">
            <h1>Plans</h1>
          </div>
          <hr className="w-0 border-white group-hover:w-full transition-all duration-500 border-2 group-hover:border-black" />
        </NavLink>
        <NavLink to="/" className="group">
          <div className="md:px-5 text-xl font-medium">
            <h1>Documentation</h1>
          </div>
          <hr className="w-0 border-white group-hover:w-full transition-all duration-500 border-2 group-hover:border-black" />
        </NavLink>

        
        {user ? (
          <NavLink to="/" className="group">
          <div className="md:px-5 text-xl font-medium">
            <h1>Documentation</h1>
          </div>
          <hr className="w-0 border-white group-hover:w-full transition-all duration-500 border-2 group-hover:border-black" />
        </NavLink>
        ) : (
            <NavLink to="/" className="group">
            <div className="md:px-5 text-xl font-medium">
              <h1>Sign in</h1>
            </div>
            <hr className="w-0 border-white group-hover:w-full transition-all duration-500 border-2 group-hover:border-black" />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Nav;
