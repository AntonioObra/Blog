import React from "react";
import "./BlogCard.scss";
import { images } from "../../../constants";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoBookSharp } from "react-icons/io5";
import { urlFor } from "../../../client";
import BlockContent from "@sanity/block-content-to-react";

const BlogCard = ({ blog }) => {
  console.log(blog);

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
          <img src={images.testAvatar} alt="" />
          <h5>Antonio Obradović</h5>
          <p> &#183; </p>
          <p id="BlogCard-Header-Date">{blog._createdAt}</p>
        </div>
        <div className="BlogCard-Main ">
          <div className="BlogCard-Main-Content">
            <h3>{blog.title}</h3>

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
            <button>Portfolio</button>
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
