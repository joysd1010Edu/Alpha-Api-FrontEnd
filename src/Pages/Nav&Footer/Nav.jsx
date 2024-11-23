import { NavLink } from "react-router-dom";
import logo from "./../../assets/logo.png";
import useAuth from "../../Components/Hooks/useAuth";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { LuUserCircle2 } from "react-icons/lu";
import axiosInstance from "../../Components/AxiosInstance/axiosInstance";

const Nav = () => {
  const { user ,logOut,userCredit} = useAuth();

  const [menu, setMenu] = useState(true);
  const [userCredit, setUserCredit] = useState({});

  const handleMenuToggle = () => {
    setMenu(!menu);
  };
  const ShowDetails=async()=>{
    const response=await axiosInstance.get('')
  }
  return (
    <div className="sticky top-0 z-30 bg-white flex justify-between items-center">
      <div>
        {" "}
        <NavLink to={"/"}>
          <img src={logo} className="w-20 md:w-28" />
        </NavLink>
      </div>
      <div
        onClick={() => setMenu(true)}
        className={`z-20 flex md:static md:shadow-none shadow-black bg-white absolute  top-28  md:flex-row sm:flex-col flex-col justify-between items-start md:items-center gap-2 md:gap-4  ${
          menu
            ? "right-[450px] duration-700"
            : "right-0 top-[80px] md:px-0 px-10 py-2 duration-700"
        }`}
      >
        <NavLink to="/" className="group">
          <div className="md:px-5 md:text-xl md:font-medium">
            <h1>Home</h1>
          </div>
          <hr className="w-0 border-white group-hover:w-full transition-all duration-500 border-2 group-hover:border-black" />
        </NavLink>
        <NavLink to="/" className="group">
          <div className="md:px-5 md:text-xl md:font-medium">
            <h1>Plans</h1>
          </div>
          <hr className="w-0 border-white group-hover:w-full transition-all duration-500 border-2 group-hover:border-black" />
        </NavLink>
        <NavLink to="/" className="group">
          <div className="md:px-5 md:text-xl md:font-medium">
            <h1>Documentation</h1>
          </div>
          <hr className="w-0 border-white group-hover:w-full transition-all duration-500 border-2 group-hover:border-black" />
        </NavLink>

        {user ? (
          <div className="flex md:flex-row flex-col items-center gap-2">
            <NavLink to="/" className="group">
              <div className="md:px-5 md:text-xl md:font-medium flex items-center gap-2">
                <LuUserCircle2 size={35} />

                <h1>{user.displayName}</h1>
              </div>
              <hr className="w-0 border-white group-hover:w-full transition-all duration-500 border-2 group-hover:border-black" />
            </NavLink>
            <div className=" group md:text-xl ">
              <button onClick={logOut} className="px-2 ">LogOut</button>
              <hr className="w-0 border-white group-hover:w-full transition-all duration-500 border-2 group-hover:border-black" />
            </div>
          </div>
        ) : (
          <NavLink to="/login" className="group">
            <div className="md:px-5 md:text-xl md:font-medium">
              <h1>Sign in</h1>
            </div>
            <hr className="w-0 border-white group-hover:w-full transition-all duration-500 border-2 group-hover:border-black" />
          </NavLink>
        )}
      </div>
      <div onClick={handleMenuToggle} className="block md:hidden mx-2">
        {menu ? (
          <IoMenuSharp size={35} />
        ) : (
          <div className=" rotate-270 duration-300 ">
            <RxCross1 size={35} className="" />
          </div>
        )}
      </div>
    </div>
{/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    
  );
};

export default Nav;
