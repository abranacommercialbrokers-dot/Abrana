import React from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import em from "../Assets/em.jpg"
import alp from "../Assets/alp.jpg"
import tak from "../Assets/tak.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const InsuranceSlider = () => {
  const products = [
    {
      title: "Protect your Employees",
      desc: "Our Corporate Plans are distinctive savings and protection scheme designed t...",
      img: (em)
    },
    {
      title: "Digital Insurance",
      desc: "Discover the convenience of purchasing our insurance policies online! Our user-...",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Gulf Products",
      desc: "State Life's Gulf Products are specially designed to cater to the insurance needs of...",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Alpha Insurance",
      desc: "Alpha was incorporated in the year 1951 and is a Subsidiary of State Life Insurance...",
      img: (alp)
    },
    {
      title: "Takaful Plans",
      desc: "Explore our Shariah-compliant Takaful plans designed to provide ethical protection...",
      img: (tak)
    },
    {
      title: "Health Care",
      desc: "Comprehensive health coverage for you and your family with global access...",
      img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-white font-sans">
      {/* Headings */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-700 mb-2">
          Explore our range of Insurance Products
        </h2>
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Bringing Your Goals to Life
        </h3>
        <p className="text-gray-600 max-w-5xl leading-relaxed">
          Explore a diverse range of life, health, corporate, group, bancassurance, and takaful plans designed to simplify and streamline your insurance journey. 
          With our commitment to excellence, securing your future has never been more accessible. Discover the perfect policy to protect what matters most.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative group px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={25}
          slidesPerView={1}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          navigation={{
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#f8f9fa] rounded-b-3xl overflow-hidden shadow-sm flex flex-col h-full border border-gray-100">
                
                {/* Image Section (No Hover Effect) */}
                <div className="relative h-64 overflow-hidden rounded-tr-[80px] rounded-bl-[80px]">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Area (Trigger Hover here) */}
                <div className="group/text flex flex-col flex-grow">
                   <div className="p-6 text-center transition-all duration-300 bg-transparent group-hover/text:bg-[#0056b3] flex-grow">
                    <h4 className="text-xl font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover/text:text-white cursor-pointer">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed transition-colors duration-300 group-hover/text:text-white/90">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Arrow Area - Also turns blue with the text box */}
                  <div className="flex justify-end p-2 transition-all duration-300 bg-transparent group-hover/text:bg-[#0056b3]">
                    <div className="bg-[#0056b3] text-white p-3 rounded-tr-2xl rounded-bl-2xl cursor-pointer group-hover/text:bg-white group-hover/text:text-[#0056b3] transition-colors">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <button className="prev-btn absolute top-1/2 -left-4 -translate-y-1/2 z-10 text-gray-400 hover:text-gray-800 transition">
          <ChevronLeft size={48} strokeWidth={1} />
        </button>
        <button className="next-btn absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-gray-400 hover:text-gray-800 transition">
          <ChevronRight size={48} strokeWidth={1} />
        </button>

        <div className="custom-pagination flex justify-center gap-2 mt-4"></div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #0056b3 !important;
          width: 25px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default InsuranceSlider;