import React from "react";

const offerings = [
  {
    title: "Health Insurance",
    desc: "Comprehensive coverage for individuals, families, and corporate groups including local & international plans."
  },
  {
    title: "Life Insurance",
    desc: "Personal and family life protection solutions providing financial security and peace of mind."
  },
  {
    title: "Travel Insurance",
    desc: "Coverage for domestic and international travel, including medical emergencies and trip cancellations."
  }
];

const InsuranceOfferings = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Key Insurance Offerings</h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Specialized solutions in Health, Life, and Travel Insurance for individuals, families, and corporates.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {offerings.map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-3 text-center">{item.title}</h3>
            <p className="text-gray-600 text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsuranceOfferings;