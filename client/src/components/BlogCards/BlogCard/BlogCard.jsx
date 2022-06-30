import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import "./BlogCard.scss";

const BlogCard = ({ blog }) => {
  return (
    <div className="BlogCard">
      <div className="BlogCard-Image">
        <img src={blog.featuredImage.url} alt="" />
      </div>

      <div className="BlogCard-Content">
        <div className="BlogCard-Content-Header">
          <p id="BlogCard-Header-Date">
            {moment(blog.createdAt).format("MMM DD, YYYY")}
          </p>
          <h3> {blog.title}</h3>
        </div>
        <div className="BlogCard-Content-Main">
          <p>{blog.excerpt}</p>
        </div>
        <Link
          to={`/blogs/${blog.slug}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <button>read more</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
