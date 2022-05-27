import React from "react";
import { AppWrap } from "../../wrapper";
import { BlogCards } from "../../components";
import { IoIosSearch } from "react-icons/io";
import { images } from "../../constants";
import "./Blogs.scss";

const Blogs = () => {
  return (
    <div className=" app__blogs">
      <main className="app__blogs-main">
        <BlogCards />
      </main>
      <div className="vr" />
      <aside className="app__blogs-aside">
        <div className="Aside-Search-Div">
          <button>
            <IoIosSearch
              style={{
                height: "2em",
                width: "2em",
                color: "rgba(0, 0, 0, 0.805)",
              }}
            />
          </button>
          <input type="text" placeholder="Search" />
        </div>
        {/* <img src={images.computer} alt="" /> */}
        <h3>Topics</h3>
        <div className="Aside-Tags">
          {["Casual", "Books", "Videogames", "Movies"].map((item, index) => (
            <div key={index} className={`Aside-Tags-Filter ${item}`}>
              {item}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default AppWrap(Blogs, "blogs", "app__whitebg");
