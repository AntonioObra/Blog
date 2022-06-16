import React from "react";
import "./RecCard.scss";
import { images } from "../../../constants";

const RecCard = () => {
  return (
    <div className="RecCard">
      <div className="RecCard-Header">
        <img src={images.witcherBook} alt="" />
      </div>
      <div className="RecCard-Body">
        <div className="RecCard-Body-content">
          <h4>Andrzej Sapkowski</h4>
          <h2>The Witcher: The lady of the lake</h2>
        </div>
      </div>
      <div className="RecCard-Footer">
        <button>
          <p> read more</p>
        </button>
      </div>
    </div>
  );
};

export default RecCard;
