import React from "react";
import {
  FaUsers,
  FaLightbulb,
  FaHandsHelping,
  FaChartLine,
  FaLaugh,
  FaGlobe,
} from "react-icons/fa";
import { GiGrowth, GiEarthAmerica } from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";

const JoinUs = () => {
  const coreValues = [
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Innovation",
      description: "We challenge the status quo and pioneer new solutions",
    },
    {
      icon: <FaHandsHelping className="text-4xl" />,
      title: "Collaboration",
      description:
        "Great things happen when we work together across disciplines",
    },
    {
      icon: <GiGrowth className="text-4xl" />,
      title: "Growth",
      description: "We invest in continuous learning and personal development",
    },
  ];

  const perks = [
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Career Development",
      items: ["Mentorship programs", "Leadership training", "Skill workshops"],
    },
    {
      icon: <FaLaugh className="text-3xl" />,
      title: "Work Environment",
      items: ["Flexible schedules", "Remote options", "Wellness programs"],
    },
    {
      icon: <GiEarthAmerica className="text-3xl" />,
      title: "Global Impact",
      items: ["International projects", "Diverse team", "Sustainability focus"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#00BCFF] px-4 py-2 rounded-full mb-4">
            <FaUsers className="text-lg" />
            <span className="font-medium">Be Part of Something Great</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our <span className="text-[#00BCFF]">Mission</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building the future of cloud technology with passionate,
            creative minds
          </p>
        </div>

        {/* Culture Video Section */}
        <div className="mb-20 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our <span className="text-[#00BCFF]">Culture</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At Cloud Konektion, we've created an environment where
                creativity thrives and people feel empowered to do their best
                work. Watch our team in action:
              </p>
              <button className="flex items-center gap-2 px-6 py-3 bg-[#00BCFF] text-white rounded-lg font-medium hover:bg-[#00bbffe5] transition-colors">
                Play Culture Video
              </button>
            </div>
            <div className="bg-gray-100 min-h-[300px] flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#00BCFF]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                    </svg>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-[#00BCFF]">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-[#00BCFF]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Employee Perks */}
        <div className="mb-20 bg-blue-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why You'll <span className="text-[#00BCFF]">Love It Here</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#00BCFF]">
                    {perk.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {perk.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {perk.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
