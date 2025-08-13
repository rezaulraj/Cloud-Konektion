import React, { useState, useEffect, useRef } from "react";
import { FaQuoteLeft, FaPause, FaPlay } from "react-icons/fa";
import partner1 from "../../assets/home/pat1.avif";
import partner2 from "../../assets/home/pat2.avif";
import partner3 from "../../assets/home/pat3.avif";
import partner4 from "../../assets/home/pat4.avif";
import partner5 from "../../assets/home/pat5.avif";
import { useTranslation } from "react-i18next";

const OurPartner = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      id: 1,
      quote: t("homepage.partner1t"),
      name: "Ivonny Liemantika",
      position: t("homepage.partner1p"),
      image: partner1,
    },
    {
      id: 2,
      quote: t("homepage.partner2t"),
      name: "William Twining",
      position: t("homepage.partner2p"),
      image: partner2,
    },
    {
      id: 3,
      quote: t("homepage.partner3t"),
      name: "Frederick Loy",
      position: t("homepage.partner3p"),
      image: partner3,
    },
    {
      id: 4,
      quote: t("homepage.partner4t"),
      name: "Yassine Bel Mamoun",
      position: t("homepage.partner4p"),
      image: partner4,
    },
    {
      id: 5,
      quote: t("homepage.partner5t"),
      position: t("homepage.partner5p"),
      image: partner5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  const toggleAutoPlay = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#00BCFF] animate-float"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 30 + 20}s`,
              animationDelay: `${Math.random() * 10}s`,
              filter: "blur(60px)",
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t("homepage.partnerh1")}{" "}
            <span className="text-[#00BCFF]">{t("homepage.partnerh2")}</span>
          </h2>
          <div className="w-20 h-1 bg-[#00BCFF] mx-auto mb-6"></div>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={scrollRef}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                      <FaQuoteLeft className="text-3xl text-[#00BCFF] mb-6 opacity-30" />
                      <p className="text-lg text-gray-600 italic mb-8">
                        "{testimonial.quote}"
                      </p>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500">
                            {testimonial.position}
                          </p>
                        </div>
                        <button
                          onClick={toggleAutoPlay}
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                          aria-label={isPaused ? "Play" : "Pause"}
                        >
                          {isPaused ? (
                            <FaPlay className="text-[#00BCFF]" />
                          ) : (
                            <FaPause className="text-[#00BCFF]" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="md:w-1/3 flex items-center justify-center">
                      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-b-full rounded-tl-full overflow-hidden border-4 border-[#00BCFF]/20">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-[#00BCFF] w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx="true" global="true">{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) scale(1);
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.05);
          }
          50% {
            transform: translateY(0) translateX(20px) scale(1);
          }
          75% {
            transform: translateY(20px) translateX(10px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};

export default OurPartner;
