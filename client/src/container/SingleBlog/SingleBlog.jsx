import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPosts, getPostDetails } from "../../services";
import {
  BlogWidget,
  SingleBlogCard,
  CommentForm,
  Comments,
} from "../../components";

import "./SingleBlog.scss";

const SingleBlog = () => {
  const [blog, setBlog] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getPostDetails(id).then((post) => setBlog(post));
    getPosts().then((posts) => setRelatedBlogs(posts));
  }, [id]);

  return (
    <>
      {blog.categories ? (
        <div className="SingleBlog">
          <div className="SingleBlog-main">
            <div className="SingleBlog-content">
              {" "}
              <SingleBlogCard blog={blog} />
              <CommentForm slug={blog.slug} />
              <Comments slug={blog.slug} />
            </div>
            <div className="SingleBlog-aside">
              <BlogWidget
                slug={blog.slug}
                categories={blog.categories.map((category) => category.slug)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="SingleBlog"></div>
      )}
    </>
  );
};

export default SingleBlog;
