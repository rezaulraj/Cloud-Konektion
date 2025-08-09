import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaIndustry,
  FaTruckMoving,
  FaTools,
  FaConciergeBell,
  FaTree,
  FaArrowRight,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AreaExpertise = () => {
  const { t } = useTranslation();
  const expertiseAreas = [
    {
      icon: <FaBuilding className="text-4xl text-white" />,
      title: t("homepage.areaexpratch1"),
      description: t("homepage.areaexpratcp1"),
      imageUrl:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      backImage:
        "https://images.unsplash.com/photo-1691760426662-2b12dc6f413d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <FaIndustry className="text-4xl text-white" />,
      title: t("homepage.areaexpratch2"),
      description: t("homepage.areaexpratcp2"),
      imageUrl:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      backImage:
        "https://plus.unsplash.com/premium_photo-1663091841319-41d3c2efa0b3?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <FaTruckMoving className="text-4xl text-white" />,
      title: t("homepage.areaexpratch3"),
      description: t("homepage.areaexpratcp3"),
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661963219843-f1a50a6cfcd3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      backImage:
        "https://images.unsplash.com/photo-1601631547725-a42f63b10ac8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <FaTools className="text-4xl text-white" />,
      title: t("homepage.areaexpratch4"),
      description: t("homepage.areaexpratcp4"),
      imageUrl:
        "https://images.unsplash.com/photo-1717386255886-6ae56e497f9a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      backImage:
        "https://images.unsplash.com/photo-1639313521811-fdfb1c040ddb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <FaConciergeBell className="text-4xl text-white" />,
      title: t("homepage.areaexpratch5"),
      description: t("homepage.areaexpratcp5"),
      imageUrl:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      backImage:
        "https://plus.unsplash.com/premium_photo-1726718465660-9135cc91d31e?q=80&w=851&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <FaTree className="text-4xl text-white" />,
      title: t("homepage.areaexpratch6"),
      description: t("homepage.areaexpratcp6"),
      imageUrl:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      backImage:
        "https://images.unsplash.com/photo-1645651964715-d200ce0939cc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="our-expertise" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t("homepage.areaexprath1")}{" "}
            <span className="text-[#00BCFF]">{t("homepage.areaexprath2")}</span>
          </h2>
          <div className="w-20 h-1 bg-[#00BCFF] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("homepage.areaexpratp")}
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative h-80 rounded-lg overflow-hidden shadow-lg group perspective-1000"
              whileHover={{ y: -5 }}
            >
              {/* Flip Card Container */}
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side with Image */}
                <div
                  className="absolute w-full h-full backface-hidden bg-cover bg-center flex items-end p-6"
                  style={{ backgroundImage: `url(${area.imageUrl})` }}
                >
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="relative z-10 text-white">
                    <div className="p-3 bg-[#00BCFF] rounded-full inline-flex mb-4">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold">{area.title}</h3>
                  </div>
                </div>

                {/* Back Side with Content and Image */}
                <div
                  className="absolute w-full h-full backface-hidden rotate-y-180 bg-cover bg-center flex items-center p-6"
                  style={{ backgroundImage: `url(${area.backImage})` }}
                >
                  <div className="absolute inset-0 bg-black opacity-60"></div>
                  <div className="relative z-10 text-white p-4">
                    <div className="p-3 bg-[#00BCFF] rounded-full inline-flex mb-4">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                    <p className="text-white">{area.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div className="text-center mt-8" variants={item}>
        <motion.a
          href="services"
          className="group inline-flex items-center px-8 py-4 bg-[#00BCFF] text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{t("homepage.explorservice")}</span>
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
  );
};

export default AreaExpertise;
