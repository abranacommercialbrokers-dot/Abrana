import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Image Composition */}
        <div className="relative w-full lg:w-1/2 flex items-end">
          {/* Main Large Image (Left) */}
          <div className="relative z-10 w-2/3">
            <div className="overflow-hidden rounded-t-full border-[12px] border-blue-50/50">
              <img 
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1000&auto=format&fit=crop" 
                alt="Sheikh Zayed Grand Mosque" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Secondary Image (Right/Back) */}
          <div className="absolute right-0 bottom-12 w-1/2 z-0">
            <div className="overflow-hidden rounded-t-full border-[8px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1000&auto=format&fit=crop" 
                alt="Kaaba" 
                className="w-full h-[300px] object-cover shadow-xl"
              />
            </div>
          </div>

          {/* Floating Card (Professional Muttawif) */}
          <div className="absolute left-1/3 bottom-0 z-20 bg-white p-4 rounded-xl shadow-2xl flex flex-col items-center border border-gray-100">
            <p className="text-gray-800 font-bold text-center leading-tight mb-3">
              Professional <br /> Muttawif
            </p>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  src={`https://i.pravatar.cc/150?u=${i}`}
                  alt="Staff"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
            ABOUT US
          </span>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
            We Provide The <br /> Best Service
          </h2>
          
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              We are a leading travel company in Canada specializing in 
              flight bookings, worldwide tours and Umrah.
            </p>
            <p className="font-medium text-slate-700">
              Naasir Travel is licensed by Consumer Protection and IATA.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <div className="flex items-center gap-2">
              <CheckCircle />
              <span className="text-gray-700 font-medium">Experience Team</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle />
              <span className="text-gray-700 font-medium">Professional</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle />
              <span className="text-gray-700 font-medium">Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle />
              <span className="text-gray-700 font-medium">Guarantee Cash Back</span>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-lg shadow-blue-200">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

// Simple Icon Component
const CheckCircle = () => (
  <div className="flex-shrink-0 w-5 h-5 border-2 border-orange-400 rounded-full flex items-center justify-center">
    <svg className="w-3 h-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
      <path d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

export default AboutSection;