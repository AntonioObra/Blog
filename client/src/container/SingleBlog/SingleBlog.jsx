import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { urlFor, client } from "../../client";
import BlockContent from "@sanity/block-content-to-react";

import "./SingleBlog.scss";

const SingleBlog = () => {
  const [blog, setBlog] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const query = `*[_type == 'post' && _id == '${id}'] {
      ...,
      categories[]-> ,
      author->{name, image}
      }`;
    client.fetch(query).then((data) => {
      setBlog(data);
    });
  }, []);

  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };
  console.log(blog);
  console.log(id);
  return (
    <>
      {blog.length > 0 ? (
        <div className="SingleBlog">
          <div className="SingleBlog-header">
            <h1>{blog[0].title}</h1>
          </div>
          <div className="SingleBlog-content">
            <BlockContent
              serializers={serializers}
              blocks={blog[0].body}
              dataset="production"
              projectId="f0c002ct"
            />
          </div>
        </div>
      ) : (
        <div className="SingleBlog"></div>
      )}
    </>
  );
};

export default SingleBlog;
