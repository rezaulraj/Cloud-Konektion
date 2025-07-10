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
} from "react-icons/fa";
import logo3 from "/logowhite.png";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "For Employers", href: "/for-employers" },
    { name: "For Candidates", href: "/for-candidates" },
    { name: "About Us", href: "/about-us" },
    { name: "Join Us", href: "/join-us" },
  ];

  const services = [
    "Construction & Infrastructure",
    "Manufacturing & Industrial",
    "Logistics & Transportation",
    "Facility Management & Maintenance",
    "Hospitality & Service Roles",
    "Woodwork & Carpentry Talent",
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
          {/* Company Info */}
          <div className="space-y-6 ">
            <a href="/">
              <img src={logo3} alt="" className="h-20" />
            </a>
            <p className="text-gray-400 mt-4">
              Partnering with ambitious organizations in Europe, APAC, and MENA
              to build future-ready digital teams.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#00BCFF] transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00BCFF] transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00BCFF] transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00BCFF] transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
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

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-[#00BCFF] transition-colors"
                  >
                    <FaChevronRight className="text-xs mr-2 text-[#00BCFF]" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#00BCFF] mt-1 mr-3" />
                <p className="text-gray-400">
                  60, ST. JOSEPH STREET,
                  <br />
                  ISLA, Malta
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-[#00BCFF] mr-3" />
                <a
                  href="tel:+6512345678"
                  className="text-gray-400 hover:text-[#00BCFF] transition-colors"
                >
                  +356 1234 5678
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#00BCFF] mr-3" />
                <a
                  href="mailto:info@cloudkonektion.com"
                  className="text-gray-400 hover:text-[#00BCFF] transition-colors"
                >
                  info@cloudkonektion.com
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
              Subscribe to our Newsletter
            </h4>
            <p className="text-gray-400 mb-6">
              Stay updated with the latest industry trends and job opportunities
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
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
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Cloud Konektion. All rights reserved.
          </p>
          <div className="flex space-x-6">
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
            <a
              href="#"
              className="text-gray-500 hover:text-[#00BCFF] text-sm transition-colors"
            >
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
