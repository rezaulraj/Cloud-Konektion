import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  FaPaperclip,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaFileAlt,
  FaLinkedin,
  FaPinterest,
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaCalendar,
  FaTimes,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineWork, MdOutlineMessage } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ContactPageCandidate = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    cv: null,
    motivationLetter: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      if (formRef.current) {
        formRef.current.submit();
      }
    }, 100);
  };

  const handleFormSubmitSuccess = () => {
    setIsSubmitting(false);
    setShowPopup(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      cv: null,
      motivationLetter: null,
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      id="get-in-touch"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="text-xl" />
            </button>
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Successful submission!
              </h3>
              <p className="text-gray-600 mb-6">We will connect you shortly.</p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={closePopup}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("forcandidats.candicontacth1")}
            <span className="text-blue-600">
              {t("forcandidats.candicontacth2")}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("forcandidats.candicontactp")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MdOutlineMessage className="text-blue-500" />
                {t("forcandidats.contactfromh")}
              </h2>

              <form
                ref={formRef}
                action="https://formsubmit.co/f168c77342dba22aebfaa8e411f0b904"
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 gap-6">
                  <div className="relative">
                    <FaUser className="absolute inset-y-0 left-3 text-gray-400 my-auto" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("forcandidats.contactname")}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="relative">
                    <FaEnvelope className="absolute inset-y-0 left-3 text-gray-400 my-auto" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("forcandidats.contactemail")}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="relative">
                    <FaPhone className="absolute inset-y-0 left-3 text-gray-400 my-auto" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("forcandidats.contactphone")}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="relative">
                    <MdOutlineWork className="absolute inset-y-0 left-3 text-gray-400 my-auto" />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg"
                      required
                    >
                      <option value="">
                        {t("forcandidats.contactopiton1")}
                      </option>
                      <option value="Job Application">
                        {t("forcandidats.contactopiton2")}
                      </option>
                      <option value="General Inquiry">
                        {t("forcandidats.contactopiton3")}
                      </option>
                      <option value="Other">
                        {t("forcandidats.contactopiton4")}
                      </option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder={t("forcandidats.contactmessage")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <label className="cursor-pointer">
                      <FaFileAlt className="text-3xl text-blue-500 mb-2" />
                      <p className="text-sm text-gray-600 mb-1">
                        {formData.cv
                          ? formData.cv.name
                          : t("forcandidats.contactcv")}
                      </p>
                      <span className="text-sm text-blue-600 font-medium">
                        {t("forcandidats.clickcandidate")}
                      </span>
                      <input
                        type="file"
                        name="cv"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        required
                      />
                    </label>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <label className="cursor-pointer">
                      <FaFileAlt className="text-3xl text-blue-500 mb-2" />
                      <p className="text-sm text-gray-600 mb-1">
                        {formData.motivationLetter
                          ? formData.motivationLetter.name
                          : "Upload Motivation Letter (Optional)"}
                      </p>
                      <span className="text-sm text-blue-600 font-medium">
                        {t("forcandidats.clickcandidate")}
                      </span>
                      <input
                        type="file"
                        name="motivationLetter"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                      />
                    </label>
                  </div>

                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <input
                    type="hidden"
                    name="_next"
                    value="https://cloud-konektion-ltd.netlify.app/thank-you"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center px-6 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
                  >
                    {isSubmitting ? (
                      <AiOutlineLoading3Quarters className="animate-spin text-xl" />
                    ) : (
                      <>
                        <FaPaperclip className="mr-2" />
                        {t("forcandidats.contactbtn")}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("forcandidats.ouroffice")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-600">
                      112-116 Whitechapel Road, London, England, UK, E1 1JE
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-600">
                      RAG Global Business Hub, Al Hilal Bank Building - Al Nahda
                      St - Al Qusais - Al Qusais 2 - Dubai - UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaEnvelope className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-600">help@cloudkonektion.eu</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaCalendar className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-600">Mon-Fri, 9am-5pm PST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("forcandidats.contactwus")}
              </h3>
              <div className="flex flex-wrap space-x-4 space-y-4">
                <a
                  href="https://www.linkedin.com/company/107980266/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://x.com/cloudkonektion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <FaXTwitter className="text-xl" />
                </a>
                <a
                  href="https://www.facebook.com/cloudkonektion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/cloudkonektion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="https://www.tiktok.com/@cloudkonektion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <FaTiktok className="text-xl" />
                </a>
                <a
                  href="https://www.youtube.com/@cloudkonektion0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <FaYoutube className="text-xl" />
                </a>
                <a
                  href="https://www.pinterest.com/cloudkonektion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <FaPinterest className="text-xl" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7443026977767!2d-0.0666426241439849!3d51.51790690993682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ccc7c9cb58b%3A0x837ef31a0b99463!2s112-116%20Whitechapel%20Rd%2C%20Greater%2C%20London%20E1%201JE%2C%20UK!5e0!3m2!1sen!2sbd!4v1755061491245!5m2!1sen!2sbd"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageCandidate;
