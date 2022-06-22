import React, { useState, useEffect } from "react";
import { AppWrap } from "../../wrapper";
import { BlogCards } from "../../components";
import { IoIosSearch } from "react-icons/io";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import "./Blogs.scss";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  //for author use author->{name, image or whatever you want to get}
  useEffect(() => {
    const query = `*[_type == 'post'] {
      ...,
      categories[]-> ,
      author->{name, image}
      }
      `;
    client.fetch(query).then((data) => {
      setBlogs(data);
    });
  }, []);

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
          <BlogCards blogs={blogs} />
        </div>
      </main>
    </div>
  );
};

export default AppWrap(Blogs, "blogs", "app__whitebg");
