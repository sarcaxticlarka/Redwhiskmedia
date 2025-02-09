// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import './Page3.css';

// const Page3 = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const tl = gsap.timeline({ paused: true });

//     // Animate the red circle from -200% on the x-axis
//     tl.from(".red-circle", {
//       x: "-500%",
//       ease: "power2.out",
//       duration: 1,
//     })
//     // Then animate the red line
//     .from(".red-line", {
//       left: "-50%",
//       ease: "power2.out",
//       duration: 0.3,
//     }, "-=0.1")
//     // Animate the .circle1 elements in the x-direction only
//     .to(".circle1", {
//       x: (i) => `${(i + 1) * 50}vw`, // Moves each circle a different amount in the positive x-direction
//       y: (i) => `${(i % 2 === 0 ? 1 : -1) * (Math.random() * 10 + 10)}vh`, // Add random vertical movement
//       rotation: 20,
//       duration: 0.6,
//       ease: "power2.out",
//     }, "-=0.5")
//     .from("#craft", {
//       opacity: 0,
//       y: 10,
//       stagger: 0.2,  
//       ease: "power2.out",
//       duration: 0.5,
//     }, "+=0.2");

//     // Detect if section is already in viewport on load
//     const page3 = document.querySelector(".page3");
//     const rect = page3.getBoundingClientRect();
//     const isInView = rect.top < window.innerHeight && rect.bottom > 0;

//     if (isInView) {
//       tl.restart(); // Run immediately if in view on load
//     }

//     // ScrollTrigger to restart animation when entering
//     ScrollTrigger.create({
//       trigger: ".page3",
//       start: "top center",
//       onEnter: () => {
//         tl.restart();  
//       },
//       onLeaveBack: () => {
//         tl.pause(0); 
//       },
//     });

//   }, []);

//   return (
//     <div className="page3 min-h-screen w-full relative flex flex-col justify-center items-center overflow-hidden">
//       <div className="dont absolute top-[15vw] left-[11%]">
//         <h2 className="text-[3.5vw] text-[#333] leading-none">Don't follow the crowd.</h2>
//         <h2 id="craft" className="text-[3.5vw] leading-none text-[#333] font-helvetica">
//           Create a brand that drives <br /> innovation and growth. Make <br /> your mark on the world with us!
//         </h2>
//         <div className="red-line absolute top-[1.87vw] h-[0.3vw] w-[32vw] bg-[#ec646f]"></div>
//       </div>

//       <div className="circle absolute right-[25%] top-[28%] flex gap-[3vw]">
//         <div className="circle-con flex flex-col gap-[3vw]">
//           <div className="circle1 h-[7vw] w-[7vw] rounded-full bg-white"></div>
//           <div className="circle1 h-[7vw] w-[7vw] rounded-full bg-white"></div>
//         </div>
//         <div className="circle-con flex flex-col gap-[3vw]">
//           <div className="circle1 h-[7vw] w-[7vw] rounded-full bg-white"></div>
//           <div className="circle1 h-[7vw] w-[7vw] rounded-full bg-white"></div>
//         </div>
//       </div>
//       <div className="red-circle absolute top-[13vw] h-[7vw] w-[7vw] rounded-full bg-[#ec646f]"></div>
//     </div>
//   );
// };

// export default Page3;


 
import React from "react";
import { motion } from "framer-motion";
import './Page3.css';

const Page3 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const redCircleVariants = {
    hidden: { x: "-800%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.7 },
    },
  };

  const redLineVariants = {
    hidden: { left: "-80%" },
    visible: {
      left: 0,
      transition: { delay: 1, duration: 0.3, ease: "easeOut" },  
    },
  };

  const circleVariants = {
    hidden: { x: 0, y: 0, rotate: 0 },
    visible: (i) => ({
      x: `${(i + 1) * 50}vw`,
      y: `${(i % 2 === 0 ? 1 : -1) * (Math.random() * 10 + 10)}vh`,
      rotate: 20,
      transition: { delay: 1.9, duration: 0.6, ease: "easeOut" },  
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.5, duration: 0.5, ease: "easeOut" },  
    },
  };

  return (
    <motion.div
      className="page3 min-h-screen w-full relative flex flex-col justify-center items-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}  
    >
      <div className="dont absolute top-[10vw] left-[11%]">
        <h2 className="text-[3.3vw] text-[#333] leading-none">Don't follow the crowd.</h2>
        <motion.h2
          id="craft"
          className="text-[3.3vw] leading-none text-[#333] font-helvetica"
          variants={textVariants}
        >
          Create a brand that drives <br /> innovation and growth. Make <br /> your mark on the world with us!
        </motion.h2>
        <motion.div
          className="red-line absolute top-[1.87vw] h-[0.3vw] w-[32vw] bg-[#ec646f]"
          variants={redLineVariants}
        />
      </div>

      <div className="circle absolute right-[25%] top-[28%] flex gap-[3vw]">
        <div className="circle-con flex flex-col gap-[3vw]">
          <motion.div
            className="circle1 h-[7vw] w-[7vw] rounded-full bg-white"
            variants={circleVariants}
            custom={0}
          />
          <motion.div
            className="circle1 h-[7vw] w-[7vw] rounded-full bg-white"
            variants={circleVariants}
            custom={1}
          />
        </div>
        <div className="circle-con flex flex-col gap-[3vw]">
          <motion.div
            className="circle1 h-[7vw] w-[7vw] rounded-full bg-white"
            variants={circleVariants}
            custom={2}
          />
          <motion.div
            className="circle1 h-[7vw] w-[7vw] rounded-full bg-white"
            variants={circleVariants}
            custom={3}
          />
        </div>
      </div>
      <motion.div
        className="red-circle absolute left-[48%] top-[11vw] h-[7vw] w-[7vw] rounded-full bg-[#ec646f]"
        variants={redCircleVariants}
      />
    </motion.div>
  );
};

export default Page3;