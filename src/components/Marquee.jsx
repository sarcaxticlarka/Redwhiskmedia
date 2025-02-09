import React from "react";

const images = [
  "https://logomak.com/blog/wp-content/uploads/2023/09/Nike-Logo-500x281-min.png",
  "https://www.zarla.com/images/mcdonalds-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2",
  "https://www.zarla.com/images/mcdonalds-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2",
  "https://logomak.com/blog/wp-content/uploads/2023/09/Pepsi-Logo-New-min-1024x576.png",
  "https://logomak.com/blog/wp-content/uploads/2023/09/Nike-Logo-500x281-min.png",
  "https://www.zarla.com/images/mcdonalds-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2",
  "https://www.zarla.com/images/mcdonalds-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2",
  "https://logomak.com/blog/wp-content/uploads/2023/09/Pepsi-Logo-New-min-1024x576.png",
  "https://logomak.com/blog/wp-content/uploads/2023/09/Nike-Logo-500x281-min.png",
  "https://www.zarla.com/images/mcdonalds-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2",
  "https://www.zarla.com/images/mcdonalds-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2",
  "https://logomak.com/blog/wp-content/uploads/2023/09/Pepsi-Logo-New-min-1024x576.png",
  "https://logomak.com/blog/wp-content/uploads/2023/09/Nike-Logo-500x281-min.png",
  "https://www.zarla.com/images/mcdonalds-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2",
  "https://www.zarla.com/images/mcdonalds-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2",
  "https://logomak.com/blog/wp-content/uploads/2023/09/Pepsi-Logo-New-min-1024x576.png",
];

const Marquee = () => {
  return (
    <div className="overflow-hidden w-full py-4 mt-8">
      <div className="marquee-wrapper flex w-full">
        <div className="marquee flex gap-8">
          {images.concat(images).map((src, index) => (
            <img key={index} src={src} alt="Marquee" className="w-42 h-32 object-cover" />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .marquee-wrapper {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
        }

        .marquee {
          display: flex;
          animation: marquee 10s linear infinite;
          min-width: 200%;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
