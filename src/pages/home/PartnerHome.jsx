import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaTrophy,
  FaChartLine,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const PartnerHome = () => {
  const { t } = useTranslation();
  const benefits = [
    {
      icon: <FaShieldAlt className="text-3xl text-[#00BCFF]" />,
      title: t("homepage.cpch1"),
      description: t("homepage.cpcp1"),
    },
    {
      icon: <FaTrophy className="text-3xl text-[#00BCFF]" />,
      title: t("homepage.cpch2"),
      description: t("homepage.cpcp2"),
    },
    {
      icon: <FaChartLine className="text-3xl text-[#00BCFF]" />,
      title: t("homepage.cpch3"),
      description: t("homepage.cpcp3"),
    },
    {
      icon: <FaLightbulb className="text-3xl text-[#00BCFF]" />,
      title: t("homepage.cpch4"),
      description: t("homepage.cpcp4"),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const float = {
    hidden: { y: 0, x: 0, scale: 1 },
    animate: {
      y: [-20, 0, 20, 0],
      x: [10, 20, 10, 0],
      scale: [1.05, 1, 0.95, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#00BCFF]"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(60px)",
            }}
            variants={float}
            initial="hidden"
            animate="animate"
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" variants={container}>
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#00BCFF]/10 text-[#00BCFF] text-sm font-semibold tracking-wider mb-6"
            variants={item}
            whileHover={{ scale: 1.05 }}
          >
            <span>{t("homepage.cpartner")}</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            variants={item}
            whileHover={{ scale: 1.01 }}
          >
            {t("homepage.cpheading1")}
            <br className="hidden lg:block" /> {t("homepage.cpheading2")}
            <span className="text-[#00BCFF]">{t("homepage.cpheading3")}</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={item}
            whileHover={{ x: 5 }}
          >
            {t("homepage.cpp")}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={container}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-white/20"
              variants={item}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                borderColor: "#00BCFF",
              }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="p-4 bg-[#00BCFF]/10 rounded-full mb-4"
                  whileHover={{ rotate: 15 }}
                >
                  {benefit.icon}
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-2"
                  whileHover={{ color: "#00BCFF" }}
                >
                  {benefit.title}
                </motion.h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center" variants={item}>
          <motion.a
            href="about-us"
            className="group inline-flex items-center px-8 py-4 bg-[#00BCFF] text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t("homepage.cpcbtn")}</span>
            <motion.span
              className="ml-3"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaArrowRight />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PartnerHome;
