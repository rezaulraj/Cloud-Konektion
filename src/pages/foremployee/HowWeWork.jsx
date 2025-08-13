import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaSearch,
  FaUserFriends,
  FaComments,
  FaHandshake,
} from "react-icons/fa";

const HowWeWork = () => {
  const { t } = useTranslation();
  const steps = [
    {
      icon: <FaSearch className="text-2xl text-[#00BCFF]" />,
      title: t("foremployee.hwwrescard1h"),
      description: t("foremployee.hwwrescard1p"),
    },
    {
      icon: <FaUserFriends className="text-2xl text-[#00BCFF]" />,
      title: t("foremployee.hwwrescard2h"),
      description: t("foremployee.hwwrescard2p"),
    },
    {
      icon: <FaComments className="text-2xl text-[#00BCFF]" />,
      title: t("foremployee.hwwrescard3h"),
      description: t("foremployee.hwwrescard3p"),
    },
    {
      icon: <FaHandshake className="text-2xl text-[#00BCFF]" />,
      title: t("foremployee.hwwrescard4h"),
      description: t("foremployee.hwwrescard4p"),
    },
  ];

  return (
    <div className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("foremployee.howweworkh1")}{" "}
            <span className="text-[#00BCFF]">
              {t("foremployee.howweworkh2")}
            </span>
          </h2>
          <div className="w-20 h-1 bg-[#00BCFF] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("foremployee.howweworkp")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:pt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t("foremployee.howweworkexph")}
            </h3>
            <p className="text-gray-600 mb-4">
              {t("foremployee.howweworkexpp1")}
            </p>
            <p className="text-gray-600">{t("foremployee.howweworkexpp2")}</p>
          </div>

          <div className="relative my-8 lg:my-0">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#00BCFF] transform -translate-x-1/2"></div>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="hidden lg:block absolute left-1/2 top-5 w-4 h-4 rounded-full bg-[#00BCFF] transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 lg:ml-10 lg:mr-10">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-[#00BCFF]/10 flex items-center justify-center mb-4">
                        {step.icon}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t("foremployee.howweworkperh")}
            </h3>
            <p className="text-gray-600 mb-4">
              {t("foremployee.howweworkperp1")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("foremployee.howweworkperp2")}
            </p>
            <p className="text-gray-600">{t("foremployee.howweworkperp3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
