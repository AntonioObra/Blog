import React from "react";
import {
  Header,
  Blogs,
  About,
  Recommendations,
  FeaturedBlogs,
} from "../../container";
import { Navbar } from "../../components";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <FeaturedBlogs />

      <Blogs />
      {/* <Recommendations />
      <About /> */}
    </div>
  );
};

export default Home;
