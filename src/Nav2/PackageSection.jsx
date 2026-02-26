import React from 'react';

const PackageSection = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-[600px] w-full font-sans">
      
      {/* Left Side: Content Area */}
      <div className="w-full lg:w-1/2 bg-[#f0f7ff] p-8 md:p-16 lg:p-24 flex flex-col justify-center">
        <div className="max-w-xl">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-4 block">
            BEST PACKAGE FOR YOU
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-serif font-bold text-slate-900 leading-tight mb-6">
            With more than 25 years of experience and offices in Vancouver and Toronto, Naasir Travel services are unmatched.
          </h2>
          
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Our reliable services cover every aspect of the trip. We make sure that our customers don't have to worry about anything.
          </p>

          <button className="bg-[#3b66d6] hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full transition duration-300 shadow-md mb-12">
            Get Start
          </button>

          {/* Service List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            <ServiceItem label="Umrah group packages" />
            <ServiceItem label="Adventure tours" />
            <ServiceItem label="Ramadan packages" />
            <ServiceItem label="Flights" />
            <ServiceItem label="Special halal packages" />
            <ServiceItem label="Booking worldwide options" />
          </div>
        </div>
      </div>

      {/* Right Side: Image Area */}
      <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
        <img 
          src="https://images.unsplash.com/photo-1566454825481-4e48f803f362?q=80&w=1000&auto=format&fit=crop" 
          alt="Mosque architecture" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

const ServiceItem = ({ label }) => (
  <div className="flex items-center gap-3">
    <div className="flex-shrink-0 w-6 h-6 rounded-full border border-orange-400 flex items-center justify-center p-1">
      <div className="w-full h-full rounded-full border border-orange-300 flex items-center justify-center">
        {/* Simple dot icon to match the image style */}
        <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
      </div>
    </div>
    <span className="text-slate-700 font-medium text-[15px]">{label}</span>
  </div>
);

export default PackageSection;