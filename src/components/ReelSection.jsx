// import React from "react";
// import reel1 from '../assets/reel1.mp4';
// import reel2 from '../assets/reel2.mp4';

// const ReelSection = () => {
//     const reels = [
//         {
//             title: "Darknet Diaries",
//             views: "2.4M+ Views",
//             video: reel1,
//             logo: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//         {
//             title: "Reid Hoffman",
//             subtitle: "Co-founder LinkedIn",
//             views: "3.2M+ Views",
//             video: reel2,
//             logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFt3DmsEDkQNQQxeYb8d8MtOaE9wsxjpB0w&s",
//         },
//         {
//             title: "Acquired FM",
//             views: "4.9M+ Views",
//             video: "https://www.w3schools.com/html/mov_bbb.mp4",
//             logo: "https://images.unsplash.com/photo-1629295607202-d13e19604c34?q=80&w=2485&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//     ];

//     // Array of rotations for each card
//     const rotations = ["rotate-[-3deg]", "rotate-[2deg]", "rotate-[-2deg]"];

//     return (
//         <div className="text-white py-16 px-4 md:px-10">
//             <div className="flex justify-center mb-10">
//                 <h2 className="bg-[#F6F0EE] text-[#ec646f] text-xl font-bold inline-block px-6 py-2 rounded-lg">
//                     Videos
//                 </h2>
//             </div>
//             <div className="flex flex-wrap justify-center gap-8">
//                 {reels.map((reel, index) => (
//                     <div
//                         key={index}
//                         className={`w-full sm:w-[350px] h-[560px] bg-white/22 border border-[#333333] rounded-lg p-4 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ${rotations[index % rotations.length]}`}
//                     >
//                         {/* Video with Logo */}
//                         <div className="relative w-full h-[100%]">
//                             <video
//                                 src={reel.video}
//                                 controls autoPlay muted loop
//                                 className="rounded-lg w-full h-full object-cover"
//                             ></video>
//                             <div className="absolute top-2 left-2 bg-black   w-12 h-12 rounded-full overflow-hidden">
//                                 <img
//                                     src={reel.logo}
//                                     alt="logo"
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                         </div>

//                         {/* Title & Views */}
//                         {/* <div className="mt-3 flex justify-center items-center text-center w-full gap-x-22">
//                             <h3 className="font-semibold text-[#333333] text-lg">{reel.title}</h3>
//                             <p className="text-sm text-[#333333]">{reel.views}</p>
//                         </div> */}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ReelSection;
import React from "react";
import './ReelSection.css';
// import reel1 from '../assets/reel1.mp4';
// import reel2 from '../assets/reel2.mp4';
// import reel3 from '../assets/redshort.mp4';


const ReelSection = () => {
    const reels = [
        {
            title: "Darknet Diaries",
            views: "2.4M+ Views",
            video: "https://drive.google.com/file/d/11p7k6Tn56ImwoWygbpzG3JCvPdot1Azo/view",
            logo: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Reid Hoffman",
            subtitle: "Co-founder LinkedIn",
            views: "3.2M+ Views",
            video: "",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFt3DmsEDkQNQQxeYb8d8MtOaE9wsxjpB0w&s",
        },
        {
            title: "Acquired FM",
            views: "4.9M+ Views",
            video: "",
            logo: "https://images.unsplash.com/photo-1629295607202-d13e19604c34?q=80&w=2485&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const rotations = ["rotate-[-3deg]", "rotate-[2deg]", "rotate-[-2deg]"];

    return (
        <div className="text-white py-16 px-4 md:px-10">
            <style>
                {`
                    .scrollbar-hide {
                        overflow-y: hidden; /* Hides vertical scrollbar */
                        overflow-x: auto;   /* Allows horizontal scrolling */
                    }

                    /* Optional: To hide scrollbar for Webkit browsers (Chrome, Safari) */
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none; /* Hides scrollbar */
                    }
                `}
            </style>
            <div className="flex justify-center mb-10">
                <h2 className="bg-[#F6F0EE] text-[#ec646f] text-xl font-bold inline-block px-6 py-2 rounded-lg">
                    Videos
                </h2>
            </div>
            
            <div className="flex overflow-x-auto mb-8 space-x-4 md:flex-wrap md:justify-center md:gap-8 scrollbar-hide sm:justify-start sm:overflow-x-scroll sm:scroll-smooth">
                {reels.map((reel, index) => (
                    <div
                        key={index}
                        className={`w-[350px] mb-8 mt-4 shrink-0 h-[560px] bg-white/22 border border-[#333333] rounded-lg p-4 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ${rotations[index % rotations.length]}`}
                    >
                        <div className="relative w-full h-[100%]">
                            <video
                                src={reel.video}
                                controls autoPlay muted loop
                                className="rounded-lg w-full h-full object-cover"
                            ></video>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReelSection;