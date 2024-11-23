import { NavLink } from "react-router-dom";
import logo from "./../../assets/logo.png";
import useAuth from "../../Components/Hooks/useAuth";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { LuUserCircle2 } from "react-icons/lu";
import axiosInstance from "../../Components/AxiosInstance/axiosInstance";
import CopiableSection from "./CopiableSection"; // Import the extracted CopiableSection

const Nav = () => {
  const { user, logOut } = useAuth();
  const [menu, setMenu] = useState(true);
  const [userCredit, setUserCredit] = useState({});

  const handleMenuToggle = () => {
    setMenu(!menu);
  };

  const ShowDetails = async () => {
    try {
      const response = await axiosInstance.get(`/user/email/${user.email}`);
      setUserCredit(response.data);
      console.log(response.data)

      // Open the modal after the state is set
      document.getElementById("my_modal_1").showModal();
    } catch (error) {
      console.error("Error fetching user credit details:", error);
    }
  };

  return (
    <div className="sticky top-0 z-30 bg-white flex justify-between items-center">
      <div>
        <NavLink to={"/"}>
          <img src={logo} className="w-20 md:w-28" />
        </NavLink>
      </div>
      <div
        onClick={() => setMenu(true)}
        className={`z-20 flex md:static md:shadow-none shadow-black bg-white absolute top-28 md:flex-row sm:flex-col flex-col justify-between items-start md:items-center gap-2 md:gap-4 ${
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
        <NavLink to="/plan" className="group">
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
            <div onClick={ShowDetails} className="group">
              <div className="md:px-5 md:text-xl md:font-medium flex items-center gap-2">
                <LuUserCircle2 size={35} />
                <h1>{user?.displayName||userCredit?.username}</h1>
              </div>
              <hr className="w-0 border-white group-hover:w-full transition-all duration-500 border-2 group-hover:border-black" />
            </div>
            <div className="group md:text-xl">
              <button onClick={logOut} className="px-2">
                LogOut
              </button>
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
          <div className="rotate-270 duration-300">
            <RxCross1 size={35} />
          </div>
        )}
      </div>
      <dialog id="my_modal_1" className="modal rounded-md">
        <div className="modal-box rounded-md py-5 bg-slate-400 px-5">
          {userCredit ? (
            <>
              <h3 className="font-bold text-center">
                Hello!, {userCredit?.username}
              </h3>
              <p className="md:text-xl text-center">
                You have {userCredit?.credit} credits
              </p>
            </>
          ) : (
            <p>Loading...</p>
          )}
          <div className=" flex items-center py-3 gap-3">
              <h1>Your API key is :</h1>
              <CopiableSection text={userCredit?.uid || "No UID Available"} />
          </div>
          <div className="modal-action">
            <form method="dialog">
              <div className="flex py-5 justify-around">
                <button className="btn bg-black text-white px-3 py-1 rounded-xl">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Nav;
