import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import useAuth from "../../Components/Hooks/useAuth";
import GoogleAuth from "../Login/GoogleAuth";
import axiosInstance from "../../Components/AxiosInstance/axiosInstance";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/login";

  const generateId = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$&";
    let result = "";
    for (let i = 0; i < 16; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const onSubmit = async (data) => {
    console.log("working on form data: ",data)
    let id;
    let isUnique = false;
    while (!isUnique) {
      id = generateId();
      try {
        const userID = await axiosInstance.get(`user/${id}`);
        if (!userID.data.changeID) {
          isUnique = true;
        }
      } catch (error) {
        console.error("Error checking ID uniqueness:", error);
        return;
      }
    }

    try {
    
        const result = await createUser(data.email, data.password);
        updateUserProfile(data.name,'nophotourl')
        const googleUser = result.user;  
        console.log(result) 
        const user = {
          uid: id,
          credit: 0,
          email: data.email,
          username: data.name,
        };
        console.log(user)
    
        // Send user data to backend
        const response = await axiosInstance.post('/user', user, {
          headers: {
            'Content-Type': "application/json",
          },
        });
    
        if (response.data.success||response.status==200||response.status==201) {
            console.log(response)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Logged in",
                showConfirmButton: false,
                timer: 1500,
              });
              
              navigate(from, { replace: true });
            }
        
        else{
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Somthing went wrong, please",
                showConfirmButton: false,
                timer: 1500,
              });
        }
    
        
      } catch (error) {
        console.error("Error during sign-in or user creation:", error);
      }
    };






    
  return (
    <div className=" bg-white md:pt-20 px-3 md:px-28 ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
        <div>
            <h1 className=" py-3 md:hidden text-3xl text-center font-bold">Sign Up</h1>
          <img src="https://i.postimg.cc/MTyTTzQn/ezgif-com-optimize-1.gif" />
        </div>
        <div className="">
          <h1 className="mt-10 mb-3 text-3xl font-semibold text-center">
            Please Register
          </h1>
          <hr className="w-1/2 mx-auto border-gray-500 border-2" />
          <form onSubmit={handleSubmit(onSubmit)} className="card-body py-5">
            <div className=" grid grid-cols-2 gap-2 md:gap-4">
              <div className="form-control">
                <label className="label ">
                  <span className="text-xl text-[#1F2937] font-semibold label-text">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input px-2 bg-white input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl text-[#1F2937] font-semibold label-text">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input bg-white  px-2 input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="text-xl text-[#1F2937] font-semibold label-text">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input  bg-white px-2  input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl text-[#1F2937] font-semibold label-text flex gap-2">
                    Confirm <span className="hidden md:block">Password</span>
                  </span>
                </label>
                <input
                  type="password"
                  id="confirm_pass"
                  placeholder="Enter your confirm password"
                  className="w-full px-2  bg-white  max-w-xs input input-bordered "
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <span className="text-red-600">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>{" "}
            </div>{" "}
            <label className="label text-center"></label>
            <p>{error && <span>{error}</span>}</p>
            <div className=" form-control flex justify-around py-2">
              <input
                className="btn btn-info rounded-xl bg-orange-400 px-5 text-white py-1 shadow-md duration-300 hover:shadow-orange-500"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>

          <p className=" py-1 text-center text-xl">
            <small>
              Already have an account{" "}
              <Link to="/login" className="font-semibold text-blue-700 ">
                Login
              </Link>
            </small>
          </p>

          <div className=" mx-8 pb-10">
            <GoogleAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
