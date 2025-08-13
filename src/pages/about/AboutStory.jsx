import React from "react";
import { FaBuilding, FaHandshake, FaSearch } from "react-icons/fa";
import rosaliePhoto from "../../assets/about/about1.webp?url";
import maximePhoto from "../../assets/about/about2.webp?url";
import location from "../../assets/join/location.jpg?url";
import { useTranslation } from "react-i18next";

const AboutStory = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              {t("aboutus.aboutpersonh1")}
            </h3>
            <div className="w-20 h-1 bg-[#00BCFF]"></div>
            <p className="text-lg text-gray-600">
              {t("aboutus.aboutpersonp1")}
            </p>
          </div>

          <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden">
            <img
              src={rosaliePhoto}
              alt="Rosalie Thompson"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden lg:order-1 order-2">
            <img
              src={maximePhoto}
              alt="Maxime Ferreira"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 lg:order-2 order-1">
            <h3 className="text-3xl font-bold text-gray-900">
              {t("aboutus.aboutpersonh2")}
            </h3>
            <div className="w-20 h-1 bg-[#00BCFF]"></div>
            <p className="text-lg text-gray-600">
              {t("aboutus.aboutpersonp2")}
            </p>
            <button
              onClick={() => {
                const section = document.querySelector("#contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-6 py-3 bg-[#00BCFF] text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors mt-4"
            >
              <FaSearch className="mr-3" />
              {t("aboutus.aboutperosonbtn")}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Office</h3>
            <div className="w-20 h-1 bg-[#00BCFF]"></div>
            <div className="flex items-start space-x-4">
              <FaBuilding className="text-2xl text-[#00BCFF] mt-1" />
              <div className="space-y-3">
                <p className="text-lg font-medium text-gray-900">
                  {t("aboutus.officeloc")}
                </p>
                <p className="text-gray-600">
                 📍 112-116 Whitechapel Road, London, England, UK, E1 1JE
                </p>

                <p className="text-gray-600">
                 📍 RAG Global Business Hub, Al Hilal Bank Building - Al Nahda St
                  - Al Qusais - Al Qusais 2 - Dubai - UAE
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-900/20"></div>
            <div className="absolute bottom-0 right-0 bg-gray-900/40 text-center p-6">
              <FaBuilding className="text-5xl text-[#00BCFF] mx-auto mb-4" />
              <p className="text-white font-semibold">{t("aboutus.offc")}</p>
            </div>
            <img src={location} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
