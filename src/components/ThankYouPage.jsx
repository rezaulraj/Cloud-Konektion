import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaFacebook, FaHome, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center p-6 text-white">
      <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white bg-opacity-30 rounded-full animate-ping"></div>
            <FaCheckCircle className="h-24 w-24 text-green-400 relative z-10 animate-bounce" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in text-[#00BCFF]">
          Thank You!
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 text-[#00BCFF] animate-fade-in delay-100">
          We've received your message and will contact you soon.
        </p>

        <div className="mb-10 animate-fade-in delay-200">
          <p className="text-lg opacity-80 mb-2">
            In the meantime, feel free to explore more of our content.
          </p>
          <div className="w-20 h-1 bg-white bg-opacity-50 mx-auto mt-4 rounded-full"></div>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in delay-300"
        >
          <FaHome className="mr-2" />
          Back to Home
        </Link>

        <div className="mt-12 flex justify-center space-x-4 animate-fade-in  delay-500">
          <a
            href="https://x.com/cloudkonektion
"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center bg-[#00BCFF]  p-1 bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
          >
            <span>
              <FaX className="text-white" />
            </span>
          </a>
          <a
            href="https://www.facebook.com/cloudkonektion/"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center bg-[#00BCFF]  p-1 bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
          >
            <span>
              <FaFacebook className="text-white" />
            </span>
          </a>
          <a
            href="https://www.instagram.com/cloudkonektion/"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center bg-[#00BCFF]  p-1 bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
          >
            <span>
              <FaInstagram className="text-white" />
            </span>
          </a>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-purple-400 opacity-20 filter blur-xl"></div>
      <div className="absolute bottom-20 right-16 w-24 h-24 rounded-full bg-indigo-400 opacity-20 filter blur-xl"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-white opacity-10 filter blur-lg"></div>
    </div>
  );
};

export default ThankYouPage;
