import React, { useState, useEffect } from "react";
import "./BlogWidget.scss";
import { getRecentPosts, getSimilarPosts } from "../../services";
import { FeaturedCard } from "../../components";
import { images } from "../../constants";

const BlogWidget = ({ categories, slug }) => {
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedBlogs(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedBlogs(result));
    }
  }, [slug]);

  return (
    <div className="BlogWidget">
      <div className="BlogWidget-header">
        <h2>
          finished reading? <br /> here are more blogs
        </h2>

        <div className="BlogWidget-Blogs-image">
          {" "}
          <img src={images.convo} alt="" />
        </div>
      </div>

      <div className="BlogWidget-Blogs">
        {relatedBlogs.map((blog, index) => (
          <FeaturedCard blog={blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogWidget;
