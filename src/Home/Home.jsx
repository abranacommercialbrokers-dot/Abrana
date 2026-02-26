import { useEffect, useState } from "react";
import img1 from "../Assets/one.jpg"
import img2 from "../Assets/two.jpg"

const slides = [
  {
    image: (img1),
    title: "Your Partner for UAE Success",
  },
  {
    image: (img2),
    title: "Together We Build Better Futures",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000",
    title: "Protecting What Matters Most",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-28 relative">
        <div className="relative max-w-7xl mx-auto h-[560px] overflow-hidden hero-curve">

          {/* Slider Images */}
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
              alt="slide"
            />
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative z-10 p-16 max-w-xl">
            <h1 className="text-white text-5xl font-bold leading-tight">
              {slides[current].title}
            </h1>

            <div className="mt-8 flex items-center gap-3">
              <span className="w-10 h-3 bg-pink-600 rounded-full"></span>
              <span className="text-white text-sm">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* SLIDER ARROWS */}
          <div className="absolute bottom-24 left-16 flex items-center gap-6 z-20">
            <button
              onClick={prev}
              className="text-white opacity-80 hover:opacity-100 transition text-3xl"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="text-white opacity-80 hover:opacity-100 transition text-3xl"
            >
              ›
            </button>
          </div>

          {/* Bottom Insurance Bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[92%] bg-gray-100 rounded-2xl px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

            {["Travel Insurance", "For You and Your Family", "For your Business"].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="font-medium text-gray-700">{item}</span>
                  <button className="bg-pink-600 px-6 py-2 text-white rounded-full">
                    Buy
                  </button>
                </div>
              )
            )}

          </div>
        </div>

        {/* Floating Abu Dhabi Card */}
        {/* <div className="fixed right-14 top-36 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 z-40">
          <div>
            <p className="text-sm font-semibold">Abu Dhabi</p>
            <p className="text-xs text-gray-500">Basic Plan</p>
          </div>
          <button className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm">
            Buy
          </button>
        </div> */}

        {/* Social Vertical Bar */}
        {/* <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col gap-4 text-gray-600 text-lg z-40">
          <span>in</span>
          <span>X</span>
          <span>f</span>
          <span>📷</span>
          <span>▶</span>
        </div> */}

        {/* Feedback Button */}
        {/* <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-pink-600 text-white px-3 py-6 rounded-l-xl rotate-180 writing-vertical">
          Feedback
        </div> */}
      </section>

      {/* ABOUT US SECTION */}
      {/* <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Abrana Commercial Brokers F.Z.E is a licensed Free Zone Establishment with Limited Liability, incorporated under the Ajman Free Zone Authority, United Arab Emirates. The company operates within the framework of applicable UAE regulations, delivering professional brokerage facilitation, consultancy, and business support services.
          <br /><br />
          We act as a trusted intermediary, connecting individuals and businesses with licensed service providers across multiple sectors. Our role is centered on structured coordination, transparent advisory support, and efficient administrative facilitation to ensure smooth and compliant engagement between parties.
          <br /><br />
          Our core areas of expertise include Commercial Brokerage, Insurance Facilitation, Management Consultancy, Tourism & Leisure Consulting, E-Commerce Support, and Combined Office Administrative Services. Through a client-focused and compliance-driven approach, we aim to simplify complex processes and provide dependable operational support tailored to each client’s objectives.
          <br /><br />
          In the insurance sector, we facilitate access to a wide range of solutions by coordinating with duly licensed insurers and authorized insurance brokers in the UAE. Our services are strictly limited to facilitation and administrative coordination, ensuring clarity, transparency, and regulatory compliance at every stage.
          <br /><br />
          At Abrana Commercial Brokers F.Z.E, professionalism, confidentiality, and integrity form the foundation of our operations. We are committed to building long-term partnerships by delivering reliable services that support sustainable growth and informed decision-making.
        </p>
      </section> */}
    </>
  );
}