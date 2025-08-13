import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  FiCheckCircle,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiUser,
} from "react-icons/fi";

const ContactForm = ({ show, onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch("https://formsubmit.co/ajax/help@cloudkonektion.eu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _captcha: false,
          _next: "https://cloudconektion.com/thank-you",
        }),
      });

      setFormSubmitted(true);

      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
        onClose();
      }, 3000);
      setIsLoading(false);
    } catch (error) {
      console.error("Error sending form:", error);
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 opacity-90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative"
          >
            {!formSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("modelContact.headContact")}
                </h3>
                <form onSubmit={handleSubmit}>
                  <div>
                    <div className="flex items-center mb-2">
                      <FiUser className="text-gray-500 mr-2" />
                      <label htmlFor="name" className="text-gray-700">
                        {t("modelContact.ourName")}
                      </label>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                    />
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <FiMail className="text-gray-500 mr-2" />
                      <label htmlFor="email" className="text-gray-700">
                        {t("modelContact.ourEmail")}
                      </label>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                    />
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <FiPhone className="text-gray-500 mr-2" />
                      <label htmlFor="phone" className="text-gray-700">
                        {t("modelContact.ourphone")}
                      </label>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                    />
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <FiMessageSquare className="text-gray-500 mr-2" />
                      <label htmlFor="message" className="text-gray-700">
                        {t("modelContact.ourmesssage")}
                      </label>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition"
                    ></textarea>
                  </div>

                  <div className="mt-8 flex space-x-4">
                    <button
                      type="submit"
                      className="flex-1 bg-[#00BCFF] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
                    >
                      {isLoading ? (
                        <AiOutlineLoading3Quarters className="size-8 animate-spin" />
                      ) : (
                        t("modelContact.ourbtn1")
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 bg-gray-100 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                    >
                      {t("modelContact.ourbtn2")}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <FiCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Your message has been sent successfully.
                </p>
                <p className="text-gray-600">We'll get back to you soon.</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
