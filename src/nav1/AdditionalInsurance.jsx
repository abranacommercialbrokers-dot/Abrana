import React from "react";

const additional = [
  "Corporate & Commercial Insurance – Business coverage, liability, and operational risk protection.",
  "Professional Indemnity Insurance – Protection for professionals against claims arising from errors or negligence.",
  "Property & Asset Insurance – Safeguarding physical assets and property against damage or loss."
];

const AdditionalInsurance = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Additional Insurance Solutions</h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Beyond core offerings, we provide access to specialized corporate and professional insurance solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {additional.map((item, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-gradient-to-tr from-indigo-100 via-blue-50 to-indigo-50 shadow-lg hover:shadow-2xl transition-all duration-300">
            <p className="text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdditionalInsurance;