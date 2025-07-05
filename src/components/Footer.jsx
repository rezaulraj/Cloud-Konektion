import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "For Employers", href: "/employers" },
    { name: "For Candidates", href: "/candidates" },
    { name: "About Us", href: "/about" },
    { name: "Join Us", href: "/join" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Executive Search",
    "Tech Recruitment",
    "Digital Transformation",
    "AI Talent Acquisition",
    "Data Science Hiring",
    "Leadership Placement",
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              <span className="text-[#00BCFF]">Cloud</span> Konektion
            </h3>
            <p className="text-gray-400">
              The premier executive recruitment partner for digital talent in
              APAC and MENA regions.
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
                  123 Tech Street
                  <br />
                  Singapore 123456
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-[#00BCFF] mr-3" />
                <a
                  href="tel:+6512345678"
                  className="text-gray-400 hover:text-[#00BCFF] transition-colors"
                >
                  +65 1234 5678
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
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">
              Subscribe to our Newsletter
            </h4>
            <p className="text-gray-400 mb-6">
              Stay updated with the latest industry trends and job opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00BCFF]"
              />
              <button className="px-6 py-3 bg-[#00BCFF] text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
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
