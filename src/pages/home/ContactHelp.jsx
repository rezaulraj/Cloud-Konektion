import React from "react";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import contact from "../../assets/home/contact.jpg";

const ContactHelp = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={contact}
          alt="Contact background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Have a <span className="text-[#00BCFF]">question</span>?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              We would love to help
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#00BCFF]/20 rounded-full flex items-center justify-center">
                  <FaUser className="text-[#00BCFF] text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Expert Support</h4>
                  <p className="opacity-80">
                    Our specialists are ready to assist you
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#00BCFF]/20 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-[#00BCFF] text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Quick Response</h4>
                  <p className="opacity-80">Typically reply within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#00BCFF]/20 rounded-full flex items-center justify-center">
                  <FaComment className="text-[#00BCFF] text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Personalized Advice</h4>
                  <p className="opacity-80">
                    Tailored solutions for your needs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden p-8 md:p-10">
            <form className="space-y-6">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Your name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Your email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  How can we help?
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <FaComment className="text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    rows="4"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00BCFF] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-[#00BCFF]/10 blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-[#0066FF]/10 blur-xl animate-float-delay"></div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
        }
        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(10px) translateX(-20px);
          }
          50% {
            transform: translateY(20px) translateX(0);
          }
          75% {
            transform: translateY(10px) translateX(20px);
          }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactHelp;
