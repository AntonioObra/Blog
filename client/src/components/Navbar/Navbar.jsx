import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { getCategories } from "../../services";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
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
          {categories.map((item, index) => (
            <li className="app__flex" key={index}>
              <Link to={item.slug}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
