import React from "react";
import { HiOutlineTrendingUp, HiOutlineShieldCheck, HiOutlineSupport } from "react-icons/hi";

const values = [
  {
    icon: <HiOutlineTrendingUp className="text-purple-600 text-4xl mb-4 mx-auto" />,
    title: "Growth Optimization",
    desc: "Strategies to increase online sales and maximize ROI through smart e-commerce operations."
  },
  {
    icon: <HiOutlineShieldCheck className="text-purple-600 text-4xl mb-4 mx-auto" />,
    title: "Compliance Assurance",
    desc: "Ensuring all digital operations follow legal and platform requirements for secure e-commerce management."
  },
  {
    icon: <HiOutlineSupport className="text-purple-600 text-4xl mb-4 mx-auto" />,
    title: "End-to-End Support",
    desc: "Guiding businesses through every step of digital commerce—from setup to management."
  }
];

const ValuePropositions = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">How We Help Businesses</h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Our facilitation ensures e-commerce initiatives are successful, compliant, and growth-oriented.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((item, idx) => (
          <div key={idx} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            {item.icon}
            <h3 className="text-2xl font-bold mb-3 text-center">{item.title}</h3>
            <p className="text-gray-600 text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuePropositions;