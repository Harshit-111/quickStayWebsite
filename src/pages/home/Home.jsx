import React from "react";
import Footer from "../../components/footer/Footer";
import AboveFooter from "../../components/footer/aboveFooter/AboveFooter";
import Header from "../../components/navbar/Header";
import BelowHeader from "../../components/navbar/BelowHeader";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <BelowHeader />
      <div className="regionparent container">
        <div className="Region">
          <div className="regionphotos">
            <img className="Gurugram" src="./gurugram.png" alt=""></img>
            <span>Gurugram</span>
          </div>
          <div className="regionphotos">
            <img className="Delhi" src="./delhi.png" alt=" "></img>
            <span>Delhi</span>
          </div>
          <div className="regionphotos">
            <img className="Noida" src="./noida.png" alt=" "></img>
            <span>Noida</span>
          </div>
        </div>
        <div className="Regiontext">
          <h3>
            Experience Coliving in
            <span style={{ color: "red" }}> Delhi-NCR!</span>
          </h3>

          <p className="text">
            Elevate your rental living with the finest coliving spaces in
            <br></br> Delhi-NCR, curated for comfort and community at QuickStay.
          </p>
          <ul className="ColivingProperties mt-5">
            <li>
              Full Furnished <br></br>Homes
            </li>
            <li>
              Zero Brokerage<br></br> 1 month deposit
            </li>
            <li>
              Smart<br></br> coliving stays
            </li>
            <li>
              App managed <br></br>stays
            </li>
            <li>
              On-call<br></br> assistance
            </li>
            <li>
              Community<br></br> Living
            </li>
          </ul>
        </div>
      </div>

      <AboveFooter />
      <Footer />
    </div>
  );
};

export default Home;
