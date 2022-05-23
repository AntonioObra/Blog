import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app">
      <div className="app__header-content">
        <div className="app__header-img">
          <img src={images.logo} alt="" />
        </div>

        <div className="app__header-info">
          <h1>blog.obradovic</h1>
          <p>just my thoughts</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
