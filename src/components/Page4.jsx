// import React from 'react';

// const Page4 = () => {
//   // const cards = [
//   //   {
//   //     title: 'Video Editing',
//   //   description: "Transform your raw footage into stunning visuals.",
//   //     gradientFrom: 'from-black',
//   //     gradientTo: 'to-gray-600',
//   //   },
//   //   {
//   //     title: 'Website Development',
//   //     description: 'Build modern, responsive websites tailored to your needs.',
//   //     gradientFrom: 'from-red-500',
//   //     gradientTo: 'to-yellow-400',
//   //   },
//   //   {
//   //     title: 'SEO Optimization',
//   //   description: 'Boost your website’s search engine rankings with expert strategies.',
//   //     gradientFrom: 'from-purple-600',
//   //     gradientTo: 'to-pink-600',
//   //   },
//   //   {
//   //     title: 'Brand Strategy',
//   //   description: 'Create a strong brand identity and strategy for your business.',
//   //     gradientFrom: 'from-yellow-400',
//   //     gradientTo: 'to-red-500',
//   //   },
//   //   {
//   //      title: 'Digital Marketing',
//   //   description: 'Reach your audience through targeted digital campaigns.',
//   //     gradientFrom: 'from-blue-500',
//   //     gradientTo: 'to-red-500',
//   //   },
//   //   {
//   //     title: 'Consulting & Advisory',
//   //   description: 'Get expert guidance for your business growth and success.',
//   //     gradientFrom: 'from-green-500',
//   //     gradientTo: 'to-blue-500',
//   //   },
//   // ];

//   return (
//     // <div className="min-h-fit flex flex-col justify-center items-center  py-10">
//     //   <h1 className='text-[8vw] font-extrabold leading-none mb-6 text-left  '>Services</h1>
//     //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
//     //     {cards.map((card, index) => (
//     //       <div
//     //         key={index}
//     //         className="card w-full min-h-[500px] rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-lg transform transition duration-100 ease-out hover:scale-110 hover:rounded-none"
//     //       >
//     //         <div
//     //           className={`card-header bg-gradient-to-br ${card.gradientFrom} ${card.gradientTo} h-72`}
//     //         ></div>
//     //         <div className="card-body p-5">
//     //           <h5 className="card-title text-2xl font-semibold pb-2 relative">
//     //             {card.title}
//     //             <span className="absolute bottom-0 left-0 w-2/3 h-[2px] bg-black"></span>
//     //           </h5>
//     //           <p className="card-para py-2">{card.description}</p>
//     //           <button
//     //             className={`card-btn w-36 h-9 rounded-tl-3xl rounded-br-3xl bg-gradient-to-br ${card.gradientFrom} ${card.gradientTo} text-white py-2 cursor-pointer`}
//     //           >
//     //             Let's Create
//     //           </button>
//     //         </div>
//     //       </div>
//     //     ))}
//     //   </div>
//     // </div>
//     <div className="flex justify-center items-center h-screen bg-gray-200">
//       <div className="flex gap-5">
//         <div className="flip-card w-52 h-64">
//           <div className="flip-card-inner">
//             <div className="flip-card-front flex flex-col justify-center items-center rounded-lg shadow-lg bg-black text-white text-center">
//               <h3 className="text-lg">Welcome to Designil</h3>
//             </div>
//             <div className="flip-card-back rounded-lg shadow-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 alt="Back Image"
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .flip-card {
//           perspective: 1000px;
//         }

//         .flip-card-inner {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           transition: transform 0.6s;
//           transform-style: preserve-3d;
//         }

//         .flip-card:hover .flip-card-inner {
//           transform: rotateY(180deg);
//         }

//         .flip-card-front,
//         .flip-card-back {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           backface-visibility: hidden;
//         }

//         .flip-card-back {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Page4;


import React from 'react';
import webImg from "../assets/web_img.jpg";
import contentResearch from "../assets/content_research.jpg";
import graphic from "../assets/graphic.jpg";
import storytelling from "../assets/storytelling.jpg";
import videoEditing from "../assets/video_editing.jpg";
import brandStr from "../assets/brand_stratergy.jpg";

const FlipCard = ({ title, serialNo, imageUrl }) => {
  return (
    <div className="flip-card w-96 h-72  md:mb-8 ">
      <div className="flip-card-inner">
        <div className="flip-card-front flex flex-col justify-center items-center rounded-lg shadow-lg bg-white/20 text-white text-center relative">
          <p className='absolute top-6 left-6 text-3xl bg-[#ec646f] px-4 py-1 rounded-full'>{serialNo}</p>
          <h3 className="text-3xl text-[#333333]">{title}</h3>
        </div>
        <div className="flip-card-back rounded-lg shadow-lg">
          <img
            src={imageUrl}
            alt="Back Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

const Page4 = () => {
  const cardsData = [
    { title: "Video Editing", serialNo: 1, imageUrl: videoEditing },
    { title: "Website Development", serialNo: 2, imageUrl: webImg },
    { title: "Graphic Design", serialNo: 3, imageUrl: graphic },
    { title: "Brand Strategy", serialNo: 4, imageUrl: brandStr },
    { title: "Storytelling", serialNo: 5, imageUrl: storytelling },
    { title: "Content Research", serialNo: 6, imageUrl: contentResearch },
  ];

  return (
    <div className="flex flex-col flex-wrap justify-center items-center min-h-screen sm:pb-16 " style={{
      fontFamily: "Poppins, serif",
      marginBottom: window.innerWidth <= 768 ? "10vw" : "20px", // Adjust the margin based on screen width
    }}>
      <h1 className='text-5xl mb-8'>Services</h1>
      <div className="flex gap-5 flex-wrap justify-center ">
        {cardsData.map((card, index) => (
          <FlipCard key={index} title={card.title} serialNo={card.serialNo} imageUrl={card.imageUrl} />
        ))}
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Page4;
