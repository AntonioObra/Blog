import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" app__navbar">
      <div className="nav">
        {/* <div className="app__navbar-logo"></div> */}
        <ul className="app__navbar-links">
          {[
            { name: "home", link: "/" },
            { name: "blog", link: "/blog" },
            { name: "books", link: "/books" },
            { name: "videogames", link: "/videogames" },
            { name: "movies", link: "/movies" },
          ].map((item) => (
            <li className="app__flex" key={`link-${item.name}`}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
