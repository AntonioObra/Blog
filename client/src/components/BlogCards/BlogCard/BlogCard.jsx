import React from "react";
import "./BlogCard.scss";
import { urlFor } from "../../../client";
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };

  return (
    <div className="BlogCard">
      <div className="BlogCard-Content">
        <div className="BlogCard-Header ">
          <img src={urlFor(blog.author.image)} alt="" />
          <h5>{blog.author.name}</h5>
          <p> &#183; </p>
          <p id="BlogCard-Header-Date">{blog._createdAt}</p>
        </div>
        <div className="BlogCard-Main ">
          <div className="BlogCard-Main-Content">
            <Link to={`/blogs/${blog._id}`} style={{ textDecoration: "none" }}>
              <h3> {blog.title}</h3>
            </Link>

            <BlockContent
              serializers={serializers}
              blocks={blog.body[0]}
              dataset="production"
              projectId="f0c002ct"
            />
          </div>
        </div>
        <div className="BlogCard-Footer">
          <div className="BlogCard-Footer-Left">
            {" "}
            <button>{blog.categories[0].title}</button>
            <p>3 min read</p>
            <p> &#183; </p>
            <p>Selected for you</p>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="BlogCard-Image">
        <img src={urlFor(blog.mainImage)} alt="" />
      </div>
    </div>
  );
};

export default BlogCard;
