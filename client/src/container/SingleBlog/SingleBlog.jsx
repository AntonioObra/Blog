import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./SingleBlog.scss";

const SingleBlog = () => {
  const [blog, setBlog] = useState([]);

  const { id } = useParams();

  useEffect(() => {}, []);

  console.log(blog);
  console.log(id);
  return (
    <>
      {blog.length > 0 ? (
        <div className="SingleBlog">
          <div className="SingleBlog-header">
            <h1>{blog[0].title}</h1>
            <h5>{blog[0].slug.current}</h5>
          </div>
          <div className="SingleBlog-content"></div>
        </div>
      ) : (
        <div className="SingleBlog"></div>
      )}
    </>
  );
};

export default SingleBlog;
