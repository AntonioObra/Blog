import React from "react";
import "./Recommendations.scss";
import { images } from "../../constants";

const Recommendations = () => {
  return (
    <div className="app__recc app">
      <div className="app__recc-header">
        <div className="app__recc-header-img">
          <img src={images.trokut} alt="" />
        </div>

        <div className="app__recc-header-info">
          <h1>recommendations</h1>
          <p>
            here you can see the list of recommendations on books, movies and
            videogames i found enjoyable and worth my time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;