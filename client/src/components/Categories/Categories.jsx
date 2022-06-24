import React, { useState, useEffect } from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
import { getCategories } from "../../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="Categories">
      <h2>Categories</h2>
      <div className="Categories-content">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/categoriy/${category.slug}`}
            style={{ textDecoration: "none", padding: "0.3rem 0" }}
          >
            <span>{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
