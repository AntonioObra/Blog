import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./FeaturedBlogs.scss";
import { getFeaturedPosts, getNewHerePost } from "../../services";
import { FeaturedCards, BlogCard } from "../../components";
// import { BlogCard } from "../../components/BlogCards/BlogCard/BlogCard";

const FeaturedBlogs = () => {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [newHereBlog, setNewHereBlog] = useState([]);

  useEffect(() => {
    async function fetchFeauteredBlogs() {
      const posts = await getFeaturedPosts();
      setFeaturedBlogs(posts);
    }

    async function fetchNewHereBlog() {
      const posts = await getNewHerePost();
      setNewHereBlog(posts);
    }

    fetchFeauteredBlogs();
    fetchNewHereBlog();
  }, []);

  console.log(newHereBlog);
  return (
    <div className="FeaturedBlogs">
      <div className="FeaturedBlogs-header">
        {" "}
        <div className="FeaturedBlogs-img">
          <img src={images.featuredImage} alt="" />
        </div>
        <div className="FeaturedBlogs-headline">
          <h1>
            new to the blog? <br /> start here
          </h1>
        </div>
      </div>

      <div className="FeaturedBlogs-newHere">
        {newHereBlog.length > 0 && <BlogCard blog={newHereBlog[0]} />}
      </div>

      <div className="FeaturedBlogs-content">
        <h1>featured blogs</h1>
        <FeaturedCards blogs={featuredBlogs} />
      </div>
    </div>
  );
};

export default FeaturedBlogs;
