import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaHardHat,
  FaIndustry,
  FaRobot,
  FaTruckMoving,
  FaWarehouse,
  FaTools,
  FaWrench,
  FaConciergeBell,
  FaUtensils,
  FaTree,
  FaHammer,
  FaBoxOpen,
  FaClipboardList,
  FaAppleAlt,
  FaBlender,
  FaTractor,
  FaLeaf,
  FaPaintRoller,
  FaSprayCan,
  FaBolt,
  FaCogs,
  FaLaptop,
  FaPhone,
  FaFileAlt,
} from "react-icons/fa";

import constructionImg from "../../assets/service/construction.jpg";
import manufacturingImg from "../../assets/service/manufacturing.jpg";
import logisticsImg from "../../assets/service/logistics.jpg";
import facilityImg from "../../assets/service/facility.webp";
import hospitalityImg from "../../assets/service/hospitality.avif";
import woodworkImg from "../../assets/service/woodwork.avif";
import warehouseImg from "../../assets/service/warehouse.jpg";
import foodproductionImg from "../../assets/service/foodproduction.jpg";
import agricultureImg from "../../assets/service/agriculture.jpg";
import paintingImg from "../../assets/service/painting.jpg";
import electricalImg from "../../assets/service/electrical.webp";
import officeImg from "../../assets/service/office.jpg";
import { useTranslation } from "react-i18next";
import Calendly from "../../components/Calendly";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const AllServices = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const { t } = useTranslation();
  const services = [
    {
      icons: [
        <FaBuilding key="building" className="text-3xl text-[#00BCFF]" />,
        <FaHardHat key="hardhat" className="text-3xl text-[#00BCFF]" />,
      ],
      title: t("services.service1h1"),
      highlights: [
        t("services.service1hlist1"),
        t("services.service1hlist2"),
        t("services.service1hlist3"),
        t("services.service1hlist4"),
      ],
      description: t("services.service1p"),
      benefits: [
        t("services.service1belist1"),
        t("services.service1belist2"),
        t("services.service1belist3"),
        t("services.service1belist4"),
      ],
      image: constructionImg,
    },
    {
      icons: [
        <FaIndustry key="industry" className="text-3xl text-[#00BCFF]" />,
        <FaRobot key="robot" className="text-3xl text-[#00BCFF]" />,
      ],
      title: t("services.service2h1"),
      highlights: [
        t("services.service2hlist1"),
        t("services.service2hlist2"),
        t("services.service2hlist3"),
        t("services.service2hlist4"),
      ],
      description: t("services.service2p"),
      benefits: [
        t("services.service2belist1"),
        t("services.service2belist2"),
        t("services.service2belist3"),
        t("services.service2belist4"),
      ],
      image: manufacturingImg,
    },
    {
      icons: [
        <FaTruckMoving key="truck" className="text-3xl text-[#00BCFF]" />,
        <FaWarehouse key="warehouse" className="text-3xl text-[#00BCFF]" />,
      ],
      title: t("services.service3h1"),
      highlights: [
        t("services.service3hlist1"),
        t("services.service3hlist2"),
        t("services.service3hlist3"),
        t("services.service3hlist4"),
      ],
      description: t("services.service3p"),
      benefits: [
        t("services.service3belist1"),
        t("services.service3belist2"),
        t("services.service3belist3"),
        t("services.service3belist4"),
      ],
      image: logisticsImg,
    },
    {
      icons: [
        <FaTools key="tools" className="text-3xl text-[#00BCFF]" />,
        <FaWrench key="wrench" className="text-3xl text-[#00BCFF]" />,
      ],
      title: t("services.service4h1"),
      highlights: [
        t("services.service4hlist1"),
        t("services.service4hlist2"),
        t("services.service4hlist3"),
        t("services.service4hlist4"),
      ],
      description: t("services.service4p"),
      benefits: [
        t("services.service4belist1"),
        t("services.service4belist2"),
        t("services.service4belist3"),
        t("services.service4belist4"),
      ],
      image: facilityImg,
    },
    {
      icons: [
        <FaConciergeBell key="concierge" className="text-3xl text-[#00BCFF]" />,
        <FaUtensils key="utensils" className="text-3xl text-[#00BCFF]" />,
      ],
      title: t("services.service5h1"),
      highlights: [
        t("services.service5hlist1"),
        t("services.service5hlist2"),
        t("services.service5hlist3"),
        t("services.service5hlist4"),
      ],
      description: t("services.service5p"),
      benefits: [
        t("services.service5belist1"),
        t("services.service5belist2"),
        t("services.service5belist3"),
        t("services.service5belist4"),
      ],
      image: hospitalityImg,
    },
    {
      icons: [
        <FaTree key="tree" className="text-3xl text-[#00BCFF]" />,
        <FaHammer key="hammer" className="text-3xl text-[#00BCFF]" />,
      ],
      title: t("services.service6h1"),
      highlights: [
        t("services.service6hlist1"),
        t("services.service6hlist2"),
        t("services.service6hlist3"),
        t("services.service6hlist4"),
      ],
      description: t("services.service6p"),
      benefits: [
        t("services.service6belist1"),
        t("services.service6belist2"),
        t("services.service6belist3"),
        t("services.service6belist4"),
      ],
      image: woodworkImg,
    },
    {
      icons: [
        <FaBoxOpen key="BoxOpen" className="text-3xl text-[#00BCFF]" />,
        <FaClipboardList key="Clipboard" className="text-3xl text-[#00BCFF]" />,
      ],
      title: t("services.service7h1"),
      highlights: [
        t("services.service7hlist1"),
        t("services.service7hlist2"),
        t("services.service7hlist3"),
        t("services.service7hlist4"),
      ],
      description: t("services.service7p"),
      benefits: [
        t("services.service7belist1"),
        t("services.service7belist2"),
        t("services.service7belist3"),
        t("services.service7belist4"),
      ],
      image: warehouseImg,
    },
    {
      icons: [
        <FaAppleAlt key="BoxOpen" className="text-3xl text-[#00BCFF]" />,
        <FaBlender key="Clipboard" className="text-3xl text-[#00BCFF]" />,
      ],
      title: t("services.service8h1"),
      highlights: [
        t("services.service8hlist1"),
        t("services.service8hlist2"),
        t("services.service8hlist3"),
        t("services.service8hlist4"),
      ],
      description: t("services.service8p"),
      benefits: [
        t("services.service8belist1"),
        t("services.service8belist2"),
        t("services.service8belist3"),
        t("services.service8belist4"),
      ],
      image: foodproductionImg,
    },
    {
      icons: [
        <FaTractor key="BoxOpen" className="text-3xl text-[#00BCFF]" />,
        <FaLeaf key="Clipboard" className="text-3xl text-[#05af5a]" />,
      ],
      title: t("services.service9h1"),
      highlights: [
        t("services.service9hlist1"),
        t("services.service9hlist2"),
        t("services.service9hlist3"),
        t("services.service9hlist4"),
      ],
      description: t("services.service9p"),
      benefits: [
        t("services.service9belist1"),
        t("services.service9belist2"),
        t("services.service9belist3"),
        t("services.service9belist4"),
      ],
      image: agricultureImg,
    },
    {
      icons: [
        <FaPaintRoller key="BoxOpen" className="text-3xl text-[#00BCFF]" />,
        <FaSprayCan key="Clipboard" className="text-3xl text-[#00BCFF]" />,
      ],
      title: t("services.service10h1"),
      highlights: [
        t("services.service10hlist1"),
        t("services.service10hlist2"),
        t("services.service10hlist3"),
        t("services.service10hlist4"),
      ],
      description: t("services.service10p"),
      benefits: [
        t("services.service10belist1"),
        t("services.service10belist2"),
        t("services.service10belist3"),
        t("services.service10belist4"),
      ],
      image: paintingImg,
    },
    {
      icons: [
        <FaBolt key="BoxOpen" className="text-3xl text-[#00BCFF]" />,
        <FaCogs key="Clipboard" className="text-3xl text-[#00BCFF]" />,
      ],
      title: t("services.service11h1"),
      highlights: [
        t("services.service11hlist1"),
        t("services.service11hlist2"),
        t("services.service11hlist3"),
        t("services.service11hlist4"),
      ],
      description: t("services.service11p"),
      benefits: [
        t("services.service11belist1"),
        t("services.service11belist2"),
        t("services.service11belist3"),
        t("services.service11belist4"),
      ],
      image: electricalImg,
    },
    {
      icons: [
        <FaFileAlt key="BoxOpen" className="text-3xl text-[#00BCFF]" />,
        <FaPhone key="Clipboard" className="text-3xl text-[#00BCFF]" />,
      ],
      title: t("services.service12h1"),
      highlights: [
        t("services.service12hlist1"),
        t("services.service12hlist2"),
        t("services.service12hlist3"),
        t("services.service12hlist4"),
      ],
      description: t("services.service12p"),
      benefits: [
        t("services.service12belist1"),
        t("services.service12belist2"),
        t("services.service12belist3"),
        t("services.service12belist4"),
      ],
      image: officeImg,
    },
  ];
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t("services.servicesubh1")}
            <span className="text-[#00BCFF]">{t("services.servicesubh2")}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("services.servicesubp")}
          </p>
        </motion.div>

        <div className="space-y-28">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center`}
            >
              <div className="md:w-1/2">
                <div className="flex items-center mb-6 gap-3">
                  <div className="flex gap-2">
                    {service.icons.map((icon, i) => (
                      <div key={i} className="p-3 bg-[#00BCFF]/10 rounded-full">
                        {icon}
                      </div>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {t("services.service1hsubh1")}
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 mb-4">
                    {service.highlights.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#00BCFF] mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {t("services.service1beh")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-[#00BCFF]/10 text-[#00BCFF] text-sm"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    const section = document.querySelector("#contact");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3 bg-[#00BCFF] text-white font-medium rounded-lg hover:bg-[#0095D6] transition-colors duration-300 shadow-md cursor-pointer"
                >
                  {t("services.serviceRequest")} {service.title.split("&")[0]}{" "}
                  {t("services.serviceStaff")}
                </button>
              </div>

              <div className="md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden shadow-2xl h-96 w-full"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-medium mb-1">
                        {t("services.serviceFeture")}
                      </p>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-28 bg-gradient-to-r from-[#00BCFF] to-[#0077FF] rounded-2xl p-12 text-center text-white shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            {t("services.customservicesh")}
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {t("services.customservicesp")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setShowCalendly(true)}
              className="px-8 py-4 bg-white text-[#00BCFF] font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md cursor-pointer"
            >
              {t("services.customservicesbtn1")}
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors duration-300">
              Email Now: help@cloudkonektion.eu
            </button>
          </div>
        </motion.div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default AllServices;
