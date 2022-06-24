import React from "react";
import "./RecCard.scss";

const RecCard = ({ rec }) => {
  return (
    <div className="RecCard">
      <div className={`RecCard-Header RecCard-Header-${rec.color}`}>
        {/* <img src={urlFor(rec.imageurl)} alt="" /> */}
      </div>
      <div className="RecCard-Body">
        <div className="RecCard-Body-content">
          <h4>{rec.authorName}</h4>
          <h2>{rec.Title}</h2>
        </div>
      </div>
      <div className={`RecCard-Footer RecCard-Footer-${rec.color}`}>
        <button>
          <p> read more</p>
        </button>
      </div>
    </div>
  );
};

export default RecCard;
