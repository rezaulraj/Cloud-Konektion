import React from "react";
import herojoin from "../../assets/join/heroj.webp";
import join from "../../assets/join/join.jpeg";
import { useTranslation } from "react-i18next";

const HeroJoinUs = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={herojoin}
          alt="Business partners shaking hands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-600/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-white">
            <div className="inline-flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="font-medium">{t("joinus.joinherobat")}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t("joinus.joinheroh1")}
              <span className="text-[#00BCFF]">{t("joinus.joinheroh2")}</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-lg">
              {t("joinus.joinherop")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const section = document.querySelector("#contact");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 bg-[#00BCFF] text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-[#00BCFF] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t("joinus.joinherobtn1")}
              </button>
              <button
                onClick={() => {
                  const section = document.querySelector("#benefits");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 hover:shadow-lg"
              >
                {t("joinus.joinherobtn2")}
              </button>
            </div>

            <div className="flex flex-wrap gap-6 mt-12">
              {[
                { value: "200+", label: t("joinus.joincardt1") },
                { value: "40%", label: t("joinus.joincardt2") },
                { value: "24/7", label: t("joinus.joincardt3") },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 p-3 rounded-xl backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-[#00BCFF]">
                    {stat.value}
                  </p>
                  <p className="text-sm opacity-80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative mt-12 lg:mt-0">
            <div className="relative w-full max-w-xl mx-auto">
              <img
                src={join}
                alt="Business partners collaborating"
                className="rounded-2xl w-full border-4 border-white shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500"
              />

              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400 rounded-full opacity-10 -z-10"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-400 rounded-full opacity-10 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroJoinUs;
