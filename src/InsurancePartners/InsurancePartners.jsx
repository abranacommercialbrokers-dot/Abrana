export default function InsurancePartners() {
  const logos = [
    "/logos/gig.png",
    "/logos/sukoon.png",
    "/logos/oman.png",
    "/logos/liva.png",
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

    "/logos/alwathba.png",
    "/logos/alliance.png",
    "/logos/ngi.png",
    "/logos/takaful2.png",
    "/logos/emirates.png",
    "/logos/zurich.png",
    "/logos/metlife.png",
    "/logos/metlife2.png",
    "/logos/friends.png",

    "/logos/orientunb.png",
    "/logos/aig.png",
    "/logos/now.png",
    "/logos/aman.png",
    "/logos/dubai.png",
    "/logos/union.png",
    "/logos/house.png",
    "/logos/asagr.png",
    "/logos/markel.png",

    "/logos/noor.png",
    "/logos/union2.png",
    "/logos/national.png",
    "/logos/aetna.png",
    "/logos/salama.png",
    "/logos/watania.png",
    "/logos/atradius.png",
    "/logos/coface.png",
    "/logos/hayat.png",
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Partnered With Over 40 Insurance Companies
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-14 leading-relaxed">
          Established in 1995, InsuranceMarket.ae stands as a beacon of trust
          and excellence in Dubai and the UAE insurance sector. With our
          esteemed partnerships and stellar reputation, we proudly present you
          with superior coverage options and exclusive benefits, guaranteeing
          optimal value in the market.
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-10 items-center">
          {logos.map((logo, i) => (
            <div key={i} className="flex justify-center">
              <img
                src={logo}
                alt="insurance-logo"
                className="h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}