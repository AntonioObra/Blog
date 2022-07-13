import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { getNewHerePost } from "../../services";
import { BlogCard } from "../../components";

import "./NewHere.scss";

const NewHere = () => {
  const [newHereBlog, setNewHereBlog] = useState([]);

  useEffect(() => {
    async function fetchNewHereBlog() {
      const posts = await getNewHerePost();
      setNewHereBlog(posts);
    }

    fetchNewHereBlog();
  }, []);

  return (
    <div className="app__newHere app">
      <div className="app__newHere-content">
        <div className="app__newHere-img">
          <img src={images.newHere} alt="" />
        </div>
        <div className="app__newHere-info">
          <h1>new to the blog?</h1>
          <h1>start here</h1>
        </div>
      </div>

      <div className="app__newHere-main">
        {newHereBlog.length > 0 && <BlogCard blog={newHereBlog[0]} />}
      </div>
    </div>
  );
};

export default NewHere;
