import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-5 overflow-hidden">
      <div>
        <div className="md:w-20 w-10 bg-slate-400 md:right-96 right-16 opacity-35 h-60 absolute z-10 rotate-45 rounded-b-2xl rounded-t-2xl"></div>
        <div className="md:w-20 w-10 bg-blue-400 opacity-35 h-80  md:left-[500px] left-32 absolute z-10 rotate-45 rounded-b-2xl rounded-t-2xl"></div>
        <div className="md:w-20 w-10 bg-orange-400 opacity-35 h-80 left-44 md:left-[620px] absolute z-10 rotate-45 rounded-b-2xl rounded-t-2xl"></div>
        <div className="md:w-20 w-10 bg-slate-400 opacity-35 left-16 md:left-96 h-60 absolute z-10 rotate-45 rounded-b-2xl rounded-t-2xl"></div>
      </div>

      <section className="mb-12 relative z-20 text-center  py-6 ">
        <h1 className=" text-3xl font-bold">Access All tech data</h1>
        <div className="flex justify-around">
          <p className="text-black text-xl w-2/3">
            Your one-stop solution for accessing comprehensive tech gadget data,
            empowering developers, businesses, and enterprises with seamless
            integration and real-time insights!
          </p>
        </div>

        <p className="text-gray-600 mb-6 text-xl">
          Ready to explore our API? Dive into the documentation below and start
          integrating.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Get Started with documentation
        </h2>

        <Link
          to="/doc"
          className="bg-slate-300 text-black px-6 py-3 rounded-md hover:bg-gray-600 duration-300 hover:text-white focus:outline-none"
        >
          View API Documentation
        </Link>
      </section>

      <section className=" py-10">
        <div className="bg-gray-100 min-h-screen p-6">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-4">
              All tech info from last month
            </h1>

            {/* Request section */}
            <div className="bg-gray-800 text-white md:p-4 rounded-md mb-6">
              <div className="flex items-center">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm mr-4">
                  GET
                </span>
                <span className="text-lg font-mono">
                  https://alpha-api-n95y.onrender.com&apiKey=API_KEY
                </span>
              </div>
            </div>

            {/* Response Section */}
            <div className="bg-gray-200 p-1 text-wrap md:p-4 rounded-md">
              <pre className="font-mono text-sm whitespace-pre-wrap">
                {`{
                    "status": "ok",
                    "totalResults": 5801,
                    "articles": [
                        {
                        "source": {
                            "id": null,
                            "name": "Printmag.com"
                        },
                        "author": "Saul Colt",
                        "title": "You Are All Wrong About the Jaguar Rebrand",
                        "description": "Saul Colt on why Jaguar's rebrand is smart, even if it hurts to watch.\\nThe post You Are All Wrong About the Jaguar Rebrand appeared first on PRINT Magazine.",
                        "url": "https://www.printmag.com/ industry perspectives/",
                        "urlToImage": "https://www.printmag.com/wp-content/uploads/2024/11/Jaguar-Copy-Nothing-End-Shot-1024x543.png",
                        "publishedAt": "2024-11-22T16:19:55Z"
                        }
                    ]
                }`}
              </pre>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-5">
        <h1 className=" text-3xl py-5 text-center font-display font-bold">
          Trusted by developers accross the world
        </h1>
        <Marquee>
          <img
            src="https://download.logo.wine/logo/NetSol_Technologies_(company)/NetSol_Technologies_(company)-Logo.wine.png"
            alt=""
            className="w-32"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/HERE_logo.svg/800px-HERE_logo.svg.png"
            alt=""
            className="w-32"
          />
          <img
            src="https://companieslogo.com/img/orig/LTTS.NS-c24ad6be.png?t=1720244492"
            alt=""
            className="w-32"
          />
          <img
            src="https://logolook.net/wp-content/uploads/2022/10/Dynamics-365-Emblem.png"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn1.iconfinder.com/data/icons/flat-and-simple-part-1/128/microsoft-512.png"
            alt=""
            className="w-32"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfd8CX1yNG9LXa-kicaL5gU_C45uGTmDsJ3A&s"
            alt=""
            className="w-32"
          />
          <img
            src="https://www.pngkey.com/png/detail/67-670139_technology-logo-vector-png.png"
            alt=""
            className="w-32"
          />
          <img
            src="https://grupo-deco.com/wp-content/uploads/2021/01/dynamics-365-logo-trans.png"
            alt=""
            className="w-32"
          />
        </Marquee>
      </section>
      <h1 className="py-5 text-center font-bold text-2xl md:text-3xl font-cascade">Easy Json Returns </h1>
      <section className=" pb-10  grid md:grid-cols-3 gap-10 items-baseline">
        <div><img src="https://img.freepik.com/free-vector/clean-black-world-map-silhouette-style-template-design_1017-46154.jpg" alt="" className=''/><h1 className=" text-center font-semibold text-2xl">World wide service</h1></div>
        <div><img src="https://png.pngtree.com/png-vector/20230410/ourmid/pngtree-flat-style-api-software-integration-icon-on-isolated-background-vector-png-image_51365460.jpg" alt="" className=''/><h1 className=" text-center font-semibold text-2xl">Easy integration</h1></div>
        <div><img src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-developers-are-coding-programs-on-computers-programmers-are-analyzing-data-png-image_11902650.png" alt="" className=''/><h1 className=" text-center font-semibold text-2xl">Efficient Development</h1></div>
      </section>
    </div>
  );
};

export default Home;
