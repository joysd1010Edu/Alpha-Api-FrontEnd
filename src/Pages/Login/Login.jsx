import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import GoogleAuth from "./GoogleAuth";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState();

  const from = location.state?.from?.pathname || "/";
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    const { email, password } = data;
    

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged in",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className=" bg-white md:pt-16 ">
    
      <div className=" py-10 px-3 md:px-10 md:mx-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-36">
          <div>
          <h1 className=" py-3 md:hidden text-3xl text-center font-bold">Log in</h1>
            <img
              className=" w-full"
              src="https://i.postimg.cc/Bbq3LpC0/ezgif-com-optimize.gif"
            />
          </div>
          <div className="flex flex-col gap-2 px-10 py-5 border-2 border-blue-500 w-96 rounded-xl">
            <h1 className="text-3xl text-center text-gray-600 ">
             Please Login Here!!
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <label htmlFor="mail" className="text-xl text-black">
                Enter Email id
              </label>
              <input
                type="email"
                id="mail"
                placeholder="Enter mail here"
                className="w-full max-w-xs shadow-lg duration-700 bg-white hover:shadow-[#5572e6] shadow-[#dd7474] border-blue-600 px-2 py-1 rounded-md input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
              <label htmlFor="pass" className="text-xl text-black">
                Enter password
              </label>
              <input
                type="password"
                id="pass"
                placeholder="Enter your password"
                className="w-full max-w-xs shadow-lg duration-700 bg-white hover:shadow-[#5572e6] shadow-[#dd7474] border-blue-600 px-2 py-1 rounded-md input input-bordered "
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
              <input

                type="submit"
                value="Login"
                className="w-full border-none text-[#1F2937] max-w-xs my-5 duration-1000 shadow-lg rounded-md px-2 py-1 hover:shadow-[#5572e6] shadow-[#dd7474] bg-[#F379A7] hover:bg-blue-400 input input-bordered btn"
              />{" "}
            </form>
            <p className="text-xl text-blue-700 text-center">{error&&"Wrong Email and Password"}</p>
            <GoogleAuth></GoogleAuth>
            <p className="text-gray-600">
              Not Registered yet ?
              <Link to={"/signup"} className="text-[#55D1E6] underline">
                {" "}
                Signup
              </Link>{" "}
              now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
