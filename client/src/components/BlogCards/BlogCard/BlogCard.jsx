import React from "react";
import "./BlogCard.scss";
import moment from "moment";

import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="BlogCard">
      <div className="BlogCard-Image">
        <img src={blog.featuredImage.url} alt="" />
      </div>
      <div className="BlogCard-Content">
        <div className="BlogCard-Main ">
          <div className="BlogCard-Main-Content">
            <Link to={`/blogs/${blog._id}`} style={{ textDecoration: "none" }}>
              <h3> {blog.title}</h3>
            </Link>
          </div>
        </div>
        <div className="BlogCard-Header ">
          <img src={blog.author.photo.url} alt="" />
          <h5>{blog.author.name}</h5>
          <p> &#183; </p>
          <p id="BlogCard-Header-Date">
            {moment(blog.createdAt).format("MMM DD, YYYY")}
          </p>
        </div>

        <div className="BlogCard-Excerpt">
          <p>{blog.excerpt}</p>
        </div>

        <div className="BlogCard-Button">
          <Link to={`/blogs/${blog.slug}`} style={{ textDecoration: "none" }}>
            <span>read more</span>
          </Link>
        </div>

        <div className="BlogCard-Footer">
          {/* {blog.categories.map((category, index) => (
            <button key={index}>{category.name}</button>
          ))}
          <p>3 min read</p>
          <p> &#183; </p>
          <p>Selected for you</p> */}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
