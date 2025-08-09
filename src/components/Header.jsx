import React, { useState, useEffect, useRef } from "react";
import ReactCountryFlag from "react-country-flag";
import { FiMenu, FiX, FiChevronDown, FiMail } from "react-icons/fi";
import {
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { MdOutlineHome } from "react-icons/md";
import { TbUsersPlus } from "react-icons/tb";
import ContactForm from "./ContactForm";
import logo2 from "/logoblack.png";
import logo3 from "/logowhite.png";
import { RiServiceLine } from "react-icons/ri";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("US");
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const languageDropdownRef = useRef(null);

  // Supported languages
  const languages = [
    { code: "en", name: "English", countryCode: "US" },
    { code: "mt", name: "Malti", countryCode: "MT" },
    { code: "hr", name: "Hrvatski", countryCode: "HR" },
    { code: "rs", name: "Srpski", countryCode: "RS" },
    { code: "es", name: "Español", countryCode: "ES" },
  ];

  const navItems = [
    {
      label: t("headers.home"),
      path: "/",
      icon: <MdOutlineHome className="text-xl" />,
    },
    {
      label: t("headers.services"),
      path: "/services",
      icon: <RiServiceLine className="text-xl" />,
    },
    {
      label: t("headers.employee"),
      path: "/for-employers",
      icon: <HiOutlineOfficeBuilding className="text-xl" />,
    },
    {
      label: t("headers.candiated"),
      path: "/for-candidates",
      icon: <HiOutlineUserGroup className="text-xl" />,
    },
    {
      label: t("headers.aboutus"),
      path: "/about-us",
      icon: <HiOutlineInformationCircle className="text-xl" />,
    },
    {
      label: t("headers.joinus"),
      path: "/join-us",
      icon: <TbUsersPlus className="text-xl" />,
    },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set initial language
  useEffect(() => {
    const storedLanguage = localStorage.getItem("i18nextLng") || "en";
    const langObj =
      languages.find((lang) => lang.code === storedLanguage) || languages[0];
    setSelectedLanguage(langObj.countryCode);
  }, [i18n.language]);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (countryCode) => {
    const selectedLang = languages.find(
      (lang) => lang.countryCode === countryCode
    );
    if (selectedLang) {
      i18n.changeLanguage(selectedLang.code);
      setSelectedLanguage(countryCode);
      setLanguageDropdownOpen(false);
    }
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const handleContactSubmit = (formData) => {
    console.log("Form submitted:", formData);
    setShowContactForm(false);
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              {scrolled ? (
                <img src={logo2} alt="Logo" className="h-14" />
              ) : (
                <img src={logo3} alt="Logo" className="h-14" />
              )}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none p-2 rounded-full transition-all duration-300 hover:bg-gray-100 hover:bg-opacity-20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FiX
                className={`w-6 h-6 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              />
            ) : (
              <FiMenu
                className={`w-6 h-6 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`flex items-center space-x-2 text-lg font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-gray-800 hover:text-[#00BCFF]"
                    : "text-white hover:text-gray-200"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative" ref={languageDropdownRef}>
              <button
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "text-gray-800 hover:bg-blue-200"
                    : "text-white hover:bg-blue-100/20 hover:bg-opacity-10"
                }`}
                onClick={toggleLanguageDropdown}
                aria-expanded={languageDropdownOpen}
                aria-haspopup="true"
              >
                <ReactCountryFlag
                  countryCode={selectedLanguage}
                  svg
                  style={{ width: "1.5em", height: "1.5em" }}
                  className="rounded-sm"
                  aria-label={
                    languages.find(
                      (lang) => lang.countryCode === selectedLanguage
                    )?.name
                  }
                />
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    languageDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {languageDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl z-50 border border-gray-100"
                  role="menu"
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className={`w-full text-left px-4 py-3 text-lg flex items-center space-x-3 transition-colors duration-200 ${
                        selectedLanguage === language.countryCode
                          ? "bg-[#00BCFF]/10 text-[#00BCFF]"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={() => handleLanguageChange(language.countryCode)}
                      role="menuitem"
                    >
                      <ReactCountryFlag
                        countryCode={language.countryCode}
                        svg
                        style={{ width: "1.5em", height: "1.5em" }}
                        className="rounded-sm"
                        aria-label={language.name}
                      />
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Button */}
            <button
              onClick={() => setShowContactForm(true)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-[#00BCFF] text-white hover:bg-blue-600 hover:shadow-lg"
                  : "bg-[#00BCFF] text-white hover:bg-blue-600 hover:shadow-lg"
              }`}
            >
              <FiMail className="text-xl" />
              <span>{t("headers.contact")}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white h-screen shadow-xl overflow-y-auto">
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="flex items-center space-x-4 text-lg font-medium text-gray-800 py-2 border-b border-gray-100 hover:text-[#00BCFF] transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-[#00BCFF]">{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-gray-500 text-xl mb-4 font-medium">
                  {t("select_language")}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-lg ${
                        selectedLanguage === language.countryCode
                          ? "bg-[#00BCFF]/10 text-[#00BCFF] border border-[#00BCFF]/20"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => {
                        handleLanguageChange(language.countryCode);
                        setMobileMenuOpen(false);
                      }}
                    >
                      <ReactCountryFlag
                        countryCode={language.countryCode}
                        svg
                        style={{ width: "1.5em", height: "1.5em" }}
                        className="rounded-sm"
                      />
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setShowContactForm(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full mt-2 px-6 py-4 bg-[#00BCFF] text-white rounded-xl text-xl font-medium flex items-center justify-center space-x-3 hover:bg-blue-600 transition-colors duration-300"
              >
                <FiMail className="text-2xl" />
                <span>{t("headers.contact_us")}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <ContactForm
        show={showContactForm}
        onClose={() => setShowContactForm(false)}
        onSubmit={handleContactSubmit}
      />
    </>
  );
};

export default Header;
