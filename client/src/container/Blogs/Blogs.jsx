import React from "react";
import { AppWrap } from "../../wrapper";
import { BlogCards } from "../../components";
import { IoIosSearch } from "react-icons/io";
import { images } from "../../constants";
import "./Blogs.scss";

const Blogs = () => {
  return (
    <div className=" app__blogs">
      <h1>blogs</h1>

      <input type="text" placeholder="Search" />

      {/* <img src={images.computer} alt="" /> */}
      {/* <h3>Topics</h3>
      <div className="Aside-Tags">
        {["Casual", "Books", "Videogames", "Movies"].map((item, index) => (
          <div key={index} className={`Aside-Tags-Filter ${item}`}>
            {item}
          </div>
        ))}
      </div> */}

      <main className="app__blogs-main">
        <div className="app__blogs-main-blogs">
          <BlogCards />
        </div>
      </main>
    </div>
  );
};

export default AppWrap(Blogs, "blogs", "app__whitebg");
