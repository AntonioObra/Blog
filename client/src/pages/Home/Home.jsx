import React from "react";
import { Header, Blogs } from "../../container";
import { Navbar } from "../../components";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <Blogs />
    </div>
  );
};

export default Home;
