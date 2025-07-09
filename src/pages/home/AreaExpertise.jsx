import React from "react";
import { motion } from "framer-motion";
import {
  FaHotel,
  FaHardHat,
  FaTools,
  FaTree,
  FaUtensils,
  FaRobot,
} from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

const AreaExpertise = () => {
  const expertiseAreas = [
    {
      icon: <FaHotel className="text-4xl text-[#00BCFF]" />,
      title: "Hospitality Team Buildup",
      description:
        "Build dedicated service teams for hotels, resorts, and tourism-based businesses.",
    },
    {
      icon: <FaHardHat className="text-4xl text-[#00BCFF]" />,
      title: "Construction Workforce Solutions",
      description:
        "Recruit engineers, project managers, and skilled laborers to support your construction goals.",
    },
    {
      icon: <FaTools className="text-4xl text-[#00BCFF]" />,
      title: "Welding & Metal Work Experts",
      description:
        "Hire certified welders and metal fabricators for industrial and commercial projects.",
    },
    {
      icon: <FaTree className="text-4xl text-[#00BCFF]" />,
      title: "Woodwork & Carpentry Talent",
      description:
        "Skilled carpenters and craftsmen for furniture, interior, and construction woodwork.",
    },
    {
      icon: <FaUtensils className="text-4xl text-[#00BCFF]" />,
      title: "Crockery & Kitchen Staff Hiring",
      description:
        "Sourcing kitchenware specialists and support staff for food service and hospitality sectors.",
    },
    {
      icon: <FaRobot className="text-4xl text-[#00BCFF]" />,
      title: "Digital Talent Recruitment",
      description: "Essential digital-related roles for your online presence.",
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
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
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
            Our areas of <span className="text-[#00BCFF]">expertise</span>
          </h2>
          <div className="w-20 h-1 bg-[#00BCFF] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized recruitment solutions tailored to your needs
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
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="p-3 bg-[#00BCFF]/10 rounded-full inline-flex mb-4">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AreaExpertise;
