import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaLightbulb,
  FaHeadset,
  FaUserShield,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import Calendly from "../../components/Calendly";

const EmployeeService = () => {
  const { t } = useTranslation();
  const [showCalendly, setShowCalendly] = useState(false);
  const services = [
    {
      icon: <FaUsers className="text-4xl mb-4 text-blue-600" />,
      title: t("homepage.whyservcieh1"),
      description: t("homepage.whyservciep1"),
    },
    {
      icon: <FaHandshake className="text-4xl mb-4 text-green-600" />,
      title: t("homepage.whyservcieh2"),
      description: t("homepage.whyservciep2"),
    },
    {
      icon: <FaChartLine className="text-4xl mb-4 text-purple-600" />,
      title: t("homepage.whyservcieh3"),
      description: t("homepage.whyservciep3"),
    },
    {
      icon: <FaLightbulb className="text-4xl mb-4 text-yellow-500" />,
      title: t("homepage.whyservcieh4"),
      description: t("homepage.whyservciep4"),
    },
    {
      icon: <FaHeadset className="text-4xl mb-4 text-red-500" />,
      title: t("homepage.whyservcieh5"),
      description: t("homepage.whyservciep5"),
    },
    {
      icon: <FaUserShield className="text-4xl mb-4 text-teal-500" />,
      title: t("homepage.whyservcieh6"),
      description: t("homepage.whyservciep6"),
    },
  ];

  const testimonials = [
    {
      quote: t("homepage.whycliendq1"),
      author: t("homepage.whycliendha1"),
      role: t("homepage.whycliendhr1"),
      industry: t("homepage.whycliendhi1"),
      rating: 5,
    },
    {
      quote: t("homepage.whycliendq2"),
      author: t("homepage.whycliendha2"),
      role: t("homepage.whycliendhr2"),
      industry: t("homepage.whycliendhi2"),
      rating: 5,
    },
    {
      quote: t("homepage.whycliendq3"),
      author: t("homepage.whycliendha3"),
      role: t("homepage.whycliendhr3"),
      industry: t("homepage.whycliendhi3"),
      rating: 4,
    },
    {
      quote: t("homepage.whycliendq4"),
      author: t("homepage.whycliendha4"),
      role: t("homepage.whycliendhr4"),
      industry: t("homepage.whycliendhi4"),
      rating: 5,
    },
    {
      quote: t("homepage.whycliendq5"),
      author: t("homepage.whycliendha5"),
      role: t("homepage.whycliendhr5"),
      industry: t("homepage.whycliendhi5"),
      rating: 5,
    },
    {
      quote: t("homepage.whycliendq6"),
      author: t("homepage.whycliendha6"),
      role: t("homepage.whycliendhr6"),
      industry: t("homepage.whycliendhi6"),
      rating: 5,
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t("homepage.whyemplyeeh1")}
            <span className="text-[#00BCFF]">{t("homepage.whyemplyeeh2")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("homepage.whyemplyeep")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0889b8] rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">
            {t("homepage.whycliendh1")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm"
              >
                <FaQuoteLeft className="text-2xl text-blue-200 mb-4" />
                <p className="italic mb-6 text-[#00BCFF]">
                  {testimonial.quote}
                </p>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-blue-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="font-bold text-[#00BCFF]">{testimonial.author}</p>
                <p className="text-[#00BCFF] text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-4">
            <button onClick={() => setShowCalendly(true)} className="bg-[#00BCFF] hover:bg-[#0d99cc] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl cursor-pointer">
              {t("homepage.whybutton1")}
            </button>
            <a
              href="/for-employers"
              className=" hover:bg-[#0d99cc] text-[#0d99cc] hover:text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 border-2 border-[#0d99cc] hover:shadow-xl cursor-pointer"
            >
              {t("homepage.whybutton2")}
            </a>
          </div>
          <p className="mt-4 text-gray-600">{t("homepage.whybuttonp")}</p>
        </div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default EmployeeService;
