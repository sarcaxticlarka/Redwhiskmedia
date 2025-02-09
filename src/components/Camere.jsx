import { useEffect, useState } from "react";
import { BatteryCharging, Circle } from "lucide-react";

const Camere = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 p-4 overflow-hidden">
      <div className="     "></div>
      {/* Top Left Lines */}
      <div className="absolute top-4 left-4 w-24 h-0.5 bg-gray-800"></div>
      <div className="absolute top-4 left-4 h-12 w-0.5 bg-gray-800"></div>

      {/* Top Right Lines & Battery */}
      <div className="absolute top-4 right-4 w-24 h-0.5 bg-gray-800"></div>
      <div className="absolute top-4 right-4 h-12 w-0.5 bg-gray-800"></div>
      <div className="absolute top-6 right-6  text-xl text-gray-800 flex items-center gap-1">
        70% <BatteryCharging />
      </div>

      {/* Bottom Left Lines & REC */}
      <div className="absolute bottom-4 left-4 w-24 h-0.5 bg-gray-800"></div>
      <div className="absolute bottom-4 left-4 h-12 w-0.5 bg-gray-800"></div>
      <div className="absolute bottom-6 left-6 flex items-center gap-1 text-white">
        <div className="h-[5px] w-[5px] bg-red-600 rounded-full animate-ping"></div>
        <p className="text-xl ml-1 text-[#333333]">Recording</p>
      </div>

      {/* Bottom Right Lines & Time */}
      <div className="absolute bottom-4 right-4 w-24 h-0.5 bg-gray-800"></div>
      <div className="absolute bottom-4 right-4 h-12 w-0.5 bg-gray-800"></div>
      <div className="absolute bottom-6 right-6  text-xl text-[#333333]">{time}</div>

      <div className="absolute  left-4 w-1 h-96  top-1/2 transform -translate-y-1/2">
        <div className="h-[33%] bg-[#ec646f] w-full"></div>
        <div className="h-[34%] bg-green-400 w-full"></div>
        <div className="h-[33%] bg-[#333333] w-full"></div>
      </div>

      <div className="absolute  right-4   h-96  top-1/2 transform -translate-y-1/2">

        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="362" viewBox="0 0 12 362" fill="none">
          <g stroke="#333333">
            <path d="M0 1H12" />
            <path d="M4 5H12" />
            <path d="M4 9H12" />
            <path d="M4 13H12" />
            <path d="M4 17H12" />
            <path d="M0 21H12" />
            <path d="M4 25H12" />
            <path d="M4 29H12" />
            <path d="M4 33H12" />
            <path d="M4 37H12" />
            <path d="M0 41H12" />
            <path d="M4 45H12" />
            <path d="M4 49H12" />
            <path d="M4 53H12" />
            <path d="M4 57H12" />
            <path d="M0 61H12" />
            <path d="M4 65H12" />
            <path d="M4 69H12" />
            <path d="M4 73H12" />
            <path d="M4 77H12" />
            <path d="M0 81H12" />
            <path d="M4 85H12" />
            <path d="M4 89H12" />
            <path d="M4 93H12" />
            <path d="M4 97H12" />
            <path d="M0 101H12" />
            <path d="M4 105H12" />
            <path d="M4 109H12" />
            <path d="M4 113H12" />
            <path d="M4 117H12" />
            <path d="M0 121H12" />
            <path d="M4 125H12" />
            <path d="M4 129H12" />
            <path d="M4 133H12" />
            <path d="M4 137H12" />
            <path d="M0 141H12" />
            <path d="M4 145H12" />
            <path d="M4 149H12" />
            <path d="M4 153H12" />
            <path d="M4 157H12" />
            <path d="M0 161H12" />
            <path d="M4 165H12" />
            <path d="M4 169H12" />
            <path d="M4 173H12" />
            <path d="M4 177H12" />
            <path d="M0 181H12" />
            <path d="M4 185H12" />
            <path d="M4 189H12" />
            <path d="M4 193H12" />
            <path d="M4 197H12" />
            <path d="M0 201H12" />
            <path d="M4 205H12" />
            <path d="M4 209H12" />
            <path d="M4 213H12" />
            <path d="M4 217H12" />
            <path d="M0 221H12" />
            <path d="M4 225H12" />
            <path d="M4 229H12" />
            <path d="M4 233H12" />
            <path d="M4 237H12" />
            <path d="M0 241H12" />
            <path d="M4 245H12" />
            <path d="M4 249H12" />
            <path d="M4 253H12" />
            <path d="M4 257H12" />
            <path d="M0 261H12" />
            <path d="M4 265H12" />
            <path d="M4 269H12" />
            <path d="M4 273H12" />
            <path d="M4 277H12" />
            <path d="M0 281H12" />
            <path d="M4 285H12" />
            <path d="M4 289H12" />
            <path d="M4 293H12" />
            <path d="M4 297H12" />
            <path d="M0 301H12" />
            <path d="M4 305H12" />
            <path d="M4 309H12" />
            <path d="M4 313H12" />
            <path d="M4 317H12" />
            <path d="M0 321H12" />
            <path d="M4 325H12" />
            <path d="M4 329H12" />
            <path d="M4 333H12" />
            <path d="M4 337H12" />
            <path d="M0 341H12" />
            <path d="M4 345H12" />
            <path d="M4 349H12" />
            <path d="M4 353H12" />
            <path d="M4 357H12" />
            <path d="M0 361H12" />
          </g>
        </svg>
      </div>


    </div>
  );
};

export default Camere;
