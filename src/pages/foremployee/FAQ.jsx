import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaGlobeAmericas,
  FaTrophy,
  FaSearch,
  FaUserFriends,
  FaIndustry,
  FaClock,
  FaMoneyBillWave,
  FaShieldAlt,
} from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Where do you recruit?",
      answer:
        "We have placed candidates globally, but our main focus area is APAC and MENA. We have a strong presence and network in these regions and know the talent market incredibly well.",
      icon: <FaGlobeAmericas className="text-[#00BCFF] text-xl" />,
    },
    {
      question:
        "Why are you considered the leading tech headhunting agency in APAC and MENA?",
      answer:
        "We are considered the leading tech headhunting agency in APAC and MENA because we have a deep understanding of the digital and technology sectors and the talent market in these regions.\n\nWe have successfully placed hundreds of C-level and senior executives for high-growth organizations, consulting firms and multinational companies across those regions. We have a network of world-class candidates from local and international markets who are ready to join your team and help you succeed in a digital world.\n\nFinally, we offer a fast and efficient hiring process that enables you to hire world-class executives faster than your competition.",
      icon: <FaTrophy className="text-[#00BCFF] text-xl" />,
    },
    {
      question: "How do you find candidates?",
      answer:
        "We find candidates by leveraging our database of tech talents - one of the largest of its kind globally, as well as actively sourcing candidates based on your requirements.\n\nThis combined with very strong profiling and candidates evaluations processes guarantees the best fit for your organization.",
      icon: <FaSearch className="text-[#00BCFF] text-xl" />,
    },
    {
      question: "Where do your candidates come from?",
      answer:
        "Our candidates come from a variety of sources and backgrounds. We have the best local candidates who are familiar with the culture and market of your region. We also have candidates from all levels from the top tech hubs such as Silicon Valley, who bring their expertise and experience to your team.",
      icon: <FaUserFriends className="text-[#00BCFF] text-xl" />,
    },
    {
      question: "What are your core industries?",
      answer:
        "We are industry agnostic and we can work on anything related to digital and technology. We have experience in finding and placing world-class CxOs for startup companies, building tech teams for fast-growing companies and supporting digital transformation for telecoms or banks, and much more.",
      icon: <FaIndustry className="text-[#00BCFF] text-xl" />,
    },
    {
      question: "How fast is your time to fill?",
      answer:
        "Our time to fill is one of the fastest in the industry. We understand that our clients need to hire urgently and we are committed to finding and placing the best candidates for their roles as soon as possible.\n\nOn average, we are able to fill roles in 10 days on urgent requests, from the initial contact to the final offer. We achieve this by using our proprietary technology, our extensive database of tech-related candidates and our proactive sourcing and screening methods.\n\nWe also have a streamlined hiring process that ensures a smooth and efficient communication between us, our clients and our candidates.",
      icon: <FaClock className="text-[#00BCFF] text-xl" />,
    },
    {
      question: "How do you charge for your services?",
      answer:
        "We charge a contingency fee based on the successful placement of a candidate. This means that you only pay us when we find and place the right talent for your position. There are no upfront costs or hidden fees to start a search with us, and you are not obligated to hire any of the candidates we present to you. Our fee is a percentage of the candidate's salary, and it can vary depending on the level and complexity of the position.",
      icon: <FaMoneyBillWave className="text-[#00BCFF] text-xl" />,
    },
    {
      question: "What guarantees do you offer?",
      answer:
        "At JB Hired, we are confident in our ability to source world-class talent for our clients.\n\nHowever, we also understand that sometimes things don't work out as expected. That's why we offer a refund guarantee if the hired candidate leaves or if you consider he is not a fit during a defined timeframe after joining.\n\nThis way, you can rest assured that you are getting the best value for your investment when you partner with us.",
      icon: <FaShieldAlt className="text-[#00BCFF] text-xl" />,
    },
  ];

  return (
    <div className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#00BCFF]">FAQ</span>
          </h2>
          <div className="w-20 h-1 bg-[#00BCFF] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Things people often ask about our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300"
            >
              <button
                className={`w-full flex items-center justify-between p-6 text-left ${
                  activeIndex === index ? "bg-gray-50" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">{faq.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                </div>
                {activeIndex === index ? (
                  <FaChevronUp className="text-[#00BCFF] text-lg" />
                ) : (
                  <FaChevronDown className="text-gray-400 text-lg" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="p-6 pt-0">
                  {faq.answer.split("\n").map((paragraph, i) => (
                    <p key={i} className="text-gray-600 mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
