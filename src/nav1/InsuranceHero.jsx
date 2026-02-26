import React from "react";
import img from "../Assets/img.jpg"

export default function InsuranceHero() {
  return (
    <section className="relative w-full h-[320px] md:h-[400px] lg:h-[460px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src= {img}   // <-- Put your image here
        alt="Insurance"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Breadcrumb */}
          <p className="text-sm md:text-base tracking-widest text-gray-500 uppercase mb-4">
            INSURANCE SERVICES  /  CAR INSURANCE
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Insurance Services
          </h1>

        </div>
      </div>
    </section>
  );
}