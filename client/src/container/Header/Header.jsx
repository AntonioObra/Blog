import React from "react";
import { images } from "../../constants";

import "./Header.scss";

const Header = () => {
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
        <p>
          “You could leave life right now. Let that determine what you do and
          say and think.” <span>– Marcus Aurelius</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
