import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500">
          404
        </h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-400 to-cyan-500 text-white rounded-lg hover:from-emerald-500 hover:to-cyan-600 transition-all duration-300"
          >
            <FaHome />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
