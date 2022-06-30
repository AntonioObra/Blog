import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../services";
import { BlogWidget, SingleBlogCard } from "../../components";

import "./SingleBlog.scss";

const SingleBlog = () => {
  const [blog, setBlog] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getPostDetails(id).then((post) => setBlog(post));
  }, [id]);

  //fix for react-router-dom to scroll to the top of the page when loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {blog.categories ? (
        <div className="SingleBlog">
          <div className="SingleBlog-main">
            <div className="SingleBlog-content">
              <SingleBlogCard blog={blog} />
            </div>
            <div className="SingleBlog-aside">
              <BlogWidget
                slug={blog.slug}
                categories={blog.categories.map((category) => category.slug)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="SingleBlog"></div>
      )}
    </>
  );
};

export default SingleBlog;
