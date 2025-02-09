import React from "react";
import { PopupButton } from "react-calendly";

const CalendlyButton = () => {
  return (
    <PopupButton
      url="https://calendly.com/mediaredwhisk"
      rootElement={document.getElementById("root")}
      text="BOOK A CALL"
      className="bg-none border sm:text-[1vw] md:text-[1.5vw] border-gray-800 text-gray-800 px-4 py-2 rounded cursor-pointer"
    />
  );
};

export default CalendlyButton;
