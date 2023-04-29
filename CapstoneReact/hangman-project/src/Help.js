import React, { useState } from "react";
import "./Help.css";


function Help() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div  className="HelpSection ">
      <button className="firstbtn" onClick={togglePopup}>Help</button>
      {isOpen && (
        <div className="popup">
        <p>The Game is Guessing the Provinces in South Africa </p>
          <li>Start off by guessing vowels.</li>
          <li>The series of dashes,  represent a letter in the solution.</li>
          <li>Each wrong guess brings you closer to getting hanged.</li>
          <li>Do not enter  space or special characters</li>
          <button className="helo-btn" onClick={togglePopup}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Help;
