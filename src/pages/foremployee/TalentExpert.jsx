import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaUserTie,
  FaGlobe,
  FaClock,
  FaSearch,
  FaUser,
  FaEnvelope,
  FaComment,
  FaBriefcase,
  FaChartLine,
  FaHandshake,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const TalentExperts = () => {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    "hiring-needs": "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setShowPopup(true);
    // Reset form if needed
    setFormData({
      company: "",
      name: "",
      email: "",
      "hiring-needs": "",
      message: "",
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="text-xl" />
            </button>
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Successful submission!
              </h3>
              <p className="text-gray-600 mb-6">We will connect you shortly.</p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={closePopup}
                  className="px-4 py-2 bg-[#00BCFF] text-white rounded-lg hover:bg-[#0095D9] transition"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    console.log("Cancelled");
                    closePopup();
                  }}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <span className="text-[#00BCFF]">
                  {t("foremployee.emtalh1")}
                </span>{" "}
                {t("foremployee.emtalh2")}
              </h2>
              <div className="w-20 h-1 bg-[#00BCFF] mx-auto lg:mx-0 mb-8"></div>
              <p className="text-lg text-gray-600 mb-6">
                {t("foremployee.emtalp")}
              </p>
            </div>

            {/* Expertise Cards */}
            <div className="space-y-8">
              {/* Card 1 */}
              <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#00BCFF] rounded-full flex items-center justify-center text-white">
                  <FaUserTie className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 pl-8">
                  {t("foremployee.emtcard1h")}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t("foremployee.emtcard1p")}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#00BCFF]/10 text-[#00BCFF] rounded-full text-sm">
                    {t("foremployee.emtcard1l1")}
                  </span>
                  <span className="px-3 py-1 bg-[#00BCFF]/10 text-[#00BCFF] rounded-full text-sm">
                    {t("foremployee.emtcard1l2")}
                  </span>
                  <span className="px-3 py-1 bg-[#00BCFF]/10 text-[#00BCFF] rounded-full text-sm">
                    {t("foremployee.emtcard1l3")}
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#00BCFF] rounded-full flex items-center justify-center text-white">
                  <FaGlobe className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 pl-8">
                  {t("foremployee.emtcard2h")}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t("foremployee.emtcard2p")}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#00BCFF]/10 text-[#00BCFF] rounded-full text-sm">
                    {t("foremployee.emtcard2l1")}
                  </span>
                  <span className="px-3 py-1 bg-[#00BCFF]/10 text-[#00BCFF] rounded-full text-sm">
                    {t("foremployee.emtcard2l2")}
                  </span>
                  <span className="px-3 py-1 bg-[#00BCFF]/10 text-[#00BCFF] rounded-full text-sm">
                    {t("foremployee.emtcard2l3")}
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#00BCFF] rounded-full flex items-center justify-center text-white">
                  <FaClock className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 pl-8">
                  {t("foremployee.emtcard3h")}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t("foremployee.emtcard3p")}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#00BCFF]/10 text-[#00BCFF] rounded-full text-sm">
                    {t("foremployee.emtcard3l1")}
                  </span>
                  <span className="px-3 py-1 bg-[#00BCFF]/10 text-[#00BCFF] rounded-full text-sm">
                    {t("foremployee.emtcard3l2")}
                  </span>
                  <span className="px-3 py-1 bg-[#00BCFF]/10 text-[#00BCFF] rounded-full text-sm">
                    {t("foremployee.emtcard3l3")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-6 py-2 rounded-full bg-[#00BCFF]/10 text-[#00BCFF] text-sm font-medium mb-4">
                  <FaHandshake className="mr-2" />
                  {t("foremployee.emtformbatch")}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {t("foremployee.emtformh")}
                </h3>
                <p className="text-gray-600">{t("foremployee.emformp1")}</p>
                <ul className="mt-4 space-y-2 text-left text-gray-600">
                  <li className="flex items-start">
                    <FaCheck className="text-[#00BCFF] mt-1 mr-2 flex-shrink-0" />
                    <span>{t("foremployee.emformlist1")}</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-[#00BCFF] mt-1 mr-2 flex-shrink-0" />
                    <span>{t("foremployee.emformlist2")}</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-[#00BCFF] mt-1 mr-2 flex-shrink-0" />
                    <span>{t("foremployee.emformlist3")}</span>
                  </li>
                </ul>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <label
                    htmlFor="company"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaBriefcase className="text-gray-400 mr-2 text-sm" />
                    {t("foremployee.emformcname")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                    placeholder="Your organization"
                    required
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaUser className="text-gray-400 mr-2 text-sm" />
                    {t("foremployee.emfromname")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaEnvelope className="text-gray-400 mr-2 text-sm" />
                    {t("foremployee.emfromemail")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                    placeholder="john@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="hiring-needs"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaChartLine className="text-gray-400 mr-2 text-sm" />
                    {t("foremployee.emfromhneed")}
                  </label>
                  <select
                    id="hiring-needs"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition bg-white"
                    required
                    value={formData["hiring-needs"]}
                    onChange={handleChange}
                  >
                    <option value="">{t("foremployee.emfromhop1")}</option>
                    <option value="executive">
                      {t("foremployee.emfromhop2")}
                    </option>
                    <option value="technical">
                      {t("foremployee.emfromhop3")}
                    </option>
                    <option value="professional">
                      {t("foremployee.emfromhop4")}
                    </option>
                    <option value="contract">
                      {t("foremployee.emfromhop5")}
                    </option>
                    <option value="multiple">
                      {t("foremployee.emfromhop6")}
                    </option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaComment className="text-gray-400 mr-2 text-sm" />
                    {t("foremployee.emfrommessage")}
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                    placeholder={t("foremployee.emformmessplas")}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00BCFF] to-[#0077FF] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  <span>{t("foremployee.emforbtn")}</span>
                  <FaSearch className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx="true" global="true">{`
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
