import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { getFeaturedPosts, getNewHerePost } from "../../services";
import { FeaturedCards, BlogCard } from "../../components";

import "./FeaturedBlogs.scss";

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

  return (
    <div className="FeaturedBlogs">
      <div className="FeaturedBlogs-content">
        <FeaturedCards blogs={featuredBlogs} />
      </div>
    </div>
  );
};

export default FeaturedBlogs;
