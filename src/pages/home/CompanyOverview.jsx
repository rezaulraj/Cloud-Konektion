import React from "react";
import {
  FaRocket,
  FaChartLine,
  FaGlobeAsia,
  FaUserTie,
  FaLightbulb,
} from "react-icons/fa";
import bgimage from "../../assets/home/dot.svg?url"; // Your SVG background image

// Inline SVG dot pattern
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

const CompanyOverview = () => {
  const stats = [
    {
      icon: <FaGlobeAsia className="text-3xl text-[#00BCFF]" />,
      value: "2",
      label: "Regions Covered",
    },
    {
      icon: <FaUserTie className="text-3xl text-[#00BCFF]" />,
      value: "500+",
      label: "Executives Placed",
    },
    {
      icon: <FaChartLine className="text-3xl text-[#00BCFF]" />,
      value: "95%",
      label: "Success Rate",
    },
    {
      icon: <FaLightbulb className="text-3xl text-[#00BCFF]" />,
      value: "20+",
      label: "Years Experience",
    },
  ];

  return (
    <div
      className="relative overflow-hidden bg-gray-50"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
        opacity: 1,
      }}
    >
      {/* Inline Dot Pattern */}
      <DotPattern />

      {/* Content */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-1 bg-[#00BCFF]"></div>
              <span className="text-sm font-semibold tracking-wider text-[#00BCFF] uppercase">
                Industry Leaders
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              The Leader of the Technology Headhunting Space in{" "}
              <span className="text-[#00BCFF]">APAC</span> and{" "}
              <span className="text-[#00BCFF]">MENA</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2002 and headquartered in Singapore, JB Hired is
              dedicated to its clients' success and uses a consulting approach
              mixed with high technology systems developed in-house to provide
              the best talents at lightning speed.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#00BCFF]/10 rounded-full">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
              {/* Abstract SVG inside box */}
              <div className="absolute inset-0 opacity-30">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {[...Array(20)].map((_, i) => (
                    <circle
                      key={i}
                      cx={Math.random() * 100}
                      cy={Math.random() * 100}
                      r={Math.random() * 2 + 0.5}
                      fill="#00BCFF"
                    />
                  ))}
                  {[...Array(10)].map((_, i) => (
                    <line
                      key={i}
                      x1={Math.random() * 100}
                      y1={Math.random() * 100}
                      x2={Math.random() * 100}
                      y2={Math.random() * 100}
                      stroke="#00BCFF"
                      strokeWidth="0.5"
                    />
                  ))}
                </svg>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 backdrop-blur-sm bg-white/80 rounded-xl max-w-md mx-auto border border-white/20">
                  <FaRocket className="text-5xl text-[#00BCFF] mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Lightning Fast Recruitment
                  </h3>
                  <p className="text-gray-600">
                    Our proprietary AI matching system delivers qualified
                    candidates 3x faster than industry average.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Blur Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#00BCFF]/10 blur-xl animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-[#0066FF]/10 blur-xl animate-float-delay"></div>
          </div>
        </div>
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 6s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  );
};

export default CompanyOverview;
