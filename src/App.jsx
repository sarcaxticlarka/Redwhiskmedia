// import React from 'react';
// import Camera from './components/Camere';
// import Navbar from './components/Navbar';
// import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
// import Page4 from './components/Page4';

// import backgroundImage from './assets/backgroung.JPG';
// import './App.css'; // Add your CSS styles here
// import Marquee from './components/Marquee';
// import HolisticContent from './components/HolisticContent';
// import ReelSection from './components/ReelSection';  
// import CustomerTestimonials from './components/CustomerTestimonials';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="background-container">
//       <Camera />
//       <Navbar />
//       <Page1 />
//       <Page2 />
//       <Page3 />
//       <Page4 />
//       <Marquee/>
//       <HolisticContent/>
//       <ReelSection/> 
//       <CustomerTestimonials/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
// src/App.js


import React, { useState, useEffect } from 'react';
import Camera from './components/Camere';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Marquee from './components/Marquee';
import HolisticContent from './components/HolisticContent';
import ReelSection from './components/ReelSection';
import CustomerTestimonials from './components/CustomerTestimonials';
import Footer from './components/Footer';
import Spinner from './components/Preloader';
import Cursor from './components/Cursor';
import './App.css';
 
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImagesAndVideos = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    loadImagesAndVideos();
  }, []);

  return (
    <div className="background-container font-[Domine', serif] overflow-x-hidden">
    
      {isLoading ? <Spinner /> : (
        <>
          <Camera />
          <div id="page1"><Page1 /></div>
          <div id="page2"><Page2 /></div>
          <div id="page3"><Page3 /></div>
          <div id="page4"><Page4 /></div>
          <div id="holistic-content"><HolisticContent /></div>
          {/* <Marquee /> */}
          <div id="ReelSection"><ReelSection /></div>
          <CustomerTestimonials />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
