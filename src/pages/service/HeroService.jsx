import React, { useEffect, useRef } from "react";
import { FaSearch, FaUsers, FaChartLine, FaBriefcase } from "react-icons/fa";
import bgimage from "../../assets/service/heroservices.png?url";
import client1 from "../../assets/home/cl1.avif";
import client2 from "../../assets/home/cl2.avif";
import client3 from "../../assets/home/cl3.avif";
import client4 from "../../assets/home/cl4.avif";
import client5 from "../../assets/home/cl5.png";
import client6 from "../../assets/home/cl6.avif";
import client7 from "../../assets/home/cl7.avif";
import client8 from "../../assets/home/cl8.avif";
import client9 from "../../assets/home/cl9.avif";
import client10 from "../../assets/home/cl10.avif";
import client11 from "../../assets/home/cl11.avif";
import client12 from "../../assets/home/cl12.avif";
import client13 from "../../assets/home/cl13.avif";
import client14 from "../../assets/home/cl14.avif";

const HeroService = () => {
  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
    client12,
    client13,
    client14,
  ];
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationFrame;
    let speed = 1;
    let position = 0;
    const marqueeWidth = marquee.scrollWidth / 2;

    const animate = () => {
      position -= speed;

      if (position <= -marqueeWidth) {
        position = 0;
      }

      marquee.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      speed = 0.2;
    };
    const handleMouseLeave = () => {
      speed = 1;
    };

    marquee.addEventListener("mouseenter", handleMouseEnter);
    marquee.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      marquee.removeEventListener("mouseenter", handleMouseEnter);
      marquee.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const services = [
    {
      icon: <FaSearch className="text-3xl text-[#00BCFF]" />,
      title: "Talent Acquisition",
      description: "Find the perfect candidates for your open positions",
    },
    {
      icon: <FaUsers className="text-3xl text-[#00BCFF]" />,
      title: "Executive Search",
      description: "Connect with top-tier leadership talent",
    },
    {
      icon: <FaChartLine className="text-3xl text-[#00BCFF]" />,
      title: "Workforce Planning",
      description: "Strategic solutions for your organizational growth",
    },
    {
      icon: <FaBriefcase className="text-3xl text-[#00BCFF]" />,
      title: "Contract Staffing",
      description: "Flexible staffing solutions for project needs",
    },
  ];

  return (
    <div className="relative h-screen min-h-[500px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={bgimage}
          alt="Professional services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Workforce with Our{" "}
            <span className="text-[#00BCFF]">Cloud Konektion</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            We deliver exceptional talent acquisition services tailored to your
            unique business needs, helping you build high-performing teams that
            drive success.
          </p>

          {/* Services Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-[#00BCFF]/20 transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos Marquee */}
        <div className="absolute bottom-8 left-0 right-0 bg-white/10 backdrop-blur-sm py-8 overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex items-center w-max will-change-transform"
          >
            {/* Duplicate clients array for seamless looping */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110 hover:opacity-100"
                style={{
                  opacity: 0.8,
                  filter: "grayscale(100%) brightness(0) invert(1)",
                }}
              >
                <img
                  src={client}
                  alt={`Client ${(index % clients.length) + 1}`}
                  className="h-12 object-contain max-w-xs"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroService;
