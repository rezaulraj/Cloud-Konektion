import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaRocket,
  FaChartLine,
  FaGlobeAsia,
  FaUserTie,
  FaLightbulb,
} from "react-icons/fa";
import bgimage from "../../assets/home/dot.svg?url";
import { useTranslation } from "react-i18next";

const DotPattern = () => (
  <motion.svg
    className="absolute inset-0 w-full h-full opacity-10 z-0"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.1 }}
    transition={{ duration: 1.5 }}
  >
    <pattern
      id="dotPattern"
      x="0"
      y="0"
      width="20"
      height="20"
      patternUnits="userSpaceOnUse"
    >
      <circle cx="10" cy="10" r="1" fill="#00BCFF" />
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#dotPattern)" />
  </motion.svg>
);

const CompanyOverview = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const stats = [
    {
      icon: <FaGlobeAsia className="text-3xl text-[#00BCFF]" />,
      value: "1",
      label: t("homepage.contryn1"),
    },
    {
      icon: <FaUserTie className="text-3xl text-[#00BCFF]" />,
      value: "300+",
      label: t("homepage.contryn2"),
    },
    {
      icon: <FaChartLine className="text-3xl text-[#00BCFF]" />,
      value: "93%",
      label: t("homepage.contryn3"),
    },
    {
      icon: <FaLightbulb className="text-3xl text-[#00BCFF]" />,
      value: "10+",
      label: t("homepage.contryn4"),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const float = {
    hidden: { y: 0 },
    visible: {
      y: [-10, 0, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatDelay = {
    hidden: { y: 0 },
    visible: {
      y: [10, 0, 10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden bg-gray-50"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
      initial="hidden"
      animate={controls}
      variants={container}
    >
      <DotPattern />

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div className="space-y-8" variants={container}>
            <motion.div className="flex items-center space-x-3" variants={item}>
              <div className="w-12 h-1 bg-[#00BCFF]"></div>
              <span className="text-sm font-semibold tracking-wider text-[#00BCFF] uppercase">
                {t("homepage.industryleder")}
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              variants={item}
            >
              <span className="text-[#00BCFF]">{t("homepage.contry")}</span>
              {t("homepage.contrysub1")}
              <span className="text-[#00BCFF]">{t("homepage.contrysub2")}</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={item}
            >
              {t("homepage.contryp1")} <br /> {t("homepage.contryp2")}
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-6 mt-8"
              variants={container}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="p-3 bg-[#00BCFF]/10 rounded-full"
                      whileHover={{ rotate: 15 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="relative" variants={slideIn}>
            <motion.div
              className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50"
              whileInView={{ scale: [0.95, 1] }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 opacity-30">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {[...Array(20)].map((_, i) => (
                    <circle
                      key={i}
                      cx={Math.random() * 100}
                      cy={Math.random() * 100}
                      r={Math.random() * 2 + 0.5}
                      fill="#00BCFF"
                    />
                  ))}
                  {[...Array(10)].map((_, i) => (
                    <line
                      key={i}
                      x1={Math.random() * 100}
                      y1={Math.random() * 100}
                      x2={Math.random() * 100}
                      y2={Math.random() * 100}
                      stroke="#00BCFF"
                      strokeWidth="0.5"
                    />
                  ))}
                </svg>
              </div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  className="text-center p-8 backdrop-blur-sm bg-white/80 rounded-xl max-w-md mx-auto border border-white/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{
                      y: [-5, 0, -5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaRocket className="text-5xl text-[#00BCFF] mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {t("homepage.homeh")}
                  </h3>
                  <p className="text-gray-600">{t("homepage.homep")}</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#00BCFF]/10 blur-xl"
              variants={float}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-[#0066FF]/10 blur-xl"
              variants={floatDelay}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyOverview;
