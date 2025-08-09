import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaBuilding,
  FaGlobeAmericas,
  FaHandshake,
  FaTruckMoving,
  FaUsersCog,
  FaChartBar,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WhyCloudKonektion = () => {
  const { t } = useTranslation();
  const reasons = [
    {
      number: "1",
      icon: <FaUserTie className="text-4xl text-[#00BCFF]" />,
      title: t("homepage.whyckc1h1"),
      description: [t("homepage.whyckc1p1"), t("homepage.whyckc1p2")],
      features: [
        {
          icon: <FaBuilding className="text-[#00BCFF]" />,
          text: t("homepage.whyckc1batch1"),
        },
        {
          icon: <FaTruckMoving className="text-[#00BCFF]" />,
          text: t("homepage.whyckc1batch2"),
        },
        {
          icon: <FaUsersCog className="text-[#00BCFF]" />,
          text: t("homepage.whyckc1batch3"),
        },
        {
          icon: <FaChartBar className="text-[#00BCFF]" />,
          text: t("homepage.whyckc1batch4"),
        },
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "2",
      icon: <FaGlobeAmericas className="text-4xl text-[#00BCFF]" />,
      title: t("homepage.whyckc2h1"),
      description: [t("homepage.whyckc2p1"), t("homepage.whyckc2p2")],
      highlights: [
        t("homepage.whyckc2batch1"),
        t("homepage.whyckc2batch2"),
        t("homepage.whyckc2batch3"),
        t("homepage.whyckc2batch4"),
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageRight: true,
    },
    {
      number: "3",
      icon: <FaHandshake className="text-4xl text-[#00BCFF]" />,
      title: t("homepage.whyckc3h1"),
      description: [t("homepage.whyckc3p1"), t("homepage.whyckc3p2")],
      benefits: [
        t("homepage.whyckc3batch1"),
        t("homepage.whyckc3batch2"),
        t("homepage.whyckc3batch3"),
        t("homepage.whyckc3batch4"),
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textItem = {
    hidden: { x: -50, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const imageItem = {
    hidden: { x: 50, opacity: 0 },
    show: {
      x: 0,
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
    <div className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {[...Array(6)].map((_, i) => (
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
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            {t("homepage.whyckh1")}
            <span className="text-[#00BCFF]">{t("homepage.whyckh2")}</span>?
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-[#00BCFF] mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            whileHover={{ scale: 1.01 }}
          >
            {t("homepage.whyckp")}
          </motion.p>
        </motion.div>

        {/* Reasons List */}
        <motion.div
          className="space-y-24"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                reason.imageRight ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 items-center`}
            >
              {/* Image Column */}
              {reason.imageUrl && (
                <motion.div
                  className="lg:w-1/2 h-96 rounded-xl overflow-hidden shadow-lg"
                  variants={imageItem}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={reason.imageUrl}
                    alt={reason.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              )}

              {/* Text Column */}
              <motion.div
                className={`lg:w-1/2 ${
                  reason.imageRight ? "lg:pr-12" : "lg:pl-12"
                }`}
                variants={textItem}
              >
                <div className="flex items-center mb-6">
                  <span className="text-5xl font-bold text-gray-200 mr-4">
                    {reason.number}
                  </span>
                  <motion.div
                    className="text-4xl text-[#00BCFF]"
                    whileHover={{ rotate: 15 }}
                  >
                    {reason.icon}
                  </motion.div>
                </div>

                <motion.h3
                  className="text-2xl font-bold text-gray-900 mb-4"
                  whileHover={{ color: "#00BCFF" }}
                >
                  {reason.title}
                </motion.h3>

                {reason.description.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    className="text-gray-600 mb-4"
                    whileHover={{ x: 5 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}

                {/* Features/Highlights/Benefits */}
                <motion.div
                  className="mt-6 grid grid-cols-2 gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {reason.features &&
                    reason.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg"
                        whileHover={{
                          x: 5,
                          backgroundColor: "#f0f9ff",
                          boxShadow: "0 4px 6px -1px rgba(0, 188, 255, 0.1)",
                        }}
                      >
                        <div className="text-xl">{feature.icon}</div>
                        <span className="text-gray-700 font-medium">
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}

                  {reason.highlights &&
                    reason.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start bg-gray-50 p-3 rounded-lg"
                        whileHover={{
                          x: 5,
                          backgroundColor: "#f0f9ff",
                          boxShadow: "0 4px 6px -1px rgba(0, 188, 255, 0.1)",
                        }}
                      >
                        <span className="text-[#00BCFF] mr-2 text-xl">•</span>
                        <span className="text-gray-700 font-medium">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}

                  {reason.benefits &&
                    reason.benefits.map((benefit, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start bg-gray-50 p-3 rounded-lg"
                        whileHover={{
                          x: 5,
                          backgroundColor: "#f0f9ff",
                          boxShadow: "0 4px 6px -1px rgba(0, 188, 255, 0.1)",
                        }}
                      >
                        <div className="flex-shrink-0 h-5 w-5 text-[#00BCFF] mr-2 mt-1">
                          <svg
                            className="h-full w-full"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyCloudKonektion;
