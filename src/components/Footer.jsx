// import React from "react";
// import { PopupButton } from "react-calendly";

// const Footer = () => {
//     // Function for smooth scrolling
//     const scrollToSection = (id) => {
//         const section = document.getElementById(id);
//         if (section) {
//             section.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     return (
//         <footer className="bg-[#F6F0EE] text-[#333333] p-6">
//             <div className="max-w-screen-xl items-center mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

//                 {/* Navigation Links */}
//                 <div className="flex flex-col md:flex-row md:gap-8 text-sm mb-4 md:mb-0">
//                     <button onClick={() => scrollToSection("page1")} className="hover:underline">Home</button>
//                     <button onClick={() => scrollToSection("page2")} className="hover:underline">About</button>
//                     <button onClick={() => scrollToSection("holistic-content")} className="hover:underline">Holistic Content</button>
//                     <button onClick={() => scrollToSection("ReelSection")} className="hover:underline">Platform</button>

//                     {/* Calendly Popup Button */}
//                     <PopupButton
//                         url="https://calendly.com/osmsad786"
//                         rootElement={document.body}
//                         text="Contact"
//                         className=" hover:underline  border-gray-800 text-gray-800 px-2 py-1 rounded cursor-pointer"
//                     />
//                 </div>

//                 {/* Contact Email */}
//                 <div className="flex justify-center md:justify-end md:items-start">
//                     <a href="mailto:hello@redwhisk.com" className="text-lg font-light hover:underline">
//                         hello@redwhisk.com
//                     </a>
//                 </div>

//                 {/* Social Links */}
//                 <div className="flex flex-col items-end space-y-2">
//                     <a href="#linkedin" className="hover:underline">LinkedIn</a>
//                     <a href="#instagram" className="hover:underline">Instagram</a>
//                     <a href="#facebook" className="hover:underline">Facebook</a>
//                 </div>
//             </div>

//             <hr className="my-4 border-gray-700" />

//             <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
//                 {/* Locations */}
//                 <div className="grid grid-cols-2 gap-4">
//                     <div>
//                         <p className="font-semibold">Rishihood University</p>
//                         <p>1delhi Ncr</p>
//                         <p>44228</p>
//                     </div>
//                     <div>
//                         <p className="font-semibold">Saint Louis</p>
//                         <p>sonipat haryana</p>
//                         <p>11029</p>
//                     </div>
//                 </div>

//                 {/* Logo and Links */}
//                 <div className="flex flex-col items-center">
//                     <h1 className="text-2xl font-bold">Redwhisk<sup>®</sup></h1>
//                     <div className="flex space-x-4 mt-2">
//                         <a href="#privacy" className="hover:underline">Privacy policy</a>
//                         <a href="#license" className="hover:underline">License agreement</a>
//                     </div>
//                 </div>

//                 {/* QR Code */}
//                 <div className="flex justify-end items-center">
//                     <img
//                         src="https://play-lh.googleusercontent.com/Byl6BHzEv7tWDGa5QUgztneq8C8TGYelu8ywVMTTRUH2e9keboyLqL4YhmzaU3vjgA"
//                         alt="QR Code"
//                         className="w-22 h-22"
//                     />
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


import React from "react";
import { PopupButton } from "react-calendly";

const Footer = () => {
    // Function for smooth scrolling
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-[#F6F0EE] text-[#333333] p-6">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                    <button onClick={() => scrollToSection("page1")} className="hover:underline">Home</button>
                    <button onClick={() => scrollToSection("page2")} className="hover:underline">About</button>
                    <button onClick={() => scrollToSection("holistic-content")} className="hover:underline">Holistic Content</button>
                    <button onClick={() => scrollToSection("ReelSection")} className="hover:underline">Platform</button>
                    <PopupButton
                        url="https://calendly.com/mediaredwhisk"
                        rootElement={document.body}
                        text="Contact"
                        className="hover:underline border-gray-800 text-gray-800 px-2 py-1 rounded cursor-pointer"
                    />
                </div>

                {/* Contact Email */}
                <div className="text-center md:text-right">
                    <a href="mailto:mediaredwhisk@gmail.com" className="text-lg font-light hover:underline">
                        mediaredwhisk@gmail.com
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex flex-col items-center md:items-end space-y-2">
                    <a href="https://www.linkedin.com/company/redwhisk-media/" className="hover:underline">LinkedIn</a>
                    <a href="https://www.instagram.com/redwhisk.media/" className="hover:underline">Instagram</a>
                    <a href="#facebook" className="hover:underline">Facebook</a>
                </div>
            </div>

            <hr className="my-6 border-gray-700" />

            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-center md:text-left">
                {/* Locations */}
                <div className="grid grid-cols-2 gap-4 text-left">
                    <div>
                        <p className="font-semibold">Delhi NCR</p>
                        <p>India</p>
                      
                    </div>
                    
                </div>

                {/* Logo and Links */}
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold">Redwhisk<sup>®</sup></h1>
                    <div className="flex flex-wrap justify-center gap-4 mt-2">
                        <a href="#privacy" className="hover:underline">Privacy Policy</a>
                        <a href="#license" className="hover:underline">License Agreement</a>
                    </div>
                </div>

                {/* QR Code */}
                <div className="flex justify-center md:justify-end items-center">
                    <img
                        src="https://play-lh.googleusercontent.com/Byl6BHzEv7tWDGa5QUgztneq8C8TGYelu8ywVMTTRUH2e9keboyLqL4YhmzaU3vjgA=w240-h480-rw"
                        alt="QR Code"
                        className="w-20 h-20"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
