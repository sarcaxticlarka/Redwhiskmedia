// import React from 'react';
// import { PopupButton } from "react-calendly";

// const Navbar = () => {
//   // Function for smooth scrolling
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav className="flex items-center p-6 gap-[30%] top-0 z-99 w-full">
//       <h1 className="text-3xl text-white">redwhisk</h1>
//       <ul className="flex space-x-4">
//         <li>
//           <button onClick={() => scrollToSection("page1")} className="text-[#333333] hover:text-white">
//             Home
//           </button>
//         </li>
//         <li>
//           <button onClick={() => scrollToSection("page2")} className="text-[#333333] hover:text-white">
//             About
//           </button>
//         </li>
//         <li>
//           <button onClick={() => scrollToSection("page4")} className="text-[#333333] hover:text-white">
//             Services
//           </button>
//         </li>
//         <li>
//           <button onClick={() => scrollToSection("ReelSection")} className="text-[#333333] hover:text-white">
//             Portfolio
//           </button>
//         </li>
//         <li>
//         <PopupButton
//             url="https://calendly.com/osmsad786"
//             rootElement={document.body} 
//             text="Contact Us"
//             className=" flex text-[#333333] hover:text-white rounded cursor-pointer"
//           />
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



// import React from 'react';
// import { PopupButton } from "react-calendly";

// const Navbar = () => {
//   // Function for smooth scrolling
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav className="absolute top-0 left-0 w-full flex items-center p-6 gap-[30%] z-50 bg-transparent">
//       <h1 className="text-3xl text-white">redwhisk</h1>
//       <ul className="flex space-x-4">
//         <li>
//           <button onClick={() => scrollToSection("page1")} className="text-[#ffffff] hover:text-gray-300">
//             Home
//           </button>
//         </li>
//         <li>
//           <button onClick={() => scrollToSection("page2")} className="text-[#ffffff] hover:text-gray-300">
//             About
//           </button>
//         </li>
//         <li>
//           <button onClick={() => scrollToSection("page4")} className="text-[#ffffff] hover:text-gray-300">
//             Services
//           </button>
//         </li>
//         <li>
//           <button onClick={() => scrollToSection("ReelSection")} className="text-[#ffffff] hover:text-gray-300">
//             Portfolio
//           </button>
//         </li>
//         <li>
//           <PopupButton
//             url="https://calendly.com/osmsad786"
//             rootElement={document.body} 
//             text="Contact Us"
//             className="text-[#ffffff] hover:text-gray-300 rounded cursor-pointer"
//           />
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar; 

import React, { useState } from "react";
import { PopupButton } from "react-calendly";
import { Menu, X } from "lucide-react";
import logo from '../assets/redwhiskkk.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after clicking
    }
  };

  return (
    <nav className="absolute -top-16 -left-2 w-full flex items-center p-6 z-50 bg-transparent">
      <div className="w-full flex items-center lg:gap-[30%] lg:flex-row flex justify-between mr-[40%]">
        <img className="w-42 h-42" src={logo} alt="" />        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <button onClick={() => scrollToSection("page1")} className="text-white hover:text-gray-300">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("page2")} className="text-white hover:text-gray-300">
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("page4")} className="text-white hover:text-gray-300">
              Services
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("ReelSection")} className="text-white hover:text-gray-300">
              Portfolio
            </button>
          </li>
          <li>
            <PopupButton
              url="https://calendly.com/osmsad786"
              rootElement={document.body}
              text="Contact Us"
              className="text-white hover:text-gray-300 rounded cursor-pointer"
            />
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-80 p-6 flex flex-col items-center space-y-4 lg:hidden">
          <button onClick={() => scrollToSection("page1")} className="text-white text-lg hover:text-gray-300">
            Home
          </button>
          <button onClick={() => scrollToSection("page2")} className="text-white text-lg hover:text-gray-300">
            About
          </button>
          <button onClick={() => scrollToSection("page4")} className="text-white text-lg hover:text-gray-300">
            Services
          </button>
          <button onClick={() => scrollToSection("ReelSection")} className="text-white text-lg hover:text-gray-300">
            Portfolio
          </button>
          <PopupButton
            url="https://calendly.com/mediaredwhisk"
            rootElement={document.body}
            text="Contact Us"
            className="text-white text-lg hover:text-gray-300 rounded cursor-pointer"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
