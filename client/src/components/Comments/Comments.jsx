import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";
import "./Comment.scss";
import { getComments } from "../../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);
  return (
    <>
      {comments.length > 0 && (
        <div className="Comments">
          <h3>Comments</h3>
          {comments.map((comment, index) => (
            <div key={index} className=" Comments-content">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
