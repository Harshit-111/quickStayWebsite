import React from "react";
import "./blogCard.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const BlogCard = () => {
  return (
    <div className="blogCard">
      <img src="./images/blogCardBg.png" alt="blog" />
      <div className="blogCardText ">
        <p>
          The Best Coliving Stays <br />
          in India!
        </p>
        <div className="blogCardLine"></div>
        <span className="readNow">
          Read Now <MdKeyboardArrowRight />
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
