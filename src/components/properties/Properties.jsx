import React from "react";
import "./property.css";
const Properties = () => {
  return (
    <div className="PropertyCard" style={{ width: "18rem" }}>
      <img
        className="propertyimage"
        src="./images/properties.png"
        alt="property not found"
      />
      <div className="card-body">
        <div className="aboutproperty">
          <h6 className="Propertytitle">QuickStay Coliving QSE704</h6>
          <p className="Propertyaddress">DLF Phase 3, Gurugram</p>
        </div>

        <div className="PropertyCardLine"></div>
        <div className="propertydetails">
          <p className="Propertyrent">
            Rent starts at <br></br>
            <span className="Propertyrentamount">₹14,000</span>
          </p>

          <button href="#" className="btn">
            1RK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
