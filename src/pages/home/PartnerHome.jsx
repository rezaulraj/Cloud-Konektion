import React from "react";
import {
  FaShieldAlt,
  FaTrophy,
  FaChartLine,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";

const PartnerHome = () => {
  const benefits = [
    {
      icon: <FaShieldAlt className="text-3xl text-[#00BCFF]" />,
      title: "Protect Your Business",
      description: "Secure top cybersecurity talent to safeguard your assets",
    },
    {
      icon: <FaTrophy className="text-3xl text-[#00BCFF]" />,
      title: "Triumph in the Marketplace",
      description: "Outperform competitors with elite tech teams",
    },
    {
      icon: <FaChartLine className="text-3xl text-[#00BCFF]" />,
      title: "Maximize Profitability",
      description: "Drive revenue growth with strategic hires",
    },
    {
      icon: <FaLightbulb className="text-3xl text-[#00BCFF]" />,
      title: "Innovate Faster",
      description: "Accelerate development with world-class engineers",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#00BCFF] animate-float"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 30 + 20}s`,
              animationDelay: `${Math.random() * 10}s`,
              filter: "blur(60px)",
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00BCFF]/10 text-[#00BCFF] text-sm font-semibold mb-6">
            <span>DIGITAL TALENT SOLUTIONS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Premier Executive Recruitment Partner{" "}
            <br className="hidden lg:block" /> For{" "}
            <span className="text-[#00BCFF]">Digital Talent</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our tech talent equips your company with everything you need to
            compete, protect your business, triumph in the marketplace and
            maximize profitability.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-white/20"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-[#00BCFF]/10 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="group inline-flex items-center px-8 py-4 bg-[#00BCFF] text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300 hover:shadow-lg">
            <span>LEARN MORE</span>
            <FaArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
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

export default PartnerHome;
