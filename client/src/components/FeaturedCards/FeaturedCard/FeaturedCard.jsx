import React from "react";
import "./FeaturedCard.scss";
import moment from "moment";

const FeaturedCard = ({ blog }) => {
  console.log(blog);
  return (
    <div
      className="FeaturedCard"
      style={{ backgroundImage: `url(${blog.featuredImage.url})` }}
    >
      <div className="FeaturedCard-content">
        <h3>{blog.title}</h3>
        <p>{moment(blog.createdAt).format(" MMM DD, YYYY")}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
