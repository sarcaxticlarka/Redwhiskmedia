// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import CalendlyButton from './CalendlyButton';

// const Page2 = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const h1Text = document.querySelector(".page2 h1");
//     const textContent = h1Text.textContent;
//     h1Text.innerHTML = textContent.split("").map(letter => `<span>${letter}</span>`).join("");

//     gsap.to(".page2 h1 span", {
//       color: "#ec646f",
//       stagger: 0.05,
//       scrollTrigger: {
//         trigger: ".page2",
//         start: "top 50%",
//         end: "top 20%",
//         scrub: true,
//       },
//     });
//   }, []);

//   return (
//     <div className="page2 bg-[#F6F0EE] w-full h-screen flex flex-col items-center relative">
//       <div className="w-[15vw] absolute top-[35%] left-0 h-[15vw] bg-[#ec646f] via-[#e773d5] to-[#8ae4eb] rounded-full bg-[length:230%] bg-center"></div>
//       <div className="w-[15vw] absolute top-[55%] right-0 h-[15vw] bg-[#ec646f] from-[#fcffbc] via-[#e773d5] to-[#8ae4eb] rounded-full bg-[length:230%] bg-center rotate-[270deg]"></div>

//       <h1 className="text-4xl font-bold mt-36 w-[80%] text-[#333333] text-center">
//         TO CREATE, INNOVATE, AND ELEVATE THE STANDARD OF DESIGN, VIDEO, GRAPHICS,
//         AND WEB EXPERIENCES—PUTTING CREATIVITY, IMPACT, AND USER EXPERIENCE FIRST.
//       </h1>

//       <div className="flex mt-24 flex-col justify-between backdrop-blur-[30px] shadow-inner shadow-white/10 text-[#e6e6e6] mt-8 border w-[90%] rounded-[12px] gap-[15px] border-[2px] h-52">
//         <div className="flex flex-col p-16 items-center gap-[10px] opacity-80 text-[17px]">
//           <h3 className="text-2xl text-black">JOIN OUR CREATIVE COMMUNITY</h3>
//           <a href="#" className="block w-full  text-gray-800 px-4 py-2 rounded mt-4">
//             <div className="flex justify-center">
//               <CalendlyButton />
//             </div>
//           </a>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page2;


import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import brochure from "../assets/Brochure@Redwhisk.pdf"
// import CalendlyButton from './CalendlyButton';

const Page2 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const h1Text = document.querySelector(".page2 h1");
    const textContent = h1Text.textContent;
    h1Text.innerHTML = textContent.split("").map(letter => `<span>${letter}</span>`).join("");

    gsap.to(".page2 h1 span", {
      color: "#ec646f",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".page2",
        start: "top 50%",
        end: "top 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="page2 bg-[#F6F0EE] w-full h-screen flex flex-col items-center relative">
      <div className="w-[15vw] c1 absolute top-[35%] left-0 h-[15vw] bg-[#ec646f] via-[#e773d5] to-[#8ae4eb] rounded-full bg-[length:230%] bg-center"></div>
      <div className="w-[15vw] absolute top-[55%] right-0 h-[15vw] bg-[#ec646f] from-[#fcffbc] via-[#e773d5] to-[#8ae4eb] rounded-full bg-[length:230%] bg-center rotate-[270deg]"></div>

      <h1 className="create text-4xl font-bold mt-36 w-[80%] text-[#333333] text-center sm:text-[2.3vw]">
        TO CREATE, INNOVATE, AND ELEVATE THE STANDARD OF DESIGN, VIDEO, GRAPHICS,
        AND WEB EXPERIENCES—PUTTING CREATIVITY, IMPACT, AND USER EXPERIENCE FIRST.
      </h1>

      <div className="flex mt-24 flex-col justify-between backdrop-blur-[30px] shadow-inner shadow-white/10 text-[#e6e6e6] mt-8 border w-[90%] rounded-[12px] gap-[15px] border-[2px] h-52 sm:w-[95%] sm:h-auto sm:mt-10 md:w-[90%] md:h-auto">
        <div className="flex flex-col p-16 items-center gap-[10px] opacity-80 text-[17px] sm:p-8 sm:gap-6 sm:text-[15px] md:p-12 md:gap-8">
          <h3 className="text-[2.5vw]  text-black " style={{ fontFamily: "Poppins, serif" }}>WANT TO KNOW MORE ABOUT US <span className="text-[3.2vw]">?</span></h3>
          <a href="#" className="block w-full text-gray-800 px-4 py-2 rounded mt-4 sm:px-3  sm:py-2">
            {/* <div className="flex justify-center">
              <CalendlyButton />
              
            </div> */}
            <div className="flex justify-center">
              <a
                href={brochure}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="down px-4 py-2 text-[#333333] border-1 rounded-lg font-semibold hover:bg-[#ec646f] transition" style={{ fontFamily: "Poppins, serif" }}>
                  Download Brochure
                </button>
              </a>
            </div>

          </a>
        </div>
      </div>
    </div>
  );
};

export default Page2;
