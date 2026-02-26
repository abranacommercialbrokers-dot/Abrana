import React from "react";
import { Star } from "lucide-react";
import pic from "../Assets/three.jpg";

const Testimonials = () => {
  const reviews = [
    {
      name: "Alisha Perri",
      date: "a week ago",
      text: "Been using them for 4 years. Great service. Very quick with providing information.",
      img: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Mohamed El Hady",
      date: "6 days ago",
      text: "I would like to thank Charles from claim departments for all his support during follow up on my car accident!",
      img: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Kirshan Kumar",
      date: "3 weeks ago",
      text: "Throughout the claim process, Mr. Charles had guided promptly. He has always made sure my concern is listened and rectified.",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Denis Karasev",
      date: "a week ago",
      text: "This is a great company to deal with! Team is very friendly. Very organized and polite.",
      img: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Artur Begel",
      date: "a day ago",
      text: "Had some major repairs for my vehicle and Mr. Rabishankar did wonderful job in expediting the process.",
      img: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Vishnu Vijayakumar",
      date: "a week ago",
      text: "Had some major repairs for my vehicle and Mr. Rabishankar did wonderful job in expediting the process from claim.",
      img: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];

  return (
    <section className="bg-[#e9f1f7] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say About Us
          </h2>

          <div className="flex justify-center items-center gap-3 flex-wrap">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-6"
            />

            <span className="text-gray-700 font-medium">
              Rating 4.8/5
            </span>

            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="#f4b400"
                  color="#f4b400"
                />
              ))}
            </div>

            <span className="text-gray-500 text-sm">
              from 28,000+ reviews
            </span>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Left Character */}
          <div className="hidden lg:flex justify-center">
            <img
              src={pic}
              alt="Character"
              className="w-72 object-contain"
            />
          </div>

          {/* Reviews Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={review.img}
                    className="w-12 h-12 rounded-full object-cover"
                    alt={review.name}
                  />

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {review.name}
                    </h4>

                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            fill="#f4b400"
                            color="#f4b400"
                          />
                        ))}
                      </div>

                      <span className="text-xs text-gray-400">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {review.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;