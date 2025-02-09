// import React from "react";

// const HolisticContent = () => {
//   return (
//     <div 
//       className="bg-[#F6F0EE] text-[#333333] min-h-screen flex flex-col items-center justify-center" 
//       style={{ fontFamily: "Poppins, serif" }}
//     >
//       <div className="text-center px-4">
//         <h1 className="text-6xl font-bold mb-22 font-normal">
//           Strategic Growth Through Expert Consulting
//         </h1>

//         <p className="text-gray-400 max-w-3xl text-xl mx-auto mb-16">
//           Unlock your business’s full potential with data-driven strategies, innovative solutions, and seamless execution—maximizing impact with minimal effort.
//         </p>
//       </div>

//       <div className="flex justify-center items-center gap-46 mb-16">
//         <div className="text-center">
//           <h2 className="text-7xl font-semibold text-[#ec646f]"> 100+</h2>
//           <p className="mt-2 text-gray-400">Successful Projects</p>
//         </div>
//         <div className="text-center">
//           <h2 className="text-7xl font-semibold text-[#ec646f]"> 10M+</h2>
//           <p className="mt-2 text-gray-400">Audience Reached+</p>
//         </div>
//         <div className="text-center">
//           <h2 className="text-7xl font-semibold text-[#ec646f]">50+</h2>
//           <p className="mt-2 text-gray-400">Businesses Transformed</p>
//         </div>
//       </div>

//       <div className="flex items-center justify-center gap-4 relative">
//         <button className="px-4 py-2 bg-[#ec646f] text-white font-medium rounded hover:bg-[#ec6463] transition">
//           Your vision, our expertise—let’s make it happen! 
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HolisticContent;

import React from "react"; 
const HolisticContent = () => {
  return (
    <div 
      className="bg-[#F6F0EE] text-[#333333] min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 sm:py-auto" 
      style={{ fontFamily: "Poppins, serif" }}
    >
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl  font-semi-bold mb-6 ">
          Strategic Growth Through Expert Consulting
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mx-auto mb-12">
          Unlock your business’s full potential with data-driven strategies, innovative solutions, and seamless execution—maximizing impact with minimal effort.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#ec646f]">100+</h2>
          <p className="mt-2 text-gray-400 text-base md:text-lg">Successful Projects</p>
        </div>
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#ec646f]">10M+</h2>
          <p className="mt-2 text-gray-400 text-base md:text-lg">Audience Reached</p>
        </div>
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#ec646f]">50+</h2>
          <p className="mt-2 text-gray-400 text-base md:text-lg">Businesses Transformed</p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="px-6 py-3 bg-[#ec646f] text-white text-lg font-medium rounded hover:bg-[#ec6463] transition">
          Your vision, our expertise—let’s make it happen!
        </button>
      </div>
    </div>
  );
};

export default HolisticContent;
