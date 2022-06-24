import React from "react";
import { Header, Blogs, About, Recommendations } from "../../container";
import { Navbar } from "../../components";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Header />

      <Blogs />
      <Recommendations />
      <About />
    </div>
  );
};

export default Home;
