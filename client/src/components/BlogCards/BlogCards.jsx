import React from "react";
import BlogCard from "./BlogCard/BlogCard";

const BlogCards = ({ blogs, node }) => {
  return (
    <>
      {!node ? (
        <>
          {blogs.map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </>
      ) : (
        <>
          {" "}
          {blogs.map((blog, index) => (
            <BlogCard blog={blog.node} key={index} />
          ))}
        </>
      )}
    </>
  );
};

export default BlogCards;
