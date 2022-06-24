import React, { useState, useEffect } from "react";
import { AppWrap } from "../../wrapper";
import { BlogCards, BlogWidget, Categories } from "../../components";
import { getPosts } from "../../services";

import "./Blogs.scss";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterBlogs, setFilterBlogs] = useState([]);

  console.log(filterBlogs);

  //for author use author->{name, image or whatever you want to get}
  useEffect(() => {
    async function fetchBlogs() {
      const posts = await getPosts();
      setBlogs(posts);
    }

    fetchBlogs();
  }, []);

  console.log(blogs);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (searchInput !== "") {
      const filteredData = blogs.filter((blog) => {
        return Object.values(blog)
          .join("")
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      });
      setFilterBlogs(filteredData);
    } else {
      setFilterBlogs(blogs);
    }
  };

  return (
    <div className=" app__blogs">
      {/* <h1>blogs</h1> */}

      <input type="text" placeholder="Search" onChange={handleChange} />

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
          {searchInput !== "" ? (
            <>
              {filterBlogs.length > 0 ? (
                <BlogCards blogs={filterBlogs} />
              ) : (
                <h3 id="ups">Ops! Try searching for something else...</h3>
              )}
            </>
          ) : (
            <BlogCards blogs={blogs} />
          )}
        </div>
        <div className="app__blogs-main-aside">
          <BlogWidget />
          <Categories />
        </div>
      </main>
    </div>
  );
};

export default AppWrap(Blogs, "blogs", "app__whitebg");
