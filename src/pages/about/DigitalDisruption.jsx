import React from "react";
import { FaRocket, FaUserTie, FaGlobe, FaLightbulb } from "react-icons/fa";

const DigitalDisruption = () => {
  // SVG dot pattern component
  const DotPattern = () => (
    <svg
      className="absolute inset-0 w-full h-full opacity-10 z-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern
        id="dotPattern"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="10" cy="10" r="1" fill="#00BCFF" />
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#dotPattern)" />
    </svg>
  );

  return (
    <div className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dot Pattern Background */}
      <DotPattern />

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-[#00BCFF]/10 blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-[#0066FF]/10 blur-xl animate-float-delay"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00BCFF]/10 text-[#00BCFF] text-sm font-semibold mb-6">
              Since 2002
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-[#00BCFF]">Spearheading</span> Digital
              Disruption
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              At Cloud Konektion Hired, we're a team of tech enthusiasts and
              industry experts who are passionate about helping businesses find
              the right talent to drive their growth and innovation. Founded in
              2002 by a group of seasoned professionals with over 20 years of
              combined experience in technology and leadership-related
              positions, Cloud Konektion Hired has been at the forefront of the
              tech recruitment industry from the start.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <FaRocket className="text-2xl text-[#00BCFF]" />
                  <span className="text-2xl font-bold text-gray-900">500+</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Successful Placements
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <FaUserTie className="text-2xl text-[#00BCFF]" />
                  <span className="text-2xl font-bold text-gray-900">20+</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Years Experience</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <FaGlobe className="text-2xl text-[#00BCFF]" />
                  <span className="text-2xl font-bold text-gray-900">40+</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Countries</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <FaLightbulb className="text-2xl text-[#00BCFF]" />
                  <span className="text-2xl font-bold text-gray-900">95%</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative h-96 bg-gradient-to-br from-[#00BCFF]/10 to-[#0066FF]/10 rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="text-center p-8 backdrop-blur-sm bg-white/80 rounded-xl max-w-md mx-auto border border-white/20">
              <FaRocket className="text-5xl text-[#00BCFF] mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Pioneers in Tech Recruitment
              </h3>
              <p className="text-gray-600">
                Leading the digital talent revolution since 2002
              </p>
            </div>
          </div>
        </div>
      </div>

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
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default DigitalDisruption;
