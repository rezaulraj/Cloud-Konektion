import React from "react";
import { FaSearch, FaUserTie, FaChartLine } from "react-icons/fa";
import heroImage from "../../assets/employee/heroemp.jpg";

const HeroEmployee = () => {
  return (
    <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional team working together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Looking to <span className="text-[#00BCFF]">hire?</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Find the perfect digital talent to drive your business forward with
            our specialized recruitment solutions.
          </p>

          {/* Stats */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="flex items-center justify-center space-x-3">
                <FaSearch className="text-2xl text-[#00BCFF]" />
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <p className="text-gray-300 mt-2">Successful Placements</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="flex items-center justify-center space-x-3">
                <FaUserTie className="text-2xl text-[#00BCFF]" />
                <span className="text-3xl font-bold text-white">95%</span>
              </div>
              <p className="text-gray-300 mt-2">Retention Rate</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="flex items-center justify-center space-x-3">
                <FaChartLine className="text-2xl text-[#00BCFF]" />
                <span className="text-3xl font-bold text-white">24h</span>
              </div>
              <p className="text-gray-300 mt-2">Average Response Time</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-[#00BCFF]/10 blur-xl animate-float"></div>
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#0066FF]/10 blur-xl animate-float-delay"></div>

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

export default HeroEmployee;
