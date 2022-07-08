import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className=" app__navbar">
      <div className="nav">
        <div className="app__navbar-logo">
          <h3>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              blog.obradovic
            </Link>
          </h3>
        </div>
        <ul className="app__navbar-links">
          <li className="app__flex">
            <Link to="/new here?">new here?</Link>
          </li>
          <li className="app__flex">
            <Link to="/books">books</Link>
          </li>
          <li className="app__flex">
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
