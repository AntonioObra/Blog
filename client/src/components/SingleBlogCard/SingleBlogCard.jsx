import React from "react";
import "./SingleBlogCard.scss";
import moment from "moment";

import { Link } from "react-router-dom";

const SingleBlogCard = ({ blog }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div className="SingleBlogCard">
      <div className="SingleBlogCard-Content">
        <div className="SingleBlogCard-Main ">
          <div className="SingleBlogCard-Main-Content">
            <Link to={`/blogs/${blog._id}`} style={{ textDecoration: "none" }}>
              <h3> {blog.title}</h3>
            </Link>
          </div>
        </div>
        <div className="SingleBlogCard-Header ">
          <p id="SingleBlogCard-Header-Date">
            {moment(blog.createdAt).format("MMM DD, YYYY")}
          </p>
        </div>

        <div className="SingleBlogCard-Image">
          <img src={blog.featuredImage.url} alt="" />
        </div>

        <div className="SingleBlogCard-Excerpt">
          {blog.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>

        {/* <div className="SingleBlogCard-Button">
          <Link to={`/blogs/${blog.slug}`} style={{ textDecoration: "none" }}>
            <span>read more</span>
          </Link>
        </div> */}

        <div className="SingleBlogCard-Footer">
          {/* {blog.categories.map((category, index) => (
        <button key={index}>{category.name}</button>
      ))}
      <p>3 min read</p>
      <p> &#183; </p>
      <p>Selected for you</p> */}
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;
