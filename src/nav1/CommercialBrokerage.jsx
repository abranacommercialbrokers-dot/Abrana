import React from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const CommercialBrokerage = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Commercial Brokerage</h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Facilitating introductions and coordination between parties for lawful business opportunities with professionalism and reliability.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex-1">
          <HiOutlineOfficeBuilding className="text-blue-600 text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-3 text-center">Expert Guidance</h3>
          <p className="text-gray-600 text-center">
            Professional coordination to connect businesses and individuals with relevant opportunities in UAE.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex-1">
          <HiOutlineOfficeBuilding className="text-blue-600 text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-3 text-center">Trusted Network</h3>
          <p className="text-gray-600 text-center">
            We leverage an extensive network of business contacts to ensure smooth transactions and connections.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommercialBrokerage;