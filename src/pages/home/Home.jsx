import React from "react";
import Footer from "../../components/footer/Footer";
import AboveFooter from "../../components/footer/aboveFooter/AboveFooter";
import Header from "../../components/navbar/Header";
import BelowHeader from "../../components/navbar/BelowHeader";
import "./home.css";
import "./home2.css";
import { GiSofa } from "react-icons/gi";
import { IoWifi } from "react-icons/io5";
import { PiOfficeChairFill } from "react-icons/pi";
import { MdHeadsetMic } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { ImBin2 } from "react-icons/im";
import { FaMobileRetro } from "react-icons/fa6";
import { BiSolidCctv } from "react-icons/bi";
import { RiSmartphoneFill } from "react-icons/ri";
import { BsSuitcaseFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import BlogCard from "../../components/blogCard/BlogCard";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import Properties from "../../components/properties/Properties";

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
            <span style={{ color: "#A00500" }}> Delhi-NCR!</span>
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

      <div className="advanatages d-flex container">
        <div className="advantagestext" style={{ marginRight: "100px" }}>
          <div className="adavantagesheading">
            <h3>
              {" "}
              Comfortable Coliving for{" "}
              <span style={{ color: "#A00500" }}>Everyone!</span>
            </h3>
          </div>
          <div className="advantagespara">
            <p>
              Embark on a new coloving journey, where you're not just<br></br>
              residents - you're a community of friends!<br></br>
              Be comfortable in your own space or bring yourself a<br></br>
              roomate, the choice is totally yours!
            </p>
          </div>
          <div className="advanatgespoint">
            <ul className="advanatagespoints2">
              <li>
                Working<br></br>Professionals
              </li>
              <li>
                Budding<br></br>Entrepreneurs
              </li>
              <li>
                Creative<br></br>Opportunists
              </li>
            </ul>
          </div>
        </div>
        <div className="advantagesphotos">
          <img src="./Quickstay1.png" alt=" "></img>
        </div>
      </div>
      <div className="propertiesoverview container">
      
        <div className="propertyheading">
          <h3>
            Explore<span className="underlineyellow" style={{ color: "#A00500" }} > QuickStay Coliving</span>{" "}
            in Gurugram!
          </h3>
        </div>
        
        <div className="propertypara">
          <p>
            Enjoy zero brokerage fully furnished stays, dedicated customer
            support, and much more,<br></br> making your move-in as easy as
            unlockind the door. We only care about yoyr comfort & convenience!
          </p>
        </div>
     
      <div className="propertiescard ">
        <Properties />
        <Properties />
        <Properties />
        <Properties />
      </div>
      <div className="allproperties">
        <button>SEE ALL PROPERTIES</button>
      </div>
      </div>
      

      <div className="quickstaypromise d-flex container">
        <div className="promiseimages">
          <img
            src="./images/promise1.png"
            alt=" "
            style={{ marginRight: "30px" }}
          ></img>
          <img
            src="./images/promise2.png"
            alt=" "
            style={{ marginRight: "30px" }}
          ></img>
          <img src="./images/promise3.png" alt=" "></img>
        </div>
        <div className="promisetext">
          <div className="promiseheading">
            <h3>
              <span style={{ color: "#A00500" }}>QuickStay </span>Promise.
            </h3>
          </div>
          <div className="promisepara">
            <p>
              We thrive to provide the best coliving stay for rent to every
              <br></br>
              customer.Be it a private room or sharing room with your<br></br>
              roomate, we manage to provide the best available option<br></br>
              for you!
            </p>
          </div>
          <div>
            <p className="promisemark">Keep renting with us!</p>
          </div>
        </div>
      </div>

      <div className="importanceofquickstay d-flex container">
        <div className="importancetext">
          <div className="importanceheading">
            <h3>
              Why Stay at <span style={{ color: "#A00500" }}>QuickStay?</span>
            </h3>
          </div>
          <div className="importancepara">
            <p>
              We want to help you simplify your life and cut out the<br></br>
              unecessary headache of finding the perfect rental stay.<br></br>
              Rent QuickStay Coliving in Gurugram & experience the<br></br>
              best!
            </p>
          </div>
          <div className="importancemark">Rental living made easy!</div>
        </div>

        <div className="importanceicon">
          <IconContext.Provider value={{ size: "3em" }}>
            <ul className="importanceiconlist">
              <li>
                <GiSofa style={{ color: "#A00500" }} />
                Full Furnished<br></br>stays
              </li>
              <li>
                <IoWifi style={{ color: "#A00500" }} />
                High Speed<br></br>Wi-Fi
              </li>
              <li>
                <PiOfficeChairFill style={{ color: "#A00500" }} />
                Near to<br></br>offices
              </li>
              <li>
                <MdHeadsetMic style={{ color: "#A00500" }} />
                Dedicated customer <br></br>support
              </li>
              <li>
                <HiMiniUserGroup style={{ color: "#A00500" }} />
                Like minded<br></br> community
              </li>
              <li>
                <ImBin2 style={{ color: "#A00500" }} />
                Free room<br></br> cleaning
              </li>
              <li>
                <FaMobileRetro style={{ color: "#A00500" }} />
                App managed<br></br> stays
              </li>
              <li>
                <BiSolidCctv style={{ color: "#A00500" }} />
                24*7 safety &<br></br> security
              </li>
              <li>
                <RiSmartphoneFill style={{ color: "#A00500" }} />
                Smart<br></br> amenities
              </li>
              <li>
                <BsSuitcaseFill style={{ color: "#A00500" }} />
                Ready to<br></br> move-in
              </li>
            </ul>
          </IconContext.Provider>
        </div>
      </div>

      <div className="findstay d-flex container">
        <div className="findstayimage">
          <img src="./images/Quickstay2.png" alt=" "></img>
        </div>
        <div className="finstaytext">
          <div className="findstayheading">
            <h3>
              Find your favourite{" "}
              <span style={{ color: "#A00500" }}>
                coliving stay in<br></br>Gurugram!
              </span>
            </h3>
          </div>
          <div className="findstaypara">
            <p>
              A new city might feel too new to roam around and look for a decent
              <br></br>
              rental stay, is'nt it?<br></br>Discover stress- free living in
              Gurugram with QuickStay! Let us<br></br> handle your comfottable
              stay, making you hassle-free. Find<br></br> the best coliving
              stays for a welcoming and convenient experience.<br></br> Your
              home in Gurugram is just a click away!
            </p>
          </div>
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
