import React from "react";
import BlogCard from "./BlogCard/BlogCard";

const BlogCards = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog, index) => (
        <BlogCard blog={blog.node} key={index} />
      ))}
    </>
  );
};

export default BlogCards;
