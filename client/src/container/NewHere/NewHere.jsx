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
          <h1>new here?</h1>
          <p>
            hi. my name is antonio and welcome to my blog. <br /> here i'll
            document my journey from becoming an aspiring web developer hobbyist
            to landing my first job, as well as post weekly reviews of books,
            movies and videogames that i find interesting.
          </p>
        </div>
      </div>

      <div className="app__newHere-main">
        {newHereBlog.length > 0 && <BlogCard blog={newHereBlog[0]} />}
      </div>
    </div>
  );
};

export default NewHere;
