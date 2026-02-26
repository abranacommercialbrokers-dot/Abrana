import React from "react";

const MapSection = () => {
  return (
    <section className="w-full h-[450px] mt-12 grayscale hover:grayscale-0 transition duration-500">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39723.13689728271!2d-0.127758!3d51.507351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sLondon!5e0!3m2!1sen!2suk!4v1700000000000"
        className="w-full h-full border-none"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default MapSection;