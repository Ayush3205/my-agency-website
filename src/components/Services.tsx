"use client"; // This directive tells Next.js that this is a Client Component

import React from 'react';

type ServiceProps = {
  services: string[];
};

const Services: React.FC<ServiceProps> = ({ services }) => {
  const handleSmoothScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById("Services");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-6 text-white animate-fadeIn">Services</h3>
      <ul className="space-y-4">
        {services.map((service, index) => (
          <li key={index}>
            <button 
              onClick={handleSmoothScroll} 
              className="text-gray-300 hover:text-blue-400 focus:outline-none animate-slideUp"
            >
              {service}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
