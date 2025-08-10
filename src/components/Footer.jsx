import React, { useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChevronRight,
  FaCheckCircle,
  FaTiktok,
  FaYoutube,
  FaPinterest,
  FaCalendar,
} from "react-icons/fa";
import logo3 from "/logowhite.png";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const quickLinks = [
    { name: t("footer.quickhome"), href: "/" },
    { name: t("footer.quicklink2"), href: "/services" },
    { name: t("footer.quicklink3"), href: "/for-employers" },
    { name: t("footer.quicklink4"), href: "/for-candidates" },
    { name: t("footer.quicklink5"), href: "/about-us" },
    { name: t("footer.quicklink6"), href: "/join-as-partner" },
  ];

  const services = [
    t("footer.ourservicelink1"),
    t("footer.ourservicelink2"),
    t("footer.ourservicelink3"),
    t("footer.ourservicelink4"),
    t("footer.ourservicelink5"),
    t("footer.ourservicelink6"),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setShowSuccess(true);
      setIsSubmitting(false);
      setEmail("");

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6 ">
            <a href="/">
              <img src={logo3} alt="" className="h-20" />
            </a>
            <p className="text-gray-400 mt-4">{t("footer.footerp")}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/107980266/admin/dashboard/"
                target="_blank"
                className="text-gray-400 hover:text-[#00BCFF] transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://x.com/cloudkonektion
"
                target="_blank"
                className="text-gray-400 hover:text-[#00BCFF] transition-colors"
              >
                <FaXTwitter className="text-xl" />
              </a>
              <a
                href="https://www.facebook.com/cloudkonektion/"
                target="_blank"
                className="text-gray-400 hover:text-[#00BCFF] transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/cloudkonektion/"
                target="_blank"
                className="text-gray-400 hover:text-[#00BCFF] transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://www.tiktok.com/@cloudkonektion"
                target="_blank"
                className="text-gray-400 hover:text-[#00BCFF] transition-colors"
              >
                <FaTiktok className="text-xl" />
              </a>
              <a
                href="https://www.youtube.com/@cloudkonektion0"
                target="_blank"
                className="text-gray-400 hover:text-[#00BCFF] transition-colors"
              >
                <FaYoutube className="text-xl" />
              </a>
              <a
                href="https://www.pinterest.com/cloudkonektion/"
                target="_blank"
                className="text-gray-400 hover:text-[#00BCFF] transition-colors"
              >
                <FaPinterest className="text-xl" />
              </a>
            </div>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t("footer.quicklinkh")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-[#00BCFF] transition-colors"
                  >
                    <FaChevronRight className="text-xs mr-2 text-[#00BCFF]" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t("footer.quicklink2")}
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="services"
                    className="flex items-center text-gray-400 hover:text-[#00BCFF] transition-colors"
                  >
                    <FaChevronRight className="text-xs mr-2 text-[#00BCFF]" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t("footer.contactus")}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#00BCFF] mt-1 mr-3" />
                <p className="text-gray-400">
                  60, ST. JOSEPH STREET, ISLA, Malta
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaCalendar className="h-5 w-5 text-[#00BCFF]" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-400">Mon-Fri, 9am-5pm PST</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#00BCFF] mr-3" />
                <a
                  href="mailto:info@cloudkonektion.com"
                  className="text-gray-400 hover:text-[#00BCFF] transition-colors"
                >
                  help@cloudkonektion.eu
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12 relative overflow-hidden">
          <div
            className={`absolute top-0 left-0 right-0 bg-green-600/90 text-white transition-all duration-500 ease-in-out ${
              showSuccess ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="max-w-3xl mx-auto flex items-center justify-center py-3 px-4">
              <FaCheckCircle className="text-xl mr-2" />
              <span className="font-medium">Thank you for subscribing!</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">
              {t("footer.subcribh")}
            </h4>
            <p className="text-gray-400 mb-6">
              {t("footer.subcribp")}
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("footer.email")}
                className="flex-grow px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00BCFF] placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center min-w-[120px] ${
                  isSubmitting
                    ? "bg-[#00a2d6] cursor-not-allowed"
                    : "bg-[#00BCFF] hover:bg-[#0095cc] hover:shadow-lg"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  t("footer.sabcrpbtn")
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 ">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 text-center">
            © {new Date().getFullYear()} Cloud Konektion. All rights reserved.
          </p>
          {/* <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-[#00BCFF] text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#00BCFF] text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
