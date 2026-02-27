import React from "react";

const MapSection = () => {
  return (
    <section className="w-full h-[450px] mt-12 grayscale hover:grayscale-0 transition duration-500">
      <iframe
        title="map"
        src="https://www.google.com/maps?q=25.276899337768555,55.327754974365234&z=17&hl=en"
        className="w-full h-full border-none"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default MapSection;