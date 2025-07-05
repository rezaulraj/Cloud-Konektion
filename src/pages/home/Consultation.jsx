import React from "react";
import { FaPhoneAlt, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import bgimage from "../../assets/home/map.avif";

const Consultation = () => {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Need a <span className="text-[#00BCFF]">consultation</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's discuss how we can help you find the perfect digital talent
            for your business needs.
          </p>
        </div>

        {/* Consultation Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden max-w-2xl mx-auto">
          <div className="p-8 sm:p-10 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#00BCFF] rounded-full mb-6">
              <FaPhoneAlt className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Free Consultation
            </h3>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#00BCFF]/10 rounded-full flex items-center justify-center mb-3">
                  <FaPhoneAlt className="text-[#00BCFF] text-xl" />
                </div>
                <p className="font-medium text-gray-700">Call Us</p>
                <p className="text-gray-600">+65 1234 5678</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#00BCFF]/10 rounded-full flex items-center justify-center mb-3">
                  <FaCalendarAlt className="text-[#00BCFF] text-xl" />
                </div>
                <p className="font-medium text-gray-700">Schedule</p>
                <p className="text-gray-600">Online Meeting</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#00BCFF]/10 rounded-full flex items-center justify-center mb-3">
                  <FaMapMarkerAlt className="text-[#00BCFF] text-xl" />
                </div>
                <p className="font-medium text-gray-700">Visit Us</p>
                <p className="text-gray-600">Singapore</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center justify-center px-8 py-4 bg-[#00BCFF] text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 hover:shadow-lg">
              <span>Request Free Consultation</span>
              <FaCalendarAlt className="ml-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-[#00BCFF]/10 blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-[#00BCFF]/10 blur-xl animate-float-delay"></div>

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

export default Consultation;
