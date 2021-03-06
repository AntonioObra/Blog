import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import "./FeaturedCard.scss";

const FeaturedCard = ({ blog }) => {
  return (
    <div className="FeaturedCard">
      {/* <div className="FeaturedCard-image">
        <img src={blog.featuredImage.url} alt="" />
      </div> */}

      <div className="FeaturedCard-content">
        <div className="FeaturedCard-content-info">
          <p>{moment(blog.createdAt).format(" MMM DD, YYYY")}</p>
          <Link
            to={`/blogs/${blog.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3>{blog.title}</h3>
          </Link>
        </div>

        {/* <div className="FeaturedCard-content-button">
          <Link
            to={`/blogs/${blog.slug}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button>read more</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedCard;
