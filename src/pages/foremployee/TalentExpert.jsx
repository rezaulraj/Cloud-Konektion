import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
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
  FaCheckCircle,
  FaTimes,
  FaPhone,
} from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const TalentExperts = () => {
  const { t } = useTranslation();

  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    hiringNeeds: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/help@cloudkonektion.eu",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            company: formData.company,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            hiringNeeds: formData.hiringNeeds,
            message: formData.message,
            _captcha: false,
            _next: "https://cloudconektion.com/thank-you",
          }),
        }
      );

      if (!res.ok) throw new Error("Submission failed");

      setFormSubmitted(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setFormSubmitted(false);
        setShowPopup(false);
        setFormData({
          company: "",
          name: "",
          email: "",
          phone: "",
          hiringNeeds: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      alert("Submission failed. Please try again.");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
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
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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

            {[
              {
                icon: FaUserTie,
                titleKey: "foremployee.emtcard1h",
                descKey: "foremployee.emtcard1p",
                tags: [
                  "foremployee.emtcard1l1",
                  "foremployee.emtcard1l2",
                  "foremployee.emtcard1l3",
                ],
              },
              {
                icon: FaGlobe,
                titleKey: "foremployee.emtcard2h",
                descKey: "foremployee.emtcard2p",
                tags: [
                  "foremployee.emtcard2l1",
                  "foremployee.emtcard2l2",
                  "foremployee.emtcard2l3",
                ],
              },
              {
                icon: FaClock,
                titleKey: "foremployee.emtcard3h",
                descKey: "foremployee.emtcard3p",
                tags: [
                  "foremployee.emtcard3l1",
                  "foremployee.emtcard3l2",
                  "foremployee.emtcard3l3",
                ],
              },
            ].map(({ icon: Icon, titleKey, descKey, tags }, i) => (
              <div
                key={i}
                className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#00BCFF] rounded-full flex items-center justify-center text-white">
                  <Icon className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 pl-8">
                  {t(titleKey)}
                </h3>
                <p className="text-gray-600 mb-4">{t(descKey)}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tagKey, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#00BCFF]/10 text-[#00BCFF] rounded-full text-sm"
                    >
                      {t(tagKey)}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

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
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle className="text-[#00BCFF] mt-1 mr-2 flex-shrink-0" />
                      <span>{t(`foremployee.emformlist${i}`)}</span>
                    </li>
                  ))}
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
                    htmlFor="phone"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaPhone className="text-gray-400 mr-2 text-sm" />
                    {t("foremployee.emfromphone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                    placeholder="+4023202230"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="hiringNeeds"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaChartLine className="text-gray-400 mr-2 text-sm" />
                    {t("foremployee.emfromhneed")}
                  </label>
                  <select
                    id="hiringNeeds"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition bg-white"
                    required
                    value={formData.hiringNeeds}
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
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00BCFF] to-[#0077FF] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
                  ) : (
                    <>
                      <span>{t("foremployee.emforbtn")}</span>
                      <FaSearch className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative"
            >
              <button
                onClick={closePopup}
                aria-label="Close popup"
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="text-xl" />
              </button>
              <div className="text-center py-8">
                <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t("foremployee.successTitle") || "Thank You!"}
                </h3>
                <p className="text-gray-600">
                  {t("foremployee.successMessage") ||
                    "Your message has been sent successfully. We'll get back to you soon."}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
        .animate-float {
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
      `}</style>
    </div>
  );
};

export default TalentExperts;
