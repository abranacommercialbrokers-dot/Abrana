import React from "react";
import { HiOutlineLightBulb, HiOutlineChartBar, HiOutlineCog } from "react-icons/hi";

const services = [
  {
    icon: <HiOutlineLightBulb className="text-teal-600 text-4xl mb-4 mx-auto" />,
    title: "Strategic Planning",
    desc: "We help organizations define clear goals and strategies, aligning resources to achieve long-term success."
  },
  {
    icon: <HiOutlineChartBar className="text-teal-600 text-4xl mb-4 mx-auto" />,
    title: "Organizational Structuring",
    desc: "Optimizing organizational frameworks to improve efficiency, collaboration, and decision-making processes."
  },
  {
    icon: <HiOutlineCog className="text-teal-600 text-4xl mb-4 mx-auto" />,
    title: "Operational Improvement",
    desc: "Identifying and implementing process improvements to enhance performance, reduce costs, and drive growth."
  }
];

const MoreAboutServices = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Consultancy Services</h2>
        <p className="text-gray-600 text-lg md:text-xl">
          We provide expert management consultancy solutions that empower businesses to make informed decisions and achieve sustainable growth.
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

export default MoreAboutServices;