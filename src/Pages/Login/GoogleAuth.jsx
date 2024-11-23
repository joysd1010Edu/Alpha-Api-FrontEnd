import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import useAuth from "../../Components/Hooks/useAuth";
import axiosInstance from "../../Components/AxiosInstance/axiosInstance";

const GoogleAuth = () => {
  const { googleSignIn ,setUserCredit} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

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



  const handleGoogleSignIn = async () => {
  let id
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
    
    const result = await googleSignIn();
    const googleUser = result.user;   
    const user = {
      uid: id,
      credit: 0,
      email: googleUser.email,
      username: googleUser.displayName,
    };
    console.log(user)

    // Send user data to backend
    const response = await axiosInstance.post('/user', user, {
      headers: {
        'Content-Type': "application/json",
      },
    });

    if (response.data.success||response.status==200||response.status==201) {
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
    <div>
      <div className="divider"></div>
      <div
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center cursor-pointer shadow-lg duration-700 hover:shadow-[#8597e0] shadow-[#dd7474] gap-2  py-2 my-2 text-xl font-normal text-blue-700 bg-white border rounded-lg "
      >
        <FcGoogle /> continue With Google
      </div>
    </div>
  );
};

export default GoogleAuth;
