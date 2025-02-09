// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import './Cursor.css';

// const Cursor = () => {
//   useEffect(() => {
//     const moveCursor = (e) => {
//       const mouseY = e.clientY;
//       const mouseX = e.clientX;
//       gsap.to("#pointer", {
//         duration: 0.1,
//         x: mouseX,
//         y: mouseY
//       });
//     };

//     window.addEventListener('mousemove', moveCursor);

//     return () => {
//       window.removeEventListener('mousemove', moveCursor);
//     };
//   }, []);

//   return (
//     <div id="pointer" className="pointer">
//       <svg width="1.2cm" height="2cm">
//         <g transform="scale(1.5)">
//           <path d="M 5 5 L 30 15 L 20 20 L 15 30 L 5 5"></path>
//         </g>
//       </svg>
//       <div className="bubble">
//         <p id="greetingText">Hi</p>
//       </div>
//     </div>
//   );
// };

// export default Cursor;


import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Cursor.css';
// import icon from './path-to-your-icon.png'; // Import your icon image

const Cursor = () => {
  useEffect(() => {
    const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      gsap.to("#pointer", {
        duration: 0.1,
        x: mouseX,
        y: mouseY
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div id="pointer" className="pointer">
      <svg width="1.2cm" height="2cm">
        <g transform="scale(1.5)">
          <path d="M 5 5 L 30 15 L 20 20 L 15 30 L 5 5"></path>
        </g>
      </svg>
       
    </div>
  );
};

export default Cursor;