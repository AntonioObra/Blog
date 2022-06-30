//not currently implemented

import React, { useState, useRef } from "react";
import "./CommentForm.scss";
import { submitComment } from "../../services";

const CommentForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmit = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };
  return (
    <div className="CommentForm">
      <h3>Leave a Comment</h3>
      <div className="CommentForm-Form">
        <div className="CommentForm-Form-textarea">
          <textarea
            ref={commentEl}
            className=""
            placeholder="Comment"
            name="comment"
          />
        </div>
        <div className="CommentForm-Form-input">
          <input
            type="text"
            ref={nameEl}
            className=""
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            ref={emailEl}
            className=""
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="CommentForm-Form-checkbox">
          <input
            type="checkbox"
            id="storeData"
            name="storeData"
            value={true}
            ref={storeDataEl}
          />
          <label htmlFor="storeData">
            Save my e-mail and name for the next time I comment
          </label>
        </div>
        {error && (
          <p className="text-xs text-red-500">All fields are required.</p>
        )}
        <div className="CommentForm-Form-button ">
          <button type="button" onClick={handleCommentSubmit}>
            Post Comment
          </button>
          {showSuccessMessage && (
            <span className="text-xl float-right font-semibold mt-3 text-green-500">
              Comment submitted for review
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
