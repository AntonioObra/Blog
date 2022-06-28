import React, { useState, useEffect } from "react";
import "./Archives.scss";
import { images } from "../../constants";
import { BlogCards } from "../../components";
import { getPosts, getCategories } from "../../services";
import { motion } from "framer-motion";

const Archives = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterBlogs, setFilterBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchBlogs, setSearchBlogs] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    async function fetchBlogs() {
      const posts = await getPosts();
      setBlogs(posts);
    }

    async function fetchCategories() {
      const categories = await getCategories();
      setCategories(categories);
    }

    fetchCategories();
    fetchBlogs();
  }, []);

  useEffect(() => {
    setFilterBlogs(blogs);
  }, [blogs]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (searchInput !== "" && activeFilter === "All") {
      const filteredData = blogs.filter((blog) => {
        return Object.values(blog.node)
          .join("")
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      });
      setSearchBlogs(filteredData);
    } else if (searchInput !== "") {
      const filteredData = filterBlogs.filter((blog) => {
        return Object.values(blog.node)
          .join("")
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      });
      setSearchBlogs(filteredData);
    } else {
      setSearchBlogs(blogs);
    }
  };

  const handleTagFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterBlogs(blogs);
      } else {
        setFilterBlogs(
          blogs.filter((blog) => blog.node.categories[0].name === item)
        );
      }
    }, 500);
  };

  return (
    <div className="Archives">
      <div className="Archives-Header">
        <div className="Archives-Header-Info">
          <h1>archives</h1>
          <p>here you can find every blog posted to this page</p>
        </div>
        <div className="Archives-Header-img">
          <img src={images.archives} alt="" />
        </div>
      </div>

      <div className="app__header-waves">
        <img src={images.waves1} alt="" />
      </div>

      <div className="Archives-Main">
        <div className="Archives-Main-Header">
          <input
            type="text"
            placeholder="Search for a blog..."
            onChange={handleChange}
          />
          <div className="Archives-Main-Header-Categories">
            <div
              className={`Archives-Main-Header-Categories-item ${
                activeFilter === "All" ? "item-active" : ""
              }`}
              onClick={() => handleTagFilter("All")}
            >
              All
            </div>
            {categories.map((category, index) => (
              <div
                className={`Archives-Main-Header-Categories-item ${
                  activeFilter === category.name ? "item-active" : ""
                }`}
                key={index}
                onClick={() => handleTagFilter(category.name)}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="Archives-Main-Content"
        >
          {searchInput === "" ? (
            <BlogCards blogs={filterBlogs} />
          ) : (
            <BlogCards blogs={searchBlogs} />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Archives;
