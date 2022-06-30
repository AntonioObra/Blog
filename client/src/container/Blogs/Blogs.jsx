import React, { useState, useEffect } from "react";
import { AppWrap } from "../../wrapper";
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

  console.log(blogs);

  return (
    <div className=" app__blogs">
      {/* <h1>blogs</h1> */}
      <main className="app__blogs-main">
        <div className="app__blogs-main-blogs">
          <BlogCards blogs={blogs} node={false} />
        </div>
      </main>
    </div>
  );
};

export default AppWrap(Blogs, "blogs", "app__whitebg");
