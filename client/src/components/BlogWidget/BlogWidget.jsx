import React, { useState, useEffect } from "react";
import "./BlogWidget.scss";
import moment from "moment";
import { Link } from "react-router-dom";
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

  console.log(relatedBlogs);

  return (
    <div className="BlogWidget">
      <h2>{/* love what you read? <br /> here are some more!{" "} */}</h2>

      <div className="BlogWidget-Blogs">
        {/* <div className="BlogWidget-Blogs-content"> */}
        {relatedBlogs.map((blog, index) => (
          <FeaturedCard blog={blog} key={index} />
        ))}
        {/* </div> */}
        {/* <div className="BlogWidget-Blogs-image">
          {" "}
          <img src={images.convo} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default BlogWidget;
