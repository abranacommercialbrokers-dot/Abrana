import React from "react";
import { ShieldCheck, Car, HeartPulse, Home } from "lucide-react";

export function InsuranceServices() {
  const services = [
    {
      title: "Vehicle Insurance",
      desc: "Complete coverage for your vehicle with affordable premiums.",
      icon: <Car size={40} />,
    },
    {
      title: "Health Insurance",
      desc: "Protect your family with comprehensive medical coverage.",
      icon: <HeartPulse size={40} />,
    },
    {
      title: "Home Insurance",
      desc: "Secure your home and property from unexpected damages.",
      icon: <Home size={40} />,
    },
    {
      title: "Life Insurance",
      desc: "Financial protection and peace of mind for your loved ones.",
      icon: <ShieldCheck size={40} />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Insurance Services
          </h2>
          <p className="text-gray-600 mt-4">
            We provide complete insurance solutions tailored to your needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-center"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}