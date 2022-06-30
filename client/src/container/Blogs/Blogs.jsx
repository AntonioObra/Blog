import React, { useState, useEffect } from "react";
import { BlogCards } from "../../components";
import { getRecentPosts } from "../../services";

import "./Blogs.scss";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const posts = await getRecentPosts();
      setBlogs(posts);
    }

    fetchBlogs();
  }, []);

  return (
    <div className=" app__blogs">
      <h1>recent blogs</h1>
      <main className="app__blogs-main">
        <div className="app__blogs-main-blogs">
          <BlogCards blogs={blogs} node={false} />
        </div>
      </main>
    </div>
  );
};

export default Blogs;
