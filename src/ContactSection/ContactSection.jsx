import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch(
        "https://api.sheetmonkey.io/form/uQqoPWvGk2L69iWJPWMk6V",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setLoading(false);
  };

  return (
    <>
      {/* HEADER */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Contact us</h1>
          <p className="text-gray-400 max-w-lg mx-auto text-lg">
            Start the conversation to established good relationship and business.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12">
        
        {/* LEFT */}
        <div className="space-y-8">
          <div>
            <span className="text-pink-500 font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
            <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight">
              Seamless Communication, <br /> Global Impact.
            </h2>
            <p className="text-gray-400">
              We are here to help you grow your business with professional support and strategic solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-pink-500 p-3 rounded-full"><MapPin size={20} /></div>
              <div>
                <h4 className="font-bold">HEAD OFFICE</h4>
                <p className="text-gray-400 text-sm">
                  Offices Block-B - Office No. 8C-11 - Residence 1072<br/>
                  Al Muteena - Dubai - United Arab Emirates
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-pink-500 p-3 rounded-full"><Mail size={20} /></div>
              <div>
                <h4 className="font-bold">EMAIL SUPPORT</h4>
                <p className="text-gray-400 text-sm">
                  abranacommercialbrokers@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-pink-500 p-3 rounded-full"><Phone size={20} /></div>
              <div>
                <h4 className="font-bold">LET'S TALK</h4>
                <p className="text-gray-400 text-sm">Phone: 0554668913</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-pink-500 p-3 rounded-full"><Clock size={20} /></div>
              <div>
                <h4 className="font-bold">WORKING HOURS</h4>
                <p className="text-gray-400 text-sm">
                  Monday - Saturday<br/>10am - 07pm
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow our social media</h4>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <div key={i} className="bg-white text-black p-2 rounded-full cursor-pointer hover:bg-pink-500 hover:text-white transition">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#160a2c] p-10 rounded-2xl border border-gray-800 shadow-xl">
          <h3 className="text-gray-400 text-2xl font-bold mb-2">Send us a message</h3>
          <p className="text-gray-400 mb-8 text-sm">
            Please feel free to send us any questions, feedback or suggestions you might have.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500"/>
              <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500"/>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500"/>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500"/>
            </div>

            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500"/>

            <textarea rows="4" name="message" value={formData.message} onChange={handleChange} placeholder="Message" required className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500"></textarea>

            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:opacity-90 transition">
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-400 text-sm mt-4">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactSection;