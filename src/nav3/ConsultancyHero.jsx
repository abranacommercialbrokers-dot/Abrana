import React from "react";
import img from "../Assets/img.jpg"; // <-- Your consultancy background image

export default function ConsultancyHero() {
  return (
    <section className="relative w-full h-[320px] md:h-[400px] lg:h-[460px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src={img}
        alt="Management Consultancy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Breadcrumb */}
          <p className="text-sm md:text-base tracking-widest text-gray-500 uppercase mb-4">
            MANAGEMENT CONSULTANCY
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Strategic Planning & Operational Excellence
          </h1>

          {/* Optional Subtitle / CTA */}
          <p className="mt-4 text-gray-700 text-lg md:text-xl max-w-2xl">
            Delivering management consultancy services focused on strategic planning, organizational structuring, and operational improvement to support informed decision-making and sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
}