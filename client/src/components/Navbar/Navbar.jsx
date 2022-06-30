import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className=" app__navbar">
      <div className="nav">
        <div className="app__navbar-logo">
          <Link to="/">
            {" "}
            <h3>blog.obradovic</h3>
          </Link>
        </div>
        <ul className="app__navbar-links">
          {["archives", "about"].map((item, index) => (
            <li className="app__flex" key={index}>
              <Link to={`/${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
