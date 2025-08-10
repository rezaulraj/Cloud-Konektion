import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaRocket,
  FaLock,
  FaUserTie,
  FaChartLine,
  FaHandshake,
  FaAward,
} from "react-icons/fa";
import { GiSkills, GiMoneyStack } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";

const BenefitsSection = () => {
  const { t } = useTranslation();
  const benefits = [
    {
      icon: <FaRocket className="text-4xl text-blue-500" />,
      title: t("forcandidats.whycandidatecard1h"),
      description: t("forcandidats.whycandidatecard1p"),
    },
    {
      icon: <FaLock className="text-4xl text-purple-500" />,
      title: t("forcandidats.whycandidatecard2h"),
      description: t("forcandidats.whycandidatecard2p"),
    },
    {
      icon: <GiSkills className="text-4xl text-green-500" />,
      title: t("forcandidats.whycandidatecard3h"),
      description: t("forcandidats.whycandidatecard3p"),
    },
    {
      icon: <GiMoneyStack className="text-4xl text-yellow-500" />,
      title: t("forcandidats.whycandidatecard4h"),
      description: t("forcandidats.whycandidatecard4p"),
    },
    {
      icon: <IoMdTime className="text-4xl text-red-500" />,
      title: t("forcandidats.whycandidatecard5h"),
      description: t("forcandidats.whycandidatecard5p"),
    },
    {
      icon: <FaUserTie className="text-4xl text-indigo-500" />,
      title: t("forcandidats.whycandidatecard6h"),
      description: t("forcandidats.whycandidatecard6p"),
    },
    {
      icon: <FaChartLine className="text-4xl text-teal-500" />,
      title: t("forcandidats.whycandidatecard7h"),
      description: t("forcandidats.whycandidatecard7p"),
    },
    {
      icon: <FaHandshake className="text-4xl text-orange-500" />,
      title: t("forcandidats.whycandidatecard8h"),
      description: t("forcandidats.whycandidatecard8p"),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("forcandidats.whychosech1")}
            <span className="text-blue-600">
              {t("forcandidats.whychosech2")}
            </span>
            {t("forcandidats.whychosech3")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("forcandidats.whychosecp")}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-100 group"
            >
              {/* Icon Container with Gradient Background */}
              <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Animated Arrow (Appears on Hover) */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-6 h-6 text-blue-500 animate-bounce-horizontal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-blue-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "3x", label: t("forcandidats.whyprorate1") },
              { value: "80%", label: t("forcandidats.whyprorate2") },
              { value: "25%", label: t("forcandidats.whyprorate3") },
              { value: "10K+", label: t("forcandidats.whyprorate4") },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <p className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
