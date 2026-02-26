import React from "react";

const ServicesInquiryForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-sans pt-32">
      <style>{`
        @keyframes hoverAnim {
          from { transform: translateZ(5px); }
          to { transform: translateZ(15px); }
        }
        @keyframes turnaroundAnim {
          0%   { transform: perspective(500px) rotateY(5deg) rotateX(3deg); }
          50%  { transform: perspective(500px) rotateY(-5deg) rotateX(-3deg); }
          100% { transform: perspective(500px) rotateY(5deg) rotateX(3deg); }
        }
      `}</style>

      <div
        className="w-[900px] p-8 relative [transform-style:preserve-3d] rounded-lg"
        style={{ animation: "turnaroundAnim 6s ease-in-out infinite" }}
      >
        <div
          className="bg-[#e3f6f5] shadow-[inset_0_0_0_3px_#272343] p-8 rounded-lg [transform-style:preserve-3d] transition-all duration-200 space-y-6"
          style={{ animation: "hoverAnim 2s alternate infinite" }}
        >
          <h2 className="text-3xl font-bold text-[#272343] text-center mb-6">
            Service Inquiry Form
          </h2>

          <form
            action="https://api.sheetmonkey.io/form/uQqoPWvGk2L69iWJPWMk6V"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <label className="uppercase font-bold text-[#272343] mb-1 block">
                  Full Name*
                </label>
                <input
                  type="text"
                  name="Full Name"
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-white px-3 py-2 rounded shadow text-[#272343] focus:outline-none"
                />
              </div>

              <div>
                <label className="uppercase font-bold text-[#272343] mb-1 block">
                  Email*
                </label>
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white px-3 py-2 rounded shadow text-[#272343] focus:outline-none"
                />
              </div>

              <div>
                <label className="uppercase font-bold text-[#272343] mb-1 block">
                  Phone*
                </label>
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Enter your phone number"
                  required
                  className="w-full bg-white px-3 py-2 rounded shadow text-[#272343] focus:outline-none"
                />
              </div>

              <div>
                <label className="uppercase font-bold text-[#272343] mb-1 block">
                  Select Service*
                </label>
                <select
                  name="Service"
                  required
                  defaultValue=""
                  className="w-full bg-white px-3 py-2 rounded shadow text-[#272343] focus:outline-none"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Commercial Brokerage</option>
                  <option>Insurance Services</option>
                  <option>Management Consultancy</option>
                  <option>Tourism & Leisure Consulting</option>
                  <option>E-Commerce Facilitation</option>
                  <option>Combined Office Administrative Services</option>
                </select>
              </div>

              <div>
                <label className="uppercase font-bold text-[#272343] mb-1 block">
                  Insurance Type (If Applicable)
                </label>
                <select
                  name="Insurance Type"
                  className="w-full bg-white px-3 py-2 rounded shadow text-[#272343] focus:outline-none"
                >
                  <option value="">Not Applicable</option>
                  <option>Health Insurance</option>
                  <option>Life Insurance</option>
                  <option>Travel Insurance</option>
                  <option>Corporate & Commercial Insurance</option>
                  <option>Professional Indemnity Insurance</option>
                  <option>Property & Asset Insurance</option>
                </select>
              </div>

              <div>
                <label className="uppercase font-bold text-[#272343] mb-1 block">
                  Tourism Service (If Applicable)
                </label>
                <select
                  name="Tourism Type"
                  className="w-full bg-white px-3 py-2 rounded shadow text-[#272343] focus:outline-none"
                >
                  <option value="">Not Applicable</option>
                  <option>Hajj & Umrah Arrangements</option>
                  <option>UAE Tour Packages</option>
                  <option>International Tour Packages</option>
                  <option>Hotel Bookings</option>
                  <option>Desert Safari</option>
                  <option>Dhow Cruise</option>
                </select>
              </div>
            </div>

            <div>
              <label className="uppercase font-bold text-[#272343] mb-1 block">
                Message / Service Details*
              </label>
              <textarea
                name="Message"
                placeholder="Describe your requirements..."
                required
                rows="4"
                className="w-full bg-white px-3 py-2 rounded shadow text-[#272343] focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#bae8e8] hover:bg-[#9ccece] text-[#272343] font-bold px-6 py-3 rounded shadow-md transition w-full"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServicesInquiryForm;