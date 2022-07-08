import React, { useState, useEffect } from "react";
import { BlogCards, FeaturedCards } from "../../components";
import {
  getFeaturedPosts,
  getRecentPosts,
  getCategories,
} from "../../services";
import moment from "moment";
import { Link } from "react-router-dom";

import "./Blogs.scss";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    async function fetchBlogs() {
      const posts = await getRecentPosts();
      setBlogs(posts);
    }
    async function fetchFeauteredBlogs() {
      const posts = await getFeaturedPosts();
      setFeaturedBlogs(posts);
    }

    async function fetchCategories() {
      const categories = await getCategories();
      setCategories(categories);
    }

    fetchCategories();

    fetchFeauteredBlogs();

    fetchBlogs();
  }, []);

  console.log(featuredBlogs);

  // const handleTagFilter = (item) => {
  //   setActiveFilter(item);
  //   setAnimateCard([{ y: 100, opacity: 0 }]);
  //   setTimeout(() => {
  //     setAnimateCard([{ y: 0, opacity: 1 }]);

  //     if (item === "All") {
  //       setFilterBlogs(blogs);
  //     } else {
  //       setFilterBlogs(
  //         blogs.filter((blog) => blog.node.categories[0].name === item)
  //       );
  //     }
  //   }, 500);
  // };

  return (
    <div className=" app__blogs">
      <main className="app__blogs-main">
        <div className="app__blogs-main-blogs">
          <BlogCards blogs={blogs} node={false} />
        </div>
        <div className="app__blogs-main-aside">
          <div className="app__blogs-main-aside-categories">
            <h5> featured posts</h5>
            <ul>
              {featuredBlogs.map((blog, index) => (
                <Link
                  to={`/blogs/${blog.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <li className="Aside-Tags-Filter" key={index}>
                    <p>{moment(blog.createdAt).format(" MMM DD, YYYY")}</p>

                    {blog.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* <FeaturedCards blogs={featuredBlogs} /> */}

          <div className="app__blogs-main-aside-categories">
            <h5>topics</h5>
            <ul>
              {categories.map((category, index) => (
                <li className="Aside-Tags-Filter" key={index}>
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blogs;
