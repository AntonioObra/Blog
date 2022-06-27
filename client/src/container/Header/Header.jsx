import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.scss";
import { getFeaturedPosts } from "../../services";
import { FeaturedCards } from "../../components";

const Header = () => {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);

  useEffect(() => {
    async function fetchFeauteredBlogs() {
      const posts = await getFeaturedPosts();
      setFeaturedBlogs(posts);
    }

    fetchFeauteredBlogs();
  }, []);
  return (
    <div className="app__header app">
      <div className="app__header-content">
        <div className="app__header-info">
          <h1>blog.obradovic</h1>
          <p>just my thoughts</p>
        </div>
        <div className="app__header-img">
          <img src={images.logo3} alt="" />
        </div>
      </div>
      <div className="app__header-waves">
        <img src={images.waves1} alt="" />
      </div>
      {/* <div className="app__header-featuredCards">
        <FeaturedCards blogs={featuredBlogs} />
      </div> */}
    </div>
  );
};

export default Header;
