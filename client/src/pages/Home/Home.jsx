import React from "react";
import {
  Header,
  Blogs,
  About,
  Recommendations,
  FeaturedBlogs,
  Footer,
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
      <Footer />
    </div>
  );
};

export default Home;
