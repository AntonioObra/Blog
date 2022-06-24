import React, { useState, useEffect } from "react";
import "./BlogWidget.scss";
import moment from "moment";
import { Link } from "react-router-dom";
import { getRecentPosts, getSimilarPosts } from "../../services";

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

  console.log(relatedBlogs);
  return (
    <div className="BlogWidget">
      <h2>{slug ? "Related Blogs" : "Recent Blogs"}</h2>

      <div className="BlogWidget-Blogs">
        {relatedBlogs.map((blog, index) => (
          <div key={index} className="BlogWidget-content">
            <div>
              <img
                src={blog.featuredImage.url}
                alt={blog.title}
                height="60px"
                width="60px"
              />
            </div>

            <div className="BlogWidget-content-info">
              <h5>{blog.title}</h5>
              <p>{moment(blog.createdAt).format("DD MMM, YYYY")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogWidget;
