import React from "react";
import { Header, Blogs, About, Recommendations } from "../../container";
import { Navbar } from "../../components";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <About />
      <Blogs />
      <Recommendations />
    </div>
  );
};

export default Home;
