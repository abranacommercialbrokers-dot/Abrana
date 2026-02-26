import React from "react";
import a from "../Assets/gig.png"
import s from "../Assets/s.png"
import o from "../Assets/o.png"
import l from "../Assets/l.png"

export default function PartnerCompanies() {
  const logos = [
    a,
    s,
    o,
    l,
    "/logos/rsa.png",
    "/logos/tokio.png",
    "/logos/qic.png",
    "/logos/dn.png",
    "/logos/newindia.png",

    "/logos/fidelity.png",
    "/logos/orient.png",
    "/logos/rak.png",
    "/logos/oriental.png",
    "/logos/cigna.png",
    "/logos/bupa.png",
    "/logos/takaful.png",
    "/logos/allianz.png",
    "/logos/hanse.png",

    "/logos/alliance.png",
    "/logos/ngi.png",
    "/logos/takaful2.png",
    "/logos/emirates.png",
    "/logos/zurich.png",
    "/logos/metlife1.png",
    "/logos/metlife2.png",
    "/logos/friends.png",

    "/logos/aig.png",
    "/logos/now.png",
    "/logos/aman.png",
    "/logos/dubai.png",
    "/logos/union.png",
    "/logos/insurancehouse.png",
    "/logos/alsagr.png",
    "/logos/market.png",

    "/logos/nqor.png",
    "/logos/union2.png",
    "/logos/salama.png",
    "/logos/watania.png",
    "/logos/atradius.png",
    "/logos/coface.png",
    "/logos/hayah.png",
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Partnered With Over 40 Insurance Companies
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg mb-14 leading-relaxed">
          Established in 1995, InsuranceMarket.ae stands as a beacon of trust
          and excellence in Dubai and the UAE insurance sector. With our
          esteemed partnerships and stellar reputation, we proudly present you
          with superior coverage options and exclusive benefits, guaranteeing
          optimal value in the market.
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center opacity-80 hover:opacity-100 transition duration-300"
            >
              <img
                src={logo}
                alt="Insurance Company"
                className="max-h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}