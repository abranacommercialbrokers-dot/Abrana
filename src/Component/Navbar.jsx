// import { useState } from "react";
// import MegaMenu from "../MegaMenu/MegaMenu";
// import logo from "../Assets/logo.jpg"; // <-- change path if needed

// export default function Navbar() {
//   const [active, setActive] = useState(null);

//   const menu = [
//     "About Us",
//     "Services",
//     "Packages",
//     "Contact Us",
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
//         {/* Logo Image */}
//         <img
//   src={logo}
//   alt="Company Logo"
//   className="h-8 w-auto object-contain"
// />

//         {/* Menu */}
//         <nav className="hidden md:flex gap-10 text-sm font-medium text-gray-700">
//           {menu.map((item) => (
//             <div
//               key={item}
//               className="relative"
//               onMouseEnter={() => setActive(item)}
//               onMouseLeave={() => setActive(null)}
//             >
//               <span className="cursor-pointer hover:text-black transition">
//                 {item}
//               </span>

//               {active === item && <MegaMenu title={item} />}
//             </div>
//           ))}
//         </nav>

//         {/* Right Side */}
//         <div className="flex items-center gap-5 text-sm">
//           <span className="cursor-pointer hover:text-black">Login</span>
//           <span className="cursor-pointer hover:text-black">Search</span>
//           <span className="cursor-pointer hover:text-black">AR</span>
//         </div>
//       </div>
//     </header>
//   );
// }

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../Assets/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Insurance Services", path: "/ins" },
    { name: "Management Consultancy", path: "/c" },
    { name: "E-commerce Facilitation", path: "/e" },
    { name: "Tourism & Leisure Consulting", path: "/t" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo (Clickable to Home) */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Menu (Visible 1024px+) */}
        <nav className="hidden lg:flex gap-10 text-sm font-medium text-gray-700">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative group transition duration-300 hover:text-black ${
                  isActive ? "text-black" : ""
                }`
              }
            >
              {item.name}

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* Right Side (Desktop Only 1024px+) */}
        <div className="hidden lg:flex items-center gap-5 text-sm">
          <span className="cursor-pointer hover:text-black">Login</span>
          <span className="cursor-pointer hover:text-black">Search</span>
        </div>

        {/* Mobile Hamburger (Below 1024px) */}
        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)}>
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-black"></span>
              <span className="block w-6 h-[2px] bg-black"></span>
              <span className="block w-6 h-[2px] bg-black"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Below 1024px) */}
      {open && (
        <div className="lg:hidden bg-white px-6 pb-4 shadow-md">
          <nav className="flex flex-col gap-4 text-sm font-medium text-gray-700">
            {menu.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `transition duration-300 hover:text-black ${
                    isActive ? "text-black" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex gap-5 mt-4 text-sm">
            <span className="cursor-pointer hover:text-black">Login</span>
            <span className="cursor-pointer hover:text-black">Search</span>
          </div>
        </div>
      )}
    </header>
  );
}