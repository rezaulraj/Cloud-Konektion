import React from "react";
import {
  FaUserTie,
  FaRobot,
  FaDatabase,
  FaUsers,
  FaLaptopCode,
  FaChartBar,
} from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

const AreaExpertise = () => {
  const expertiseAreas = [
    {
      icon: <FaUserTie className="text-4xl text-[#00BCFF]" />,
      title: "CxO From Top Tech Companies",
      description:
        "Discover and recruit experienced executives with backgrounds in digital and technology. These individuals can effectively guide your business through the challenges and opportunities of the digital age.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-[#00BCFF]" />,
      title: "Digital Transformation Talent Sourcing",
      description:
        "We provide you with the right talents who can help you innovate and adapt to the changing market conditions by leveraging the latest digital technologies and solutions.",
    },
    {
      icon: <FaUsers className="text-4xl text-[#00BCFF]" />,
      title: "Tech Team Buildup",
      description:
        "Build successful tech teams that align with your business goals and vision. Our customized and flexible approach can be tailored to meet your specific needs and budget.",
    },
    {
      icon: <FaRobot className="text-4xl text-[#00BCFF]" />,
      title: "Digital Talent Recruitment",
      description:
        "From sales leaders to UX designers, we can provide you with the essential digital-related roles that are necessary for your online presence and growth.",
    },
    {
      icon: <GiArtificialIntelligence className="text-4xl text-[#00BCFF]" />,
      title: "AI Talent Acquisition",
      description:
        "Our specialization in sourcing and placing AI specialists, including machine learning engineers, data scientists, and NLP experts, can help you leverage the power of artificial intelligence for your business.",
    },
    {
      icon: <FaChartBar className="text-4xl text-[#00BCFF]" />,
      title: "Data Science Related Recruitment",
      description:
        "We can help you find the data science experts who are capable of generating insights from your data and solving complex problems. Our expertise extends to hiring data analysts, data engineers, data architects, and more.",
    },
  ];

  return (
    <div className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#00BCFF] animate-float"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 40 + 20}s`,
              animationDelay: `${Math.random() * 10}s`,
              filter: "blur(80px)",
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our areas of <span className="text-[#00BCFF]">expertise</span>
          </h2>
          <div className="w-20 h-1 bg-[#00BCFF] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized recruitment solutions tailored to your digital
            transformation needs
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00BCFF]/5 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="p-4 bg-[#00BCFF]/10 rounded-full inline-flex">
                  {area.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600">{area.description}</p>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#00BCFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) scale(1);
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.05);
          }
          50% {
            transform: translateY(0) translateX(20px) scale(1);
          }
          75% {
            transform: translateY(20px) translateX(10px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};

export default AreaExpertise;
