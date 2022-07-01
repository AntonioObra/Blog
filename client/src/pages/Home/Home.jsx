import React from "react";
import { Header, Blogs, FeaturedBlogs, Footer } from "../../container";
import { Navbar } from "../../components";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <FeaturedBlogs />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
