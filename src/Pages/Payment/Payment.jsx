import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_PK);
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { InfinitySpin } from "react-loader-spinner";
import "./Custom.css";
import Swal from "sweetalert2";
// import { FaTrashAlt } from "react-icons/fa";
import axiosInstance from "../../Components/AxiosInstance/axiosInstance";

const CheckOutForm = ({ Price, email,credit }) => {
  const [ispaymentDone, setPaymentDoe] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [ClientSecret, setSecret] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    axiosInstance
      .post("/user/pay", { Price })
      .then((res) => setSecret(res.data.clientSecret));
  }, []);

  const updateProductQuantity = async (element) => {
    const url = `/user/update/${email}/${credit}`;
    // const updateValue = element.quantity - 1;

    try {
      const response = await axiosInstance.patch(url)
        console.log(response)
      if (!response.data.updated) {
        throw new Error(`Failed to update quantity for ${email}`);
      }

      
      console.log(`Quantity updated for ${email}:`);
      // Handle the response data as needed
    } catch (error) {
      console.error("Fetch request failed:", error.message);
      // Handle errors
    }
  };

  // const SaveToDB = (data) => {
  //   fetch("http://localhost:5000/payment/save", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.insertedId) {
  //         console.log(data);
  //       }
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const phone = e.target.elements.phone.value;
    const email = e.target.elements.email.value;

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    const { error: confirmError, PaymentIntent } =
      await stripe.confirmCardPayment(ClientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (confirmError) {
      setMessage(confirmError.message);
    }

    if (error) {
      setMessage(error.message);
      setIsProcessing(false);
    } else {
      updateProductQuantity();
      console.log(paymentMethod);
      //   const PaymentData = {
      //     userName: user?.displayName,
      //     userEmail: user?.email,
      //     CardEmail: email,
      //     CardUser: name,
      //     TotalCost: Price,
      //     TransectionId: paymentMethod.id,
      //     Card: paymentMethod?.card.brand,
      //     Phone: phone,
      //   };
      //   SaveToDB(PaymentData);
      //   setPrint(true);
      //   setOrder(PaymentData);

      setIsProcessing(false);
      //   setCompleted(true);
      setPaymentDoe(true);
    }
  };

  return (
    <div className="px-5">
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <label className="input hover:border-blue-500  input-bordered flex items-center gap-2 w-full">
          Name
          <input
            required
            name="name"
            type="text"
            className="grow outline-none px-5 w-full"
            placeholder="@Mr.Example"
          />
        </label>

        <div className="flex justify-between gap-4">
          <label className="input hover:border-blue-500 input-bordered flex items-center gap-2 w-full">
            Phone
            <input
              required
              name="phone"
              type="text"
              className="grow outline-none px-5 w-full"
              placeholder="@016XXXXXXX"
            />
          </label>

          <label className="input hover:border-blue-500 input-bordered flex items-center flex-grow gap-2 w-full">
            Email
            <input
              name="email"
              type="email"
              className="grow outline-none w-full"
              placeholder="@example@gmail.com"
              required
            />
          </label>
        </div>

        <label className="px-5 py-2 flex flex-col gap-2 hover:border-blue-500 border rounded-md input-bordered w-full">
          Card Number
          <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
        </label>
        {ispaymentDone ? (
          <div className=" border mx-auto w-6/12 py-2 my-2 text-center rounded-md disabled text-white bg-[#36d636]">
            🎊 Payment Completed 🎊
          </div>
        ) : (
          <div className="flex justify-around">
            {!isProcessing ? (
              <button
                type="submit"
                className="bg-blue-600 px-3 py-2 my-4 rounded-md disabled:opacity-30 w-2/6  text-white hover:opacity-75"
                disabled={!stripe || !ClientSecret}
              >
                💵 {"Pay now"} {Price}$
              </button>
            ) : (
              <div className=" ">
                <InfinitySpin
                  visible={true}
                  hight="200"
                  width="200"
                  color="#4fa94d"
                  ariaLabel="infinity-spin-loading"
                />
                <h1 className="text-center text-xl text-green-600 blinking-glowing-text">
                  Processing
                </h1>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  const product = location.state.prop.name;
  const email = location.state.prop.email;
  const price = location.state.prop.price;
  const credit = location.state.prop.credit;

  console.log(product, price, email);

  return (
    <div className="bg-slate-200 px-10">
      <div className="grid grid-cols-2 w-full py-10 gap-5">
        <div id="detail" className=" pt-5 pb-5  bg-white rounded-md ">
          <h1 className="text-blue-700 text-xl font-bold  text-center">
            Products detail
          </h1>
          <hr className=" border-2 my-3" />
          <h1 className=" text-xl text-center">{product}</h1>
          <h1 className=" text-xl text-center">Package Price: {price} $</h1>
          <div className=" flex justify-around py-8">
            <button
              onClick={()=>{
                console.log('canceled')
                navigate("/")
              }}
              className=" bg-red-500 px-5 py-1 rounded-md text-white"
            >
              Cancel
            </button>
          </div>
        </div>
        {/* -------------------------------------Payment--------------------------------------------- */}
        <div id="detail" className=" pt-5 pb-5  bg-white rounded-md ">
          <h1 className="text-blue-700 text-xl font-bold  text-center">
            Payment Process
          </h1>
          <hr className=" border-2 my-3" />

          <div>
            <Elements stripe={stripePromise}>
              <CheckOutForm Price={price} email={email} credit={credit}/>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
