import React from "react";
import Footer from "../../components/footer/Footer";
import AboveFooter from "../../components/footer/aboveFooter/AboveFooter";
import Header from "../../components/navbar/Header";
import BelowHeader from "../../components/navbar/BelowHeader";
import "./home.css";
import "./home2.css";
import BlogCard from "../../components/blogCard/BlogCard";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

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

      <div className="toApp">
        <div className="toAppText">
          <p className="toAppTextHeading">
            We are always at your <br />
            fingertips!
          </p>
          <p className="toAppTextBody">
            Embark on an exciting coliving adventure with QuickStay! From
            finding your perfect fully-furnished stay to effortless booking,
            seamless daily management, and stress-free move-out – our
            comprehensive services are designed for a convenient and comfortable
            long-term rental stay. Discover your ideal home in the new city with
            QuickStay – your trusted renting partner in Gurugram!
          </p>
          <div className="PlayAppStore">
            <img src="./images/playstore.png" alt="" />
            <img src="./images/appstore.png" alt="" />
          </div>
        </div>
        <div className="toAppImg">
          <img src="./images/toApp.png" alt="toAppPng" />
        </div>
      </div>
      <div className="socialMediaHandles container">
        <div className="socialMediaLogos">
          <div className="socialMediaLogoBg">
            <FaFacebookF size="2.5em" />
          </div>
          <div className="socialMediaLogoBg">
            <FaXTwitter size="2.5em" />
          </div>
          <div className="socialMediaLogoBg">
            <FaInstagram size="2.5em" />
          </div>
          <div className="socialMediaLogoBg">
            <TfiYoutube size="2.5em" />
          </div>
          <div className="socialMediaLogoBg">
            <FaLinkedinIn size="2.5em" />
          </div>
        </div>
        <div className="socialMediaText">
          We’re <span className="colorText">Social!</span>
          <br />
          LIKE. FOLLOW. SHARE
        </div>
      </div>
      <div className="blogSection">
        <p className="blogSectionHeading">
          The <span className="colorText underlineYellow">QuickStay</span> Blog
        </p>
        <p>
          Stranger to the new city? Don’t worry! From finding the best coliving
          room in Gurugram to the best morning chai, we will help you!
        </p>
        <div className="blogCards container">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="ToBlogsButton">READ ALL BLOGS</div>
      </div>
      <div className="referFriends d-flex">
        <div className="referFriendsimg">
          <img src="./images/referFriends.png" alt="" />
        </div>
        <div className="referFreindstext">
          <div className="referFriendsHeading">
            <span className="colorText">Refer Friends </span>and save on
            <br />
            monthly rent!
          </div>
          <div>
            <p>
              Share the comfort and convenience of our coliving spaces with
              friends.
            </p>
            <p>
              When they book through your referral, both you and your friend
              enjoy monthly rental discount.
            </p>
            <p>
              It's a win-win – spreading the joy of QuickStay while earning
              rewards! Start referring and start earning today!
            </p>
          </div>
          <div>
            So, the next time you’re booking a stay at QuickStay through your
            friend, don’t forget to add their phone number in the referral code
            to avail benefits for both of you!
          </div>
        </div>
      </div>
      <div className="whatsappSteps ">
        <h4>
          Book your new stay in
          <span className="colorText underlineYellow"> 5 easy steps </span>
          through WhatsApp!
        </h4>
        <div className="steps container">
          <div className="whatsappimgs">
            <img src="./images/whatsappSS/first.png" alt="" />
            <div>
              Send “<span className="colorText">Hi</span>” on WhatsApp:
              <br /> +91-8882798880 <br />
              Then type “<span className="colorText">New Stay</span>” to <br />
              explore properties
            </div>
          </div>
          <div className="whatsappimgs">
            <img src="./images/whatsappSS/second.png" alt="" />
            <div>
              Choose your favourite <br />
              stay & contact the Area <br />
              Manager for property <br />
              visit.
            </div>
          </div>
          <div className="whatsappimgs">
            <img src="./images/whatsappSS/third.png" alt="" />
            <div>
              Type <span className="colorText">“Token”</span> to reserve <br />
              your room at QuickStay
            </div>
          </div>
          <div className="whatsappimgs">
            <img src="./images/whatsappSS/fourth.png" alt="" />
            <div>
              Remember to{" "}
              <span className="colorText">
                untick <br />
                Paytm wallet
              </span>{" "}
              while token <br />
              payment to avoid <br />
              convenience charges!
            </div>
          </div>
          <div className="whatsappimgs">
            <img src="./images/whatsappSS/fifth.png" alt="" />
            <div>
              Yay!🥳 Room booking done! <br />
              Share the payment <br />
              screenshot & other details <br />
              in the same chat.
            </div>
          </div>
        </div>
      </div>
      <div className="partners mt-8">
        <span>
          Our Partners!
          <div className="line"></div>
        </span>
        <div className="partnersLogo">
          <img src="./images/partnerlogos/vibeco.png" alt="" />
          <img src="./images/partnerlogos/bigohealth.png" alt="" />
          <img src="./images/partnerlogos/paytm.png" alt="" />
          <img src="./images/partnerlogos/giverly.png" alt="" />
          <img src="./images/partnerlogos/gamezop.png" alt="" />
          <img src="./images/partnerlogos/eatclub.png" alt="" />
          <img src="./images/partnerlogos/omega.png" alt="" />
        </div>
      </div>
      <AboveFooter />
      <Footer />
    </div>
  );
};

export default Home;
