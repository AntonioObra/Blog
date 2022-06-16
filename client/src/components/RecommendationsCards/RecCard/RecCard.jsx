import React from "react";
import "./RecCard.scss";
import { images } from "../../../constants";
import { urlFor } from "../../../client";

const RecCard = ({ book }) => {
  console.log(book);
  return (
    <div className="RecCard">
      <div className={`RecCard-Header RecCard-Header-${book.color}`}>
        <img src={urlFor(book.imageurl)} alt="" />
      </div>
      <div className="RecCard-Body">
        <div className="RecCard-Body-content">
          <h4>{book.authorName}</h4>
          <h2>{book.bookTitle}</h2>
        </div>
      </div>
      <div className={`RecCard-Footer RecCard-Footer-${book.color}`}>
        <button>
          <p> read more</p>
        </button>
      </div>
    </div>
  );
};

export default RecCard;
