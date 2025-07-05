import React from "react";
import {
  FaUserTie,
  FaGlobe,
  FaClock,
  FaSearch,
  FaUser,
  FaEnvelope,
  FaComment,
} from "react-icons/fa";

const TalentExperts = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-[#00BCFF]">Talent</span> Experts
              </h2>
              <div className="w-20 h-1 bg-[#00BCFF] mx-auto lg:mx-0 mb-8"></div>
            </div>

            {/* Expertise Cards */}
            <div className="space-y-8">
              {/* Card 1 */}
              <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#00BCFF] rounded-full flex items-center justify-center text-white">
                  <FaUserTie className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 pl-8">
                  Digital Talent Expertise
                </h3>
                <p className="text-gray-600">
                  Our recruiters are consultants with unmatched digital and
                  technology talent knowledge with in-depth market insights.
                </p>
              </div>

              {/* Card 2 */}
              <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#00BCFF] rounded-full flex items-center justify-center text-white">
                  <FaGlobe className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 pl-8">
                  Find the best tech talent anywhere
                </h3>
                <p className="text-gray-600">
                  JB Hired has a global network of tech talent that can help you
                  fill your digital and technology roles with world-class
                  candidates from local and international markets.
                </p>
              </div>

              {/* Card 3 */}
              <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#00BCFF] rounded-full flex items-center justify-center text-white">
                  <FaClock className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 pl-8">
                  10 days to placement
                </h3>
                <p className="text-gray-600">
                  We are able to fill openings in 10 days on average for urgent
                  roles.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Find Your Next Top Talent.
                </h3>
                <p className="text-gray-600">
                  At Cloud Konektion Hired, we make it easy for you to find
                  top-tier talent that aligns with your organization's goals and
                  culture.
                </p>
                <p className="text-gray-600 mt-2">
                  Simply fill out our form to get started and let us help you
                  build the dream team for your organization.
                </p>
              </div>

              <form className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                  <FaSearch className="text-[#00BCFF] mr-2" />
                  Send us a message
                </h4>

                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaUser className="text-gray-400 mr-2 text-sm" />
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaEnvelope className="text-gray-400 mr-2 text-sm" />
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaComment className="text-gray-400 mr-2 text-sm" />
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                    placeholder="Tell us about your hiring needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00BCFF] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  <span>Get Started</span>
                  <FaSearch className="ml-2" />
                </button>
              </form>
            </div>
          </div>
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

export default TalentExperts;
