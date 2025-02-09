import React from "react";
import { PopupWidget } from "react-calendly";

const CalendlyModal = () => {
  return (
    <div className="App">
      <PopupWidget
        url="https://calendly.com/mediaredwhisk"
        
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
    </div>
  );
};

 

export default CalendlyModal;
