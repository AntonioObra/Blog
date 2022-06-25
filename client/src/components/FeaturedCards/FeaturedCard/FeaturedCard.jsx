import React from "react";
import "./FeaturedCard.scss";
import moment from "moment";
import { Link } from "react-router-dom";

const FeaturedCard = ({ blog }) => {
  return (
    <div
      className="FeaturedCard"
      style={{ backgroundImage: `url(${blog.featuredImage.url})` }}
    >
      <Link to={`/blogs/${blog.slug}`} style={{ textDecoration: "none" }}>
        <div className="FeaturedCard-content">
          <h3>{blog.title}</h3>
          <p>{moment(blog.createdAt).format(" MMM DD, YYYY")}</p>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedCard;
