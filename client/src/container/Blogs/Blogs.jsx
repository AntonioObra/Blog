import React from "react";
import { AppWrap } from "../../wrapper";
import { BlogCards } from "../../components";
import "./Blogs.scss";

const Blogs = () => {
  return (
    <div className="app__flex app__blogs">
      <main className="app__blogs-main">
        <BlogCards />
      </main>

      <aside className="app__blogs-aside">asdf</aside>
    </div>
  );
};

export default AppWrap(Blogs, "blogs", "app__whitebg");
