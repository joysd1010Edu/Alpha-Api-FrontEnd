import { FiCopy } from "react-icons/fi";
import React, { useState } from "react";

const CopiableSection = ({ text }) => {
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setToastVisible(true); // Show the toast notification
      setTimeout(() => setToastVisible(false), 2000); // Hide it after 2 seconds
    });
  };

  return (
    <div>
      {/* Toast Notification */}
      {toastVisible && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded shadow-md">
          Copied to clipboard!
        </div>
      )}

      {/* Copiable Section */}
      <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-md border border-gray-300">
        <span className="text-sm break-all">{text}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-gray-600 hover:text-gray-800"
          title="Copy to clipboard"
        >
          <FiCopy size={20} />
          <span className="sr-only">Copy</span>
        </button>
      </div>
    </div>
  );
};

export default CopiableSection