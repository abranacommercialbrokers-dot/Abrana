import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaPlane, FaCar, FaHome, FaLifeRing, FaPiggyBank, FaPaw, FaMotorcycle, FaShip, FaBriefcase } from "react-icons/fa";
import health from "../Assets/health.jpg"
import tra from "../Assets/tra.jpg"
import veh from "../Assets/veh.jpg"

export default function InsuranceSectionPremium() {
  const [mainTab, setMainTab] = useState("individual");
  const [subTab, setSubTab] = useState("health");

  // ✅ Memoized data for individual and business
  const individualData = useMemo(() => ({
    health: [
      { title: "Abu Dhabi Basic Health Insurance Plan", desc: "Optimal health insurance covering hospital stays, treatments and medicines within Abu Dhabi.", img: (health) },
      { title: "Individuals & Families Health Insurance", desc: "Coverage of inpatient, outpatient, maternity and emergency services.", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800" },
      { title: "Flexi Health Insurance Plan", desc: "Access to network clinics and hospitals for emergency or inpatient treatment.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800" }
    ],
    travel: [
      { title: "Emergency Travel Insurance", desc: "Covers unexpected medical emergencies during travel worldwide.", img: (tra) },
      { title: "International Travel Coverage", desc: "Worldwide emergency coverage with peace of mind.", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800" }
    ],
    car: [
      { title: "Vehicle Insurance Plan", desc: "Comprehensive car coverage including accidents and theft.", img: (veh) }
    ],
    home: [
      { title: "Home Insurance Plan", desc: "Protect your home and belongings against damage or theft.", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800" }
    ],
    // life: [
    //   { title: "Life Insurance Plan", desc: "Secure your family's future with comprehensive life coverage.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800" }
    // ],
    savings: [
      { title: "Savings Insurance Plan", desc: "Insurance plans combined with savings benefits.", img: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" }
    ],
    // pet: [
    //   { title: "Pet Insurance Plan", desc: "Coverage for veterinary care for your pets.", img: "https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=800" }
    // ],
    // bike: [
    //   { title: "Bike Insurance Plan", desc: "Protect your motorcycle against accidents and theft.", img: "https://images.unsplash.com/photo-1589998059171-0d20709da212?q=80&w=800" }
    // ],
    // yacht: [
    //   { title: "Yacht Insurance Plan", desc: "Full protection for your boat or yacht.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800" }
    // ]
  }), []);

  const businessData = useMemo(() => ({
    corporate: [
      { title: "Corporate Health Insurance", desc: "Group health plans tailored for businesses.", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800" }
    ],
    sme: [
      { title: "SME Business Insurance", desc: "Flexible insurance coverage for small businesses.", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800" }
    ]
  }), []);

  const currentCards = useMemo(() => mainTab === "individual" ? individualData[subTab] : businessData[subTab], [mainTab, subTab, individualData, businessData]);

  // Icon map for sub-tabs
  const subTabIcons = {
    health: <FaHeart className="text-red-600" />,
    travel: <FaPlane className="text-gray-600" />,
    car: <FaCar className="text-blue-600" />,
    home: <FaHome className="text-green-600" />,
    life: <FaLifeRing className="text-purple-600" />,
    savings: <FaPiggyBank className="text-yellow-600" />,
    pet: <FaPaw className="text-pink-600" />,
    bike: <FaMotorcycle className="text-gray-700" />,
    yacht: <FaShip className="text-cyan-600" />,
    corporate: <FaBriefcase className="text-black" />,
    sme: <FaBriefcase className="text-black" />
  };

  const subTabs = mainTab === "individual" ? Object.keys(individualData) : Object.keys(businessData);

  return (
    <div className="bg-[#f4f2ef] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">Find Your Ideal Insurance Plan</h2>

        <div className="flex rounded-3xl overflow-hidden bg-[#e9e6e1] shadow-xl flex-col lg:flex-row">
          {/* LEFT VERTICAL SIDEBAR */}
          <div className="w-full lg:w-64 bg-[#dedbd6] p-8 flex flex-col gap-4">
            <button
              onClick={() => { setMainTab("individual"); setSubTab("health"); }}
              className={`block w-full text-left pb-4 mb-4 font-medium transition ${mainTab === "individual" ? "text-black border-b border-gray-400" : "text-gray-400"}`}
            >
              Individual
            </button>
            <button
              onClick={() => { setMainTab("business"); setSubTab("corporate"); }}
              className={`block w-full text-left font-medium transition ${mainTab === "business" ? "text-black border-b border-gray-400" : "text-gray-400"}`}
            >
              Business
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 p-10">
            {/* SUB TABS */}
            <div className="flex items-center justify-between mb-10 overflow-x-auto gap-6">
              <div className="flex gap-6 items-center flex-wrap">
                {subTabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setSubTab(tab)}
                    className={`flex items-center gap-2 pb-2 ${subTab === tab ? "border-b-2 border-red-600 text-black" : "text-gray-500"}`}
                  >
                    {subTabIcons[tab] || null} {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <button className="bg-red-700 text-white px-6 py-2 rounded-full text-sm hover:bg-red-800 transition">
                Get a Quote Now
              </button>
            </div>

            {/* CARDS */}
            <AnimatePresence mode="wait">
              <motion.div
                key={subTab}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {currentCards.map((card, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition duration-300"
                  >
                    <img
                      src={card.img}
                      loading="lazy"
                      alt=""
                      className="h-44 w-full object-cover"
                    />
                    <div className="p-6">
                      <h4 className="font-semibold text-lg mb-3">{card.title}</h4>
                      <p className="text-sm text-gray-600">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}