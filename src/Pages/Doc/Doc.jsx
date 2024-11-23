import React, { useState } from "react";

const Doc = () => {
    const baseURL = "https://alpha-api-n95y.onrender.com/";
    const [copied, setCopied] = useState(false);
  
    const handleCopy = () => {
      navigator.clipboard.writeText(baseURL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    };
  
    return (
      <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center text-slate-600 mb-8">
            API Documentation
          </h1>
  
          {/* Overview Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Overview
            </h2>
            <p className="text-gray-600">
              Welcome to the API documentation for our project. Below, you'll
              find detailed information on how to connect with our API and use
              its endpoints effectively.
            </p>
          </section>
  
          {/* Base URL */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Base URL</h2>
            <div className="flex items-center bg-gray-50 p-4 rounded-md border border-gray-200 text-gray-800">
              <code className=" flex-grow">{baseURL}</code>
              <button
                onClick={handleCopy}
                className="ml-4 bg-black duration-300 text-white px-4 py-2 rounded-md hover:bg-slate-600 focus:outline-none"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </section>
  
          {/* Endpoints Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Endpoints
            </h2>
  
            {/* Laptops Routes */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Laptops
              </h3>
              <ul className="space-y-3">
                <li className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p>
                    <strong>Get All Laptops:</strong>
                  </p>
                  <code>
                    GET /laptops/:api_key
                  </code>
                  <p className="text-gray-600 mt-2">
                    Returns all laptop data for a valid user identified by their{" "}
                    <code>uid</code>.
                  </p>
                </li>
  
                <li className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p>
                    <strong>Get Single Laptop:</strong>
                  </p>
                  <code>
                    GET /laptops/:id/:api_key
                  </code>
                  <p className="text-gray-600 mt-2">
                    Returns details of a single laptop identified by <code>id</code> for a user identified by <code>uid</code>.
                  </p>
                </li>
              </ul>
            </div>
          </section>
  
          {/* Notes Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Notes</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>All endpoints require a valid <code>uid</code> for access.</li>
              <li>Ensure proper validation and error handling when calling these endpoints.</li>
              <li>Use appropriate HTTP methods (e.g., GET, POST, PATCH) as described above.</li>
            </ul>
          </section>
  
          {/* Footer Section */}
          <footer className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-600">
            &copy; 2024 API Documentation. All rights reserved.
          </footer>
        </div>
      </div>
    );
  };

export default Doc;
