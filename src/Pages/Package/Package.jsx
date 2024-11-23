import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import Swal from "sweetalert2";

const Package = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleNavigate = (price,product,credit) => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login to  Continue!",
        showConfirmButton: false,
        timer: 2500,
      });

      navigate("/login", { state: { from: location.pathname } });
    } else {
      navigate("/payment", {
        state: {
          from: location.pathname,
          prop: 
            {
              price: price,
              name: product,              
              email: user.email,
              credit:credit
            }
          
        },
      });
    }
  };
  return (
    <div className="mx-5">
      <h1 className=" md:text-4xl text-center">
        Chose your desired Package from below
      </h1>
      <hr className="my-5 md:mx-20 " />
      <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-10">
        <div className="border-2 text-center">
          <div className="bg-slate-300 px-3 py-1 ">
            <h1>Developer</h1>
          </div>
          <div className=" flex justify-between px-3 py-1  border-2">
            <h1>100 API credits</h1>
            <FaCheckCircle size={15} />
          </div>
          <div className=" flex justify-between px-3 py-1 border-2">
            <h1>20 Calls/min</h1>
            <FaCheckCircle size={15} />
          </div>
          <div className=" flex justify-between px-3 py-1 border-2">
            <h1>Basic Endpoints</h1>
            <FaCheckCircle size={15} />
          </div>
          <div className=" flex justify-between px-3 py-1 border-2">
            <h1>Customization</h1>
            <FaCheckCircle size={15} color="white" />
          </div>
          <div className=" flex justify-between px-3 py-1 border-2">
            <h1>Support</h1>
            <FaCheckCircle size={15} color="white" />
          </div>
          <div className=" flex justify-between px-3 py-1 border-2">
            <h1>Analytics</h1>
            <FaCheckCircle size={15} color="white" />
          </div>

          <div className=" border-2">
            <h1>Price : 10$</h1>
          </div>
          <div onClick={()=>handleNavigate(10,"Alpha API Developer Pack",100)} className="cursor-pointer bg-slate-950 hover:bg-blue-400 duration-300 shadow-md hover:shadow-blue-500 text-white py-1 ">
            <button>Continue with Developer Pack</button>
          </div>
        </div>
        <div className="border-2 text-center">
          <div className="bg-slate-600 text-white px-3 py-1 ">
            <h1>Business</h1>
          </div>
          <div className=" flex justify-between px-3 py-1  border-2">
            <h1>10000 API credits</h1>
            <FaCheckCircle size={15} />
          </div>
          <div className=" flex justify-between px-3 py-1 border-2">
            <h1>100 Calls/min</h1>
            <FaCheckCircle size={15} />
          </div>
          <div className=" flex justify-between px-3 py-1 border-2">
            <h1>Custom Endpoints</h1>
            <FaCheckCircle size={15} />
          </div>
          <div className=" flex justify-between px-3 py-1 border-2">
            <h1>Customization</h1>
            <FaCheckCircle size={15} color="white" />
          </div>
          <div className=" flex justify-between px-3 py-1 border-2">
            <h1>Support</h1>
            <FaCheckCircle size={15} />
          </div>
          <div className=" flex justify-between px-3 py-1 border-2">
            <h1>Analytics</h1>
            <FaCheckCircle size={15} color="white" />
          </div>

          <div className=" border-2">
            <h1>Price : 40$</h1>
          </div>
          <div onClick={()=>handleNavigate(40,"Alpha API Business Pack",10000)} className="cursor-pointer bg-slate-950 hover:bg-green-400 duration-300 shadow-md hover:shadow-green-500 text-white py-1 ">
            <button>Continue with Developer Pack</button>
          </div>
        </div>
        <div className="border-2 text-center">
          <div className="bg-slate-800 text-white px-3 py-1 ">
            <h1>Enterprize</h1>
          </div>
          <div className=" flex justify-between px-3 py-1  border-2">
            <h1>100000 API credits</h1>
            <FaCheckCircle size={15} />
          </div>
          <div className=" flex justify-between px-3 py-1 border-2">
            <h1>250 Calls/min</h1>
            <FaCheckCircle size={15} />
          </div>
          <div className=" flex justify-between px-3 py-1 border-2">
            <h1>Custom Endpoints</h1>
            <FaCheckCircle size={15} />
          </div>
          <div className=" flex justify-between px-3 py-1 border-2">
            <h1>Customization</h1>
            <FaCheckCircle size={15} />
          </div>
          <div className=" flex justify-between px-3 py-1 border-2">
            <h1>Support</h1>
            <FaCheckCircle size={15} />
          </div>
          <div className=" flex justify-between px-3 py-1 border-2">
            <h1>Analytics</h1>
            <FaCheckCircle size={15} />
          </div>

          <div className=" border-2">
            <h1>Price : 100$</h1>
          </div>
          <div onClick={()=>handleNavigate(100,"Alpha API Enterprize Pack",1000000)} className="cursor-pointer bg-slate-950 hover:bg-orange-700 duration-300 shadow-md hover:shadow-orange-500 text-white py-1 ">
            <button>Continue with Enterprize Pack</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
