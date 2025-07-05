import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import contact from "../../assets/home/contact.jpg";

const ContactHelp = () => {
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
    hidden: { y: 30, opacity: 0 },
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
    hidden: { y: 0, x: 0 },
    animate: {
      y: [-15, 0, 15, 0],
      x: [10, 20, 10, 0],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatDelay = {
    hidden: { y: 0, x: 0 },
    animate: {
      y: [10, 20, 10, 0],
      x: [-20, 0, 20, 0],
      transition: {
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={contact}
          alt="Contact background"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="text-white" variants={container}>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={item}
              whileHover={{ scale: 1.02 }}
            >
              Have a <span className="text-[#00BCFF]">question</span>?
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl mb-8 opacity-90"
              variants={item}
              whileHover={{ x: 5 }}
            >
              We would love to help
            </motion.p>
            <motion.div className="space-y-4" variants={container}>
              {[
                {
                  icon: <FaUser />,
                  title: "Expert Support",
                  text: "Our specialists are ready to assist you",
                },
                {
                  icon: <FaEnvelope />,
                  title: "Quick Response",
                  text: "Typically reply within 24 hours",
                },
                {
                  icon: <FaComment />,
                  title: "Personalized Advice",
                  text: "Tailored solutions for your needs",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  variants={item}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-[#00BCFF]/20 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    {React.cloneElement(feature.icon, {
                      className: "text-[#00BCFF] text-xl",
                    })}
                  </motion.div>
                  <div>
                    <motion.h4
                      className="text-lg font-semibold"
                      whileHover={{ color: "#00BCFF" }}
                    >
                      {feature.title}
                    </motion.h4>
                    <p className="opacity-80">{feature.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden p-8 md:p-10"
            variants={item}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
            }}
          >
            <form className="space-y-6">
              {[
                {
                  icon: <FaUser />,
                  id: "name",
                  label: "Your name",
                  type: "text",
                  placeholder: "John Doe",
                },
                {
                  icon: <FaEnvelope />,
                  id: "email",
                  label: "Your email",
                  type: "email",
                  placeholder: "john@example.com",
                },
                {
                  icon: <FaComment />,
                  id: "message",
                  label: "How can we help?",
                  type: "textarea",
                  placeholder: "Tell us about your needs...",
                },
              ].map((field, index) => (
                <motion.div
                  key={index}
                  className="space-y-1"
                  whileHover={{ scale: 1.01 }}
                >
                  <label
                    htmlFor={field.id}
                    className="block text-gray-700 font-medium"
                  >
                    {field.label}
                  </label>
                  <div className="relative">
                    <div
                      className={`absolute ${
                        field.type === "textarea"
                          ? "top-3 left-3"
                          : "inset-y-0 left-0 pl-3 flex items-center"
                      } pointer-events-none`}
                    >
                      {React.cloneElement(field.icon, {
                        className: "text-gray-400",
                      })}
                    </div>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        rows="4"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.button
                type="submit"
                className="w-full bg-[#00BCFF] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-[#00BCFF]/10 blur-xl"
        variants={float}
        initial="hidden"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-[#0066FF]/10 blur-xl"
        variants={floatDelay}
        initial="hidden"
        animate="animate"
      />
    </div>
  );
};

export default ContactHelp;
