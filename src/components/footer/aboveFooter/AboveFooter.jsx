import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./aboveFooter.css";

const AboveFooter = () => {
  const [showDrop, setShowDrop] = useState(true);
  return (
    <div className="aboveFooter">
      <div className="aboveFooterHeadingContainer">
        <div
          className="aboveFooterHeading myContainer"
          onClick={() => setShowDrop(!showDrop)}
        >
          <h3>Find us in Gurugram!</h3>
          <FaChevronDown size="2em" />
        </div>
      </div>
      {showDrop && (
        <div className="aboveFooterBody myContainer">
          <div>
            <p>PG in Gurgaon</p>
            <p>PG for boys in Gurgaon</p>
            <p>PG for girls in Gurgaon</p>
            <p>PG in Dlf City Phase 3</p>
            <p>PG for boys in Dlf City Phase 3</p>
            <p>PG for girls in Dlf City Phase 3</p>
            <p>PG in Sector 39</p>
            <p>PG for boys in Sector 39</p>
            <p>PG for girls in Sector 39</p>
            <p>PG in Sector 43</p>
            <p>PG for boys in Sector 43</p>
            <p>PG for girls in Sector 43</p>
          </div>
          <div>
            <p>Unisex PG in Gurgaon</p>
            <p>Unisex PG in Dlf City Phase 3</p>
            <p>Unisex PG in Sector 39</p>
            <p>Unisex PG in Sector 43</p>
          </div>
          <div>
            <p>Coliving in Gurgaon</p>
            <p>Coliving in Dlf City Phase 3</p>
            <p>Coliving in Sector 39</p>
            <p>Coliving in Sector 43</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboveFooter;
