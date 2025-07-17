// Error component
import {FaHeart} from "react-icons/fa";
import React from "react";

const ErrorMessage = ({ message, onRetry }) => (
    <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <FaHeart className="text-red-500 text-2xl" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Oops! Something went wrong</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
            onClick={onRetry}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-semibold"
        >
            Try Again
        </button>
    </div>
);

export default ErrorMessage;
