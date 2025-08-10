import React from "react";
import { FaSearch, FaUserTie, FaChartLine } from "react-icons/fa";
import heroImage from "../../assets/employee/heroemp.jpg";
import { useTranslation } from "react-i18next";

const HeroEmployee = () => {
  const { t } = useTranslation();
  return (
    <div className="relative h-[100vh] min-h-[400px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Top talent professionals at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t("foremployee.employeeheroh1")}{" "}
            <span className="text-[#00BCFF]">
              {t("foremployee.employeeheroh2")}
            </span>{" "}
            {t("foremployee.employeeheroh3")}
            <br />
            {t("foremployee.employeehero4")}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("foremployee.employeeherop")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <button className="flex items-center gap-2 bg-[#00BCFF] hover:bg-[#0095D9] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              <FaSearch /> {t("foremployee.employeeherobtn1")}
            </button>
            <button className="flex items-center gap-2 bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              <FaUserTie /> {t("foremployee.employeeherobtn2")}
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 text-center text-white">
            <div className="flex flex-col items-center">
              <FaChartLine className="text-2xl text-[#00BCFF] mb-2" />
              <span className="text-xl font-bold">95%</span>
              <span className="text-sm">{t("foremployee.employeestat1")}</span>
            </div>
            <div className="flex flex-col items-center">
              <FaUserTie className="text-2xl text-[#00BCFF] mb-2" />
              <span className="text-xl font-bold">48h</span>
              <span className="text-sm">{t("foremployee.employeestat2")}</span>
            </div>
            <div className="flex flex-col items-center">
              <FaChartLine className="text-2xl text-[#00BCFF] mb-2" />
              <span className="text-xl font-bold">10,000+</span>
              <span className="text-sm">{t("foremployee.employeestat3")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-[#00BCFF]/10 blur-xl animate-float"></div>
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#0066FF]/10 blur-xl animate-float-delay"></div>

      {/* Animation styles */}
      <style jsx="true" global="true">{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
        }
        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(10px) translateX(-20px);
          }
          50% {
            transform: translateY(20px) translateX(0);
          }
          75% {
            transform: translateY(10px) translateX(20px);
          }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroEmployee;
