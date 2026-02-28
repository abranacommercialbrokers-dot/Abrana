import React from "react";
import { Link } from "react-router-dom";
import img from "../Assets/img.jpg"

const stats = [
  {
    titleTop: "Around",
    titleMain: "3 Million",
    titleBottom: "People trust us",
    description:
      "Reflects unwavering faith in our mission, services and products from a vast and diverse community of supporters.",
  },
  {
    titleTop: "We cover",
    titleMain: "3,000",
    titleBottom: "Hospitals and Clinics",
  },
  {
    titleTop: "Named UAE's",
    titleMain: "Best",
    titleBottom: "Perceived Health Insurer Brand",
  },
];

const Chose = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#eef1f5] to-[#f7f9fb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Abrana Commercial Brokers
          </h1>

          <p className="text-gray-600 max-w-lg mb-8 leading-relaxed">
            Abrana Commercial Brokers, a vast healthcare network,
            exceptional support, and innovative solutions, ensuring your health
            and peace of mind.
          </p>

          <Link
            to="/ins"
            className="bg-[#8B1E3F] hover:bg-[#741734] text-white px-6 py-3 rounded-full font-medium transition inline-block text-center"
          >
            Read More
          </Link>

          {/* STATS CARDS */}
          <div className="flex flex-col sm:flex-row gap-6 mt-16 relative">
            {stats.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border p-6 w-full sm:w-72 
                           transition-all duration-500 ease-in-out
                           hover:scale-110 hover:shadow-2xl hover:z-20"
              >
                <p className="text-sm text-gray-500">{item.titleTop}</p>

                <h3 className="text-2xl font-bold text-gray-900 mt-1">
                  {item.titleMain}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.titleBottom}
                </p>

                {/* Hidden description appears on hover */}
                {item.description && (
                  <p className="text-sm text-gray-500 mt-4 opacity-0 max-h-0 overflow-hidden 
                                group-hover:opacity-100 group-hover:max-h-40 
                                transition-all duration-500">
                    {item.description}
                  </p>
                )}

                <span className="absolute bottom-4 right-4 text-[#8B1E3F] text-xl font-bold">
                  +
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-end">
          <img
            src={img} // replace with your image
            alt="Family"
            className="w-full max-w-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Chose;