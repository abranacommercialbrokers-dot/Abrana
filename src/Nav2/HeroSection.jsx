import React from "react";
 import heroImg from '../Assets/2.jpg';
 import hajjImg from '../Assets/hajj.jpg'
 import tourImg from '../Assets/travel.jpg'
 import hotelImg from '../Assets/hotel.jpg'
 import uaeImg from '../Assets/d.jpg'
 import intlImg from '../Assets/des.jpg'

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#f3f7fb] py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-wide">
            Your Travel Partner
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Tourism & Leisure Consulting
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide comprehensive tourism and leisure services, catering to the travel needs of individuals, families, and corporate clients.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT - Services */}
          <div className="space-y-8">
            
            {/* Hajj & Umrah */}
            <div className="flex gap-6">
              <img src={hajjImg} alt="Hajj & Umrah" className="w-24 h-24 rounded-xl object-cover shadow-lg"/>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Hajj & Umrah Arrangements</h3>
                <p className="text-gray-600 mt-2">
                  Complete coordination of Hajj and Umrah travel, including itinerary planning, accommodation, and travel-related arrangements.
                </p>
              </div>
            </div>

            {/* Tour Packages */}
            <div className="flex gap-6">
              <img src={tourImg} alt="Tour Packages" className="w-24 h-24 rounded-xl object-cover shadow-lg"/>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Tour Packages & Travel Planning</h3>
                <p className="text-gray-600 mt-2">
                  Customized domestic and international tour packages designed around client preferences, interests, and travel objectives.
                </p>
              </div>
            </div>

            {/* Hotel Bookings */}
            <div className="flex gap-6">
              <img src={hotelImg} alt="Hotel Bookings" className="w-24 h-24 rounded-xl object-cover shadow-lg"/>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Hotel Bookings</h3>
                <p className="text-gray-600 mt-2">
                  Arrangement of hotel accommodations across a wide range of destinations, selected for comfort, convenience, and value.
                </p>
              </div>
            </div>

            {/* UAE Tour Packages */}
            <div className="flex gap-6">
              <img src={uaeImg} alt="UAE Tour" className="w-24 h-24 rounded-xl object-cover shadow-lg"/>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">UAE Tour Packages</h3>
                <p className="text-gray-600 mt-2">
                  Curated experiences across Dubai, Abu Dhabi, desert safaris, dhow cruises, family and corporate leisure packages.
                </p>
              </div>
            </div>

            {/* International Destinations */}
            <div className="flex gap-6">
              <img src={intlImg} alt="International Tours" className="w-24 h-24 rounded-xl object-cover shadow-lg"/>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">International Destinations</h3>
                <p className="text-gray-600 mt-2">
                  Europe, Asia, Middle East, Americas, and Africa tailored for UAE residents, considering convenience, visas, and lifestyle.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT - Hero Image */}
          <div className="relative">
            <img
              src={heroImg}
              alt="Travel"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}