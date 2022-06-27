import React from "react";
import { Navbar } from "../../components";
import { SingleBlog, Footer } from "../../container";

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <SingleBlog />
      <Footer />
    </div>
  );
};

export default BlogPage;
