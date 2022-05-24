import React from "react";
import "./BlogCard.scss";
import { images } from "../../../constants";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoBookSharp } from "react-icons/io5";

const BlogCard = () => {
  return (
    <div className="BlogCard  ">
      <div className="BlogCard-Content">
        <div className="BlogCard-Header ">
          <img src={images.testAvatar} alt="" />
          <h5>Antonio Obradović</h5>
          <p> &#183; </p>
          <p id="BlogCard-Header-Date">4 days ago</p>
        </div>
        <div className="BlogCard-Main ">
          <div className="BlogCard-Main-Content">
            <h3>Your portfolio is stopping you from getting that job</h3>
            <p>
              An Intense way to learn about the process and practice your
              designs skills - My 1st hackathon Hackatons have been on my mind
              since I heard it was a good way to gain experience as junior UX
              designer. As my portfolio...
            </p>
          </div>
        </div>
        <div className="BlogCard-Footer">
          <div className="BlogCard-Footer-Left">
            {" "}
            <button>Portfolio</button>
            <p>3 min read</p>
            <p> &#183; </p>
            <p>Selected for you</p>
          </div>

          <div className="BlogCard-Footer-Right">
            {/* save button */}
            <IoBookSharp style={{ cursor: "pointer" }} />
            {/* options button */}
            <BiDotsHorizontalRounded style={{ cursor: "pointer" }} />
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="BlogCard-Image">
        <img src={images.testAvatar} alt="" />
      </div>
    </div>
  );
};

export default BlogCard;
