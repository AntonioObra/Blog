import React, { useState, useEffect } from "react";
import "./Recommendations.scss";
import { images } from "../../constants";
import { RecCards } from "../../components";

const Recommendations = () => {
  const [recs, setRecs] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Books");
  const [filterRecs, setFilterRecs] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    setFilterRecs(recs.filter((rec) => rec.type.includes("Books")));
  }, [recs]);

  const handleTagFilter = (item) => {
    setActiveFilter(item);

    setFilterRecs(recs.filter((rec) => rec.type.includes(item)));
  };

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
      <div className="app__recc-body-filters">
        {["Books", "Videogames", "Movies"].map((item, index) => (
          <div key={index} onClick={() => handleTagFilter(item)}>
            <p> {item}</p>
          </div>
        ))}
      </div>
      <div className="app__recc-body">
        <RecCards recs={filterRecs} />
      </div>
    </div>
  );
};

export default Recommendations;
