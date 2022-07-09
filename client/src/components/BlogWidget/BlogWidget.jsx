import React, { useState, useEffect } from "react";
import "./BlogWidget.scss";
import { getRecentPosts, getSimilarPosts } from "../../services";
import { FeaturedCard } from "../../components";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import moment from "moment";

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
      <div className="app__blogs-main-aside-categories">
        <h5> related posts</h5>
        <ul>
          {relatedBlogs.map((blog, index) => (
            <Link
              to={`/blogs/${blog.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li className="Aside-Tags-Filter" key={index}>
                <p>{moment(blog.createdAt).format(" MMM DD, YYYY")}</p>

                {blog.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogWidget;
