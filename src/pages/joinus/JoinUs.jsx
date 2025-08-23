import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUsers,
  FaLightbulb,
  FaHandsHelping,
  FaChartLine,
  FaLaugh,
  FaGlobe,
  FaTimes,
} from "react-icons/fa";
import { GiGrowth, GiEarthAmerica } from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const JoinUs = () => {
  const { t } = useTranslation();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const coreValues = [
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: t("joinus.joinvalueca1h"),
      description: t("joinus.joinvalueca1p"),
    },
    {
      icon: <FaHandsHelping className="text-4xl" />,
      title: t("joinus.joinvalueca2h"),
      description: t("joinus.joinvalueca2p"),
    },
    {
      icon: <GiGrowth className="text-4xl" />,
      title: t("joinus.joinvalueca3h"),
      description: t("joinus.joinvalueca3p"),
    },
  ];

  const perks = [
    {
      icon: <FaChartLine className="text-3xl" />,
      title: t("joinus.whylearncard1h"),
      items: [
        t("joinus.whylearncard1l1"),
        t("joinus.whylearncard1l2"),
        t("joinus.whylearncard1l3"),
      ],
    },
    {
      icon: <FaLaugh className="text-3xl" />,
      title: t("joinus.whylearncard2h"),
      items: [
        t("joinus.whylearncard2l1"),
        t("joinus.whylearncard2l2"),
        t("joinus.whylearncard2l3"),
      ],
    },
    {
      icon: <GiEarthAmerica className="text-3xl" />,
      title: t("joinus.whylearncard3h"),
      items: [
        t("joinus.whylearncard3l1"),
        t("joinus.whylearncard3l2"),
        t("joinus.whylearncard3l3"),
      ],
    },
  ];

  return (
    <section
      id="benefits"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#00BCFF]/20 text-[#00BCFF] px-4 py-2 rounded-full mb-4">
            <FaUsers className="text-lg" />
            <span className="font-medium">{t("joinus.joinpartners")}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("joinus.joinsubh1")}{" "}
            <span className="text-[#00BCFF]">{t("joinus.joinsubh2")}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("joinus.joinsubp")}
          </p>
        </div>

        <div className="mb-20 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("joinus.joinch1")}{" "}
                <span className="text-[#00BCFF]">{t("joinus.joinch2")}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">{t("joinus.joincp")}</p>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-2 px-6 py-3 bg-[#00BCFF] text-white rounded-lg font-medium hover:bg-[#00BCFF]/90 transition-colors"
              >
                <FaCirclePlay />
                {t("joinus.joincbtn")}
              </button>
            </div>
            <div className="bg-gray-100 min-h-[300px] flex items-center justify-center">
              <img
                src="https://cdn.prod.website-files.com/62554f8964d8fe28a4ea9f70/6570a287282ea9ecf19de1a1_partnership-business.webp"
                alt="Recruitment process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("joinus.joinvalueh1")}
            <span className="text-[#00BCFF]">{t("joinus.joinvalueh2")}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-purple-50 flex items-center justify-center text-[#00BCFF]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 bg-purple-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("joinus.whylearnh1")}
            <span className="text-[#00BCFF]">{t("joinus.whylearnh2")}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-[#00BCFF]">
                    {perk.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {perk.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {perk.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t("joinus.readyToServeh1")}
            <span className="text-[#00BCFF]">{t("joinus.readyToServeh2")}</span>
            ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t("joinus.readyToServep1")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={"/for-candidates"}
              className="px-8 py-3 bg-[#00BCFF] text-white rounded-lg font-medium hover:bg-[#00BCFF]/90 transition-colors cursor-pointer"
            >
              {t("joinus.readybtn1")}
            </Link>
            <button
              onClick={() => {
                const section = document.querySelector("#contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {t("joinus.readybtn2")}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-black rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-3 right-3 z-10 text-white text-2xl bg-black/40 p-2 rounded-full hover:bg-black/70 transition"
              >
                <FaTimes />
              </button>
              <video
                src="https://videos.pexels.com/video-files/3246359/3246359-uhd_2560_1440_25fps.mp4"
                controls
                autoPlay
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default JoinUs;
