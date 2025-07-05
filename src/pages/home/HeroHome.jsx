import React from "react";
import heroImage from "../../assets/home/herohome.webp";
import {
  FaSearch,
  FaHeadset,
  FaGlobeAmericas,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";
const HeroHome = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Glassy Text Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 ">
          <div className="text-center space-y-8">
            {/* Subheading with icon */}
            <div className="flex items-center justify-center space-x-2">
              <FaGlobeAmericas className="text-[#00BCFF] text-xl" />
              <span className="text-white font-medium tracking-wider">
                GLOBAL RECRUITMENT SOLUTIONS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              <span className="block">World Class</span>
              <span className="block text-[#00BCFF]">
                Executive Recruitment
              </span>
              <span className="block">& Headhunting</span>
            </h1>

            {/* Tagline */}
            <div className="relative inline-block">
              <p className="text-lg md:text-xl text-white bg-black/40 px-4 py-2 rounded-lg inline-block">
                We are{" "}
                <span className="font-bold text-[#00BCFF]">
                  #1 IN the market
                </span>
              </p>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#00BCFF]/50 blur-sm"></div>
            </div>

            {/* Description */}
            <p className="text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
              Securing senior level talents globally for high growth tech
              companies, SaaS firms, multinational companies and more
            </p>

            {/* Buttons with Smooth Effects */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button className="relative overflow-hidden group px-8 py-3 bg-[#00BCFF] text-white rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <FaSearch className="text-lg" />
                  <span>Discover Jobs</span>
                </span>
                <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
              </button>

              <button className="relative overflow-hidden group px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:-translate-y-1">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <FaHeadset className="text-lg" />
                  <span>Free Consultation</span>
                </span>
                <span className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-all duration-300 rounded-lg"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        {/* <div className="absolute bottom-10 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: <FaUserTie className="text-3xl text-[#00BCFF]" />,
                  value: "500+",
                  label: "Executives Placed",
                },
                {
                  icon: <FaGlobeAmericas className="text-3xl text-[#00BCFF]" />,
                  value: "40+",
                  label: "Countries",
                },
                {
                  icon: <FaChartLine className="text-3xl text-[#00BCFF]" />,
                  value: "95%",
                  label: "Success Rate",
                },
                {
                  icon: <FaSearch className="text-3xl text-[#00BCFF]" />,
                  value: "24h",
                  label: "Response Time",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-white/10 p-4 rounded-lg border border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex justify-center">{stat.icon}</div>
                  <p className="text-2xl font-bold text-white mt-2">
                    {stat.value}
                  </p>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroHome;
