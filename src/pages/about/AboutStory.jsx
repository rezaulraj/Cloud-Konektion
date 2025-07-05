import React from "react";
import { FaBuilding, FaHandshake, FaSearch } from "react-icons/fa";
import rosaliePhoto from "../../assets/about/img1.avif?url";
import maximePhoto from "../../assets/about/img2.avif?url";
import location from "../../assets/about/office.avif?url";

const AboutStory = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section 1 - Text Left / Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Pioneering Tech Recruitment
            </h3>
            <div className="w-20 h-1 bg-[#00BCFF]"></div>
            <p className="text-lg text-gray-600">
              Back then, no one else was doing tech-focused recruitment like we
              were. We saw an opportunity to bridge the gap between top-tier
              tech talent and the companies that needed them, and we've been
              doing just that ever since. Today, we're proud to be the leading
              tech recruitment agencies in APAC and MENA, with a proven track
              record of success and a commitment to delivering exceptional
              results.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden">
            <img
              src={rosaliePhoto}
              alt="Rosalie Thompson"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-medium">Rosalie Thompson</p>
              <p className="text-gray-300 text-sm">Co-Founder & CEO</p>
            </div>
          </div>
        </div>

        {/* Section 2 - Image Left / Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden lg:order-1 order-2">
            <img
              src={maximePhoto}
              alt="Maxime Ferreira"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-medium">Maxime Ferreira</p>
              <p className="text-gray-300 text-sm">Head of Recruitment</p>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="space-y-6 lg:order-2 order-1">
            <h3 className="text-3xl font-bold text-gray-900">
              Proven Track Record
            </h3>
            <div className="w-20 h-1 bg-[#00BCFF]"></div>
            <p className="text-lg text-gray-600">
              Over the years, we've placed hundreds of C-level executives in all
              industries, and we're proud to say that our clients have seen
              significant growth and success as a result. We believe that our
              success is a reflection of our commitment to our clients, our
              passion for the tech industry, and our deep understanding of what
              it takes to build successful teams in today's fast-paced business
              world. Whether you're a business looking for top-tier talent, or a
              tech professional looking for your next challenge, we're here to
              help.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-[#00BCFF] text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors mt-4">
              <FaSearch className="mr-3" />
              Learn more about our processes
            </button>
          </div>
        </div>

        {/* Section 3 - Office Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Office</h3>
            <div className="w-20 h-1 bg-[#00BCFF]"></div>
            <div className="flex items-start space-x-4">
              <FaBuilding className="text-2xl text-[#00BCFF] mt-1" />
              <div>
                <p className="text-lg font-medium text-gray-900">
                  JB Hired Singapore
                </p>
                <p className="text-gray-600">160 Robinson Road, #24-09</p>
                <p className="text-gray-600">
                  Spore Business Federation Centre
                </p>
                <p className="text-gray-600">Singapore</p>
              </div>
            </div>
          </div>

          {/* Right Column - Map Placeholder */}
          <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-900/20"></div>
            <div className="absolute bottom-0 right-0 bg-gray-900/40 text-center p-6">
              <FaBuilding className="text-5xl text-[#00BCFF] mx-auto mb-4" />
              <p className="text-white font-semibold">Office Location</p>
            </div>
            <img src={location} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
