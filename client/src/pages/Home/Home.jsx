import React from "react";
import { Header, Blogs, About } from "../../container";
import { Navbar } from "../../components";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <About />
      <Blogs />
    </div>
  );
};

export default Home;
