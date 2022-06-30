import React, { useEffect } from "react";
import { Navbar } from "../../components";
import { SingleBlog, Footer } from "../../container";

const BlogPage = () => {
  //fix for react-router-dom to scroll to the top of the page when loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <SingleBlog />
      <Footer />
    </div>
  );
};

export default BlogPage;
