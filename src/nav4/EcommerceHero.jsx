import React from "react";
import img from "../Assets/img.jpg"; // <-- Your E-Commerce background image

export default function EcommerceHero() {
  return (
    <section className="relative w-full h-[320px] md:h-[400px] lg:h-[460px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src={img}
        alt="E-Commerce Facilitation"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Breadcrumb */}
          <p className="text-sm md:text-base tracking-widest text-gray-500 uppercase mb-4">
            E-COMMERCE SERVICES / FACILITATION
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            E-Commerce Facilitation
          </h1>

          {/* Subtitle / Description */}
          <p className="mt-4 text-gray-700 text-lg md:text-xl max-w-2xl">
            Supporting e-commerce initiatives through consulting, coordination, and administrative facilitation, helping businesses establish and manage compliant digital commerce operations.
          </p>
        </div>
      </div>
    </section>
  );
}