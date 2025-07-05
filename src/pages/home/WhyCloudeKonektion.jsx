import React from "react";
import {
  FaUserTie,
  FaDatabase,
  FaHandshake,
  FaCloud,
  FaShieldAlt,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

const WhyCloudeKonektion = () => {
  const reasons = [
    {
      number: "1",
      icon: <FaUserTie className="text-4xl text-[#00BCFF]" />,
      title: "Digital Talent Expertise",
      description: [
        "Thanks to our extensive expertise in digital positions, we understand the challenges and opportunities of hiring in a highly competitive and dynamic environment.",
        "Our recruitment services cover a wide range of technology-related roles, including engineering, cloud computing, cybersecurity, artificial intelligence, IoT, marketing, sales, and more. Our consultants are highly knowledgeable in all things tech and can help you find the best talent to fit your needs.",
      ],
      features: [
        {
          icon: <FaCloud className="text-[#00BCFF]" />,
          text: "Cloud Computing",
        },
        {
          icon: <FaShieldAlt className="text-[#00BCFF]" />,
          text: "Cybersecurity",
        },
        { icon: <FaRobot className="text-[#00BCFF]" />, text: "AI & IoT" },
        {
          icon: <FaChartLine className="text-[#00BCFF]" />,
          text: "Tech Sales & Marketing",
        },
      ],
    },
    {
      number: "2",
      icon: <FaDatabase className="text-4xl text-[#00BCFF]" />,
      title: "Largest Tech Talent Database",
      description: [
        "With access to the largest database of tech-related candidates worldwide, we can provide you with not only the best local talent but also candidates from major tech hubs such as Silicon Valley.",
        "Our proprietary technology enables us to measure crucial metrics such as the position & candidate matching rate allowing us to source candidates faster than any of your competitors.",
      ],
      highlights: [
        "Global talent pool",
        "Silicon Valley connections",
        "AI-powered matching",
        "Fast candidate sourcing",
      ],
    },
    {
      number: "3",
      icon: <FaHandshake className="text-4xl text-[#00BCFF]" />,
      title: "Consultative Approach to Recruitment",
      description: [
        "Thanks to our extensive candidates' database and our industry knowledge, we are able to source and place the ideal candidates for your business.",
        "In addition, our consultative recruitment approach involves providing advice on the best practices and strategies to attract and retain top tech talent. We ensure that every candidate we recommend is a perfect fit for your position and company culture.",
      ],
      benefits: [
        "Cultural fit assessment",
        "Retention strategies",
        "Market salary analysis",
        "Competitor benchmarking",
      ],
    },
  ];

  return (
    <div className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {[...Array(6)].map((_, i) => (
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-[#00BCFF]">Cloud Konektion</span>?
          </h2>
          <div className="w-20 h-1 bg-[#00BCFF] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our specialized approach sets us apart in tech
            recruitment
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="space-y-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Number and Icon */}
              <div className="lg:col-span-2 flex flex-col items-center">
                <div className="relative mb-6">
                  <span className="text-8xl font-bold text-gray-200">
                    {reason.number}
                  </span>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {reason.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-10 bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>

                {reason.description.map((paragraph, i) => (
                  <p key={i} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}

                {/* Features/Highlights/Benefits */}
                <div className="mt-6">
                  {reason.features && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {reason.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          {feature.icon}
                          <span className="text-gray-700">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {reason.highlights && (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {reason.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#00BCFF] mr-2">•</span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {reason.benefits && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {reason.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-[#00BCFF] mr-2">
                            <svg
                              className="h-full w-full"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
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

export default WhyCloudeKonektion;
