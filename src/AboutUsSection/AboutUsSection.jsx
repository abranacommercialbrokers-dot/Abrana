import React from 'react';
import img from "../Assets/about us.png"

const AboutUsSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-sm overflow-hidden shadow-lg">
            <img 
              src={img} 
              alt="Professional Business Hand" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-light text-[#333333] mb-8">
            About Us
          </h2>

          <div className="space-y-6 text-[#4a4a4a] text-[15px] leading-relaxed font-light">
            <p>
              Abrana Commercial Brokers F.Z.E is a Free Zone Establishment with
              Limited Liability, incorporated under the Ajman Free Zone Authority, United
              Arab Emirates.
            </p>

            <p>
              Our company provides specialized brokerage facilitation and consultancy services
              across multiple sectors. We act as a professional intermediary—connecting
              clients with licensed service providers and supporting smooth, compliant
              engagement.
            </p>

            <div>
              <p className="font-semibold mb-3">Our core areas of expertise include:</p>
              <ul className="space-y-1 list-none">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  Commercial Brokerage
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  Insurance Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  Management Consultancy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  Tourism & Leisure Consulting
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  E-Commerce Facilitation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  Combined Office Administrative Services
                </li>
              </ul>
            </div>

            <p>
              Through a client-centric and compliance-driven model, we support sustainable business
              growth and operational efficiency.
            </p>

            <div className="pt-4">
              <button className="bg-[#1e5aa0] hover:bg-[#164a85] text-white px-8 py-2.5 rounded-md text-sm font-medium transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;