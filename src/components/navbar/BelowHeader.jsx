import React from "react";
import "./belowheader.css";
import { IoIosArrowDropright } from "react-icons/io";

const BelowHeader = () => {
  return (
    <div className="Remainingheader">
      <div className="remainingHeaderText">
        <div className="Headerheadings">
          <h1>Want Easy Stay?</h1>
          <h1>
            <span style={{ color: "white" }}>करो </span>
            <span style={{ color: "yellow", marginLeft: "10px" }}>
              QuickStay!
            </span>
          </h1>
        </div>
        <p style={{ color: "white" }}>
          Your Cozy Corner in the Heart of the City!
        </p>
        <div className="Headerheadings2">
          <p>Explore your perfect stay in Gurugram!</p>
          <IoIosArrowDropright size="3em" />
        </div>
      </div>

      <img className="headerperson" src="./headerphoto.png" alt=" "></img>
    </div>
  );
};

export default BelowHeader;
