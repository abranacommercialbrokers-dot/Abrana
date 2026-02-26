// import React from 'react';
// import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

// const ContactPage = () => {
//   return (
//     <div className="bg-[#0b011d] text-white min-h-screen font-sans selection:bg-purple-500">
      
//       {/* Top Gradient Header Section */}
//       <section className="relative pt-20 pb-16 overflow-hidden">
//         {/* The Purple Glow Background */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full"></div>
        
//         <div className="relative z-10 text-center px-4">
//           <h1 className="text-5xl font-bold mb-4">Contact us</h1>
//           <p className="text-gray-400 max-w-lg mx-auto text-lg">
//             Start the conversation to established good relationship and business.
//           </p>
//         </div>
//       </section>

//       {/* Main Content: Info & Form */}
//       <section className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12">
        
//         {/* Left Side: Text and Info */}
//         <div className="space-y-8">
//           <div>
//             <span className="text-pink-500 font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
//             <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight">
//               Seamless Communication, <br /> Global Impact.
//             </h2>
//             <p className="text-gray-400">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="flex items-start gap-4">
//               <div className="bg-pink-500 p-3 rounded-full"><MapPin size={20} /></div>
//               <div>
//                 <h4 className="font-bold">HEAD OFFICE</h4>
//                 <p className="text-gray-400 text-sm">Jln Cempaka Wangi No 22<br/>Jakarta - Indonesia</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-4">
//               <div className="bg-pink-500 p-3 rounded-full"><Mail size={20} /></div>
//               <div>
//                 <h4 className="font-bold">EMAIL SUPPORT</h4>
//                 <p className="text-gray-400 text-sm">support@yourdomain.tld<br/>hello@yourdomain.tld</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-4">
//               <div className="bg-pink-500 p-3 rounded-full"><Phone size={20} /></div>
//               <div>
//                 <h4 className="font-bold">LET'S TALK</h4>
//                 <p className="text-gray-400 text-sm">Phone: +6221.2002.2012<br/>Fax: +6221.2002.2013</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-4">
//               <div className="bg-pink-500 p-3 rounded-full"><Clock size={20} /></div>
//               <div>
//                 <h4 className="font-bold">WORKING HOURS</h4>
//                 <p className="text-gray-400 text-sm">Monday - Friday<br/>07am - 09pm</p>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h4 className="font-bold mb-4">Follow our social media</h4>
//             <div className="flex gap-3">
//               {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
//                 <div key={i} className="bg-white text-black p-2 rounded-full cursor-pointer hover:bg-pink-500 hover:text-white transition">
//                   <Icon size={18} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Form Card */}
//         <div className="bg-[#160a2c] p-10 rounded-2xl border border-gray-800 shadow-xl">
//           <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
//           <p className="text-gray-400 mb-8 text-sm">
//             Please feel free to send us any questions, feedback or suggestions you might have.
//           </p>
          
//           <form className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-xs uppercase mb-2 font-semibold">Name</label>
//                 <input type="text" placeholder="Name" className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500" />
//               </div>
//               <div>
//                 <label className="block text-xs uppercase mb-2 font-semibold">Company</label>
//                 <input type="text" placeholder="Company" className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500" />
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-xs uppercase mb-2 font-semibold">Phone</label>
//                 <input type="text" placeholder="Phone" className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500" />
//               </div>
//               <div>
//                 <label className="block text-xs uppercase mb-2 font-semibold">Email</label>
//                 <input type="email" placeholder="Email" className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500" />
//               </div>
//             </div>
//             <div>
//               <label className="block text-xs uppercase mb-2 font-semibold">Subject</label>
//               <input type="text" placeholder="Subject" className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500" />
//             </div>
//             <div>
//               <label className="block text-xs uppercase mb-2 font-semibold">Message</label>
//               <textarea rows="4" placeholder="Message" className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500"></textarea>
//             </div>
//             <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:opacity-90 transition">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="w-full h-[450px] mt-12 grayscale hover:grayscale-0 transition duration-500">
//         <iframe 
//           title="map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39723.13689728271!2d-0.127758!3d51.507351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sLondon!5e0!3m2!1sen!2suk!4v1700000000000"
//           className="w-full h-full border-none"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-white pt-20 pb-8 px-6 border-t border-gray-900">
//         <div className="container mx-auto grid md:grid-cols-4 gap-12">
//           <div className="col-span-1">
//             <div className="flex items-center gap-2 mb-6">
//               <div className="w-8 h-8 bg-gray-900 rounded-lg"></div>
//               <span className="text-2xl font-bold text-black">Abrana Commercial Brokers</span>
//             </div>
//             <p className="text-black text-sm leading-relaxed mb-6">
//               Transforming ideas into Digital Excellence. Elevate your online presence with our innovative solutions and strategic digital services.
//             </p>
//             <div className="flex gap-3">
//                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
//                 <Icon key={i} size={18} className="text-black cursor-pointer hover:gray-900" />
//               ))}
//             </div>
//           </div>
          
//           <div>
//             <h4 className="font-bold mb-6 text-black">Services</h4>
//             <ul className="text-black text-sm space-y-3">
//               <li>Website Development</li>
//               <li>App Development</li>
//               <li>Digital Marketing</li>
//               <li>Graphic Design</li>
//               <li>Brand Identity</li>
//               <li>Search Engine Optimization</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-bold mb-6 text-black">Support</h4>
//             <ul className="text-black text-sm space-y-3">
//               <li>Help Center</li>
//               <li>FAQ</li>
//               <li>Ticket Support</li>
//               <li>Sales Support</li>
//               <li>Contact us</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-bold mb-6 text-black">Company</h4>
//             <ul className="text-black text-sm space-y-3">
//               <li>About us</li>
//               <li>Our Team</li>
//               <li>Careers</li>
//               <li>Article & News</li>
//               <li>Legal Notices</li>
//             </ul>
//           </div>
//         </div>

//         <div className="container mx-auto mt-20 pt-8 border-t border-gray-900 flex flex-col md:row-between md:flex-row justify-between text-gray-500 text-xs">
//           <p>Copyright © 2026 DigiMax. All rights reserved. Powered by MoxCreative.</p>
//           <div className="flex gap-4 mt-4 md:mt-0">
//             <span>Term of use</span>
//             <span>Privacy Policy</span>
//             <span>Cookie Policy</span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ContactPage;





import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const ContactPage = () => {
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
        "https://api.sheetmonkey.io/form/uQqoPWvGk2L69iWJPWMk6V", // <-- Your working API
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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
    <div className="bg-[#0b011d] text-white min-h-screen font-sans selection:bg-purple-500">

      {/* ================= HEADER ================= */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Contact us</h1>
          <p className="text-gray-400 max-w-lg mx-auto text-lg">
            Start the conversation to established good relationship and business.
          </p>
        </div>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12">

        {/* LEFT SIDE - INFO BOXES */}
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
                <p className="text-gray-400 text-sm">Offices Block-B - Office No. 8C-11 - Residence 1072<br/>Al Muteena - Dubai - United Arab Emirates</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-pink-500 p-3 rounded-full"><Mail size={20} /></div>
              <div>
                <h4 className="font-bold">EMAIL SUPPORT</h4>
                <p className="text-gray-400 text-sm">abranacommercialbrokers@gmail.com</p>
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
                <p className="text-gray-400 text-sm">Monday - Saturday<br/>10am - 07pm</p>
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

        {/* RIGHT SIDE - WORKING FORM (Your fully working code) */}
        <div className="bg-[#160a2c] p-10 rounded-2xl border border-gray-800 shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
          <p className="text-gray-400 mb-8 text-sm">
            Please feel free to send us any questions, feedback or suggestions you might have.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500"
            />
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full bg-[#0b011d] border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-pink-500"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:opacity-90 transition"
            >
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

      {/* ================= MAP SECTION ================= */}
      <section className="w-full h-[450px] mt-12 grayscale hover:grayscale-0 transition duration-500">
        <iframe
          title="map"
          src="google.com/maps?q=25.276981353759766,55.32792663574219&z=17&hl=en"
          className="w-full h-full border-none"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white pt-20 pb-8 px-6 border-t border-gray-900">
        <div className="container mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gray-900 rounded-lg"></div>
              <span className="text-2xl font-bold text-black">Abrana Commercial Brokers</span>
            </div>
            <p className="text-black text-sm leading-relaxed mb-6">
              We help businesses and individuals navigate opportunities through structured coordination, reliable advisory services, and efficient operational support, all delivered with a strong commitment to transparency, compliance, and trust.
            </p>
            <div className="flex gap-3">
               {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <Icon key={i} size={18} className="text-black cursor-pointer hover:gray-900" />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-black">Services</h4>
            <ul className="text-black text-sm space-y-3">
              <li>Commercial Brokerage </li>
              <li>Insurance Services</li>
              <li>Tourism & Leisure Consulting</li>
              <li>E-Commerce Services</li>
              <li>Combined Office Administrative Services</li>
              <li>Management Consultancy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-black">Support</h4>
            <ul className="text-black text-sm space-y-3">
              <li>Help Center</li>
              <li>FAQ</li>
              <li>Ticket Support</li>
              <li>Sales Support</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-black">Company</h4>
            <ul className="text-black text-sm space-y-3">
              <li>About us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Article & News</li>
              <li>Legal Notices</li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto mt-20 pt-8 border-t border-gray-900 flex flex-col md:row-between md:flex-row justify-between text-gray-500 text-xs">
          <p>Copyright © 2026 Abrana Commercial Brokers. All rights reserved. Powered by Hamza Ali .</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Term of use</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;