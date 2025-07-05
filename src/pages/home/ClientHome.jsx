import React from "react";
import { useRef, useEffect } from "react";
import client1 from "../../assets/home/cl1.avif?url";
import client2 from "../../assets/home/cl2.avif?url";
import client3 from "../../assets/home/cl3.avif?url";
import client4 from "../../assets/home/cl4.avif?url";
import client5 from "../../assets/home/cl5.png?url";
import client6 from "../../assets/home/cl6.avif?url";
import client7 from "../../assets/home/cl7.avif?url";
import client8 from "../../assets/home/cl8.avif?url";
import client9 from "../../assets/home/cl9.avif?url";
import client10 from "../../assets/home/cl10.avif?url";
import client11 from "../../assets/home/cl11.avif?url";
import client12 from "../../assets/home/cl12.avif?url";
import client13 from "../../assets/home/cl13.avif?url";
import client14 from "../../assets/home/cl14.avif?url";

const ClientHome = () => {
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

  // Duplicate the array to create seamless looping
  const duplicatedClients = [...clients, ...clients];
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationFrame;
    let speed = 1; // pixels per frame
    let position = 0;
    const marqueeWidth = marquee.scrollWidth / 2;

    const animate = () => {
      position -= speed;

      // Reset position when half of marquee has scrolled
      if (position <= -marqueeWidth) {
        position = 0;
      }

      marquee.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    // Pause on hover
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

  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Trusted by Leading Companies
        </h2>

        <div className="relative h-32 overflow-hidden">
          {/* Marquee Container */}
          <div
            ref={marqueeRef}
            className="absolute top-0 left-0 flex items-center h-full will-change-transform"
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110 hover:opacity-100"
                style={{ opacity: 0.7, filter: "grayscale(30%)" }}
              >
                <img
                  src={client}
                  alt={`Client ${(index % clients.length) + 1}`}
                  className="h-16 object-contain max-w-xs"
                  draggable="false"
                />
              </div>
            ))}
          </div>

          {/* Gradient Fades */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default ClientHome;
