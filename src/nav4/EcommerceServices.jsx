import React from "react";
import { HiOutlineShoppingCart, HiOutlineClipboardList, HiOutlineCog } from "react-icons/hi";

const services = [
  {
    icon: <HiOutlineShoppingCart className="text-pink-600 text-4xl mb-4 mx-auto" />,
    title: "E-Commerce Consulting",
    desc: "Providing expert guidance to establish and optimize online commerce strategies for your business."
  },
  {
    icon: <HiOutlineClipboardList className="text-pink-600 text-4xl mb-4 mx-auto" />,
    title: "Coordination Services",
    desc: "Assisting in connecting with vendors, platforms, and service providers to ensure smooth operations."
  },
  {
    icon: <HiOutlineCog className="text-pink-600 text-4xl mb-4 mx-auto" />,
    title: "Administrative Facilitation",
    desc: "Managing compliance, documentation, and operational processes for efficient e-commerce management."
  }
];

const EcommerceServices = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our E-Commerce Services</h2>
        <p className="text-gray-600 text-lg md:text-xl">
          We help businesses establish and manage compliant and successful digital commerce operations.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            {service.icon}
            <h3 className="text-2xl font-bold mb-3 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcommerceServices;