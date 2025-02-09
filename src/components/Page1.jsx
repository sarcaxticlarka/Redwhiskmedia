// import React from 'react';
// import CalendlyButton from './CalendlyButton';
// import Navbar from './Navbar';
// import bgvedio from '../assets/bgvedio.mp4';
// import { PopupButton } from "react-calendly";

// const Page1 = () => {
//   return (
//     <div className="relative">
//       <Navbar className="z-10" />
//       <video
//         className="absolute  top-0 left-0 w-full h-full object-cover z-1"
//         autoPlay
//         loop
//         muted
//       >
//         <source src={bgvedio} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
      
      
         
//       <div className="h-screen -mt-10 flex flex-col justify-center relative z-10 relative">
//         {/* <h1 className="text-8xl text-[#333333] ml-[6%]">Brands are <br /> built here.</h1> */}
//         <div className="absolute text-xl  top-[55%] left-1/2 transform -translate-x-1/2">
//         {/* <  CalendlyButton  /> */}
//         <PopupButton
//                         url="https://calendly.com/osmsad786"
//                         rootElement={document.body}
//                         text="Book call"
//                         className="bg-[#ec646f] border border-1 px-4 border-gray-800 text-white py-1 rounded cursor-pointer"
//                     />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page1;


// import React from 'react';
// import Navbar from './Navbar';
// import bgvedio from '../assets/bgvedio.mp4';
// import { PopupButton } from "react-calendly";

// const Page1 = () => {
//   return (
//     <div className="relative h-screen w-full overflow-x-hidden">
//       {/* Navbar must be at top and above the video */}
//       <Navbar />

//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover -z-10"
//         autoPlay
//         loop
//         muted
//       >
//         <source src={bgvedio} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div className="h-screen w-full flex flex-col justify-center items-center relative z-10 ">
//         <div className="absolute text-xl bottom-[15%] left-1/2 transform -translate-x-1/2">
//           <PopupButton
//             url="https://calendly.com/osmsad786"
//             rootElement={document.body}
//             text="Book call"
//             className="bg-[#ec646f] text-sm border border-none px-6 border-gray-800 text-white py-3 rounded-[1.2vw] cursor-pointer" style={{ fontFamily: "Poppins, serif" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page1;
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import bgvedio from "../assets/bgvedio.mp4";
import bgvedioSm from "../assets/redshik_phone.mp4";
import { PopupButton } from "react-calendly";

const Page1 = () => {
  const [videoSource, setVideoSource] = useState(bgvedio);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 480px)");

    const handleResize = () => {
      setVideoSource(mediaQuery.matches ? bgvedioSm : bgvedio);
    };

    // Initial check on mount
    handleResize();

    // Listen for changes
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-x-hidden">
      {/* Navbar should always stay on top */}
      <Navbar />

      {/* Video Background */}
      <video
        key={videoSource} // Forces React to reload when source changes
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="h-screen w-full flex flex-col justify-center items-center relative z-10">
        <div
          className="absolute text-xl bottom-[15%] left-1/2 transform -translate-x-1/2"
          style={{ fontFamily: "Poppins, serif" }}
        >
          <PopupButton
            url="https://calendly.com/mediaredwhisk"
            rootElement={document.body}
            text="Book a call"
            className="bg-[#ec646f] text-base border-none px-6 text-white py-2 rounded-md cursor-pointer hover:bg-[#ec646d] hover:text-[#333333]"
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;
