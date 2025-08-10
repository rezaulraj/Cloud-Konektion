import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaChevronDown,
  FaChevronUp,
  FaGlobeAmericas,
  FaTrophy,
  FaSearch,
  FaUserFriends,
  FaIndustry,
  FaClock,
  FaMoneyBillWave,
  FaShieldAlt,
} from "react-icons/fa";

const FAQ = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: t("foremployee.faqsq1"),
      answer: t("foremployee.faqsa1"),
      icon: <FaGlobeAmericas className="text-[#00BCFF] text-xl" />,
    },
    {
      question: t("foremployee.faqsq2"),
      answer: t("foremployee.faqsa2"),
      icon: <FaTrophy className="text-[#00BCFF] text-xl" />,
    },
    {
      question: t("foremployee.faqsq3"),
      answer: t("foremployee.faqsa3"),
      icon: <FaSearch className="text-[#00BCFF] text-xl" />,
    },
    {
      question: t("foremployee.faqsq4"),
      answer: t("foremployee.faqsa4"),
      icon: <FaUserFriends className="text-[#00BCFF] text-xl" />,
    },
    {
      question: t("foremployee.faqsq5"),
      answer: t("foremployee.faqsa5"),
      icon: <FaIndustry className="text-[#00BCFF] text-xl" />,
    },
    {
      question: t("foremployee.faqsq6"),
      answer: t("foremployee.faqsa6"),
      icon: <FaClock className="text-[#00BCFF] text-xl" />,
    },
    {
      question: t("foremployee.faqsq7"),
      answer: t("foremployee.faqsa7"),
      icon: <FaMoneyBillWave className="text-[#00BCFF] text-xl" />,
    },
    {
      question: t("foremployee.faqsq8"),
      answer:
        t("foremployee.faqsa8"),
      icon: <FaShieldAlt className="text-[#00BCFF] text-xl" />,
    },
  ];

  return (
    <div className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#00BCFF]">{t("foremployee.faqsh")}</span>
          </h2>
          <div className="w-20 h-1 bg-[#00BCFF] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("foremployee.faqsp")}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300"
            >
              <button
                className={`w-full flex items-center justify-between p-6 text-left ${
                  activeIndex === index ? "bg-gray-50" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">{faq.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                </div>
                {activeIndex === index ? (
                  <FaChevronUp className="text-[#00BCFF] text-lg" />
                ) : (
                  <FaChevronDown className="text-gray-400 text-lg" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="p-6 pt-0">
                  {faq.answer.split("\n").map((paragraph, i) => (
                    <p key={i} className="text-gray-600 mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
