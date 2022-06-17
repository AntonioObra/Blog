import React from "react";
import RecCard from "./RecCard/RecCard";

const RecCards = ({ recs }) => {
  return (
    <>
      {recs.map((rec, index) => (
        <RecCard rec={rec} key={index} />
      ))}
    </>
  );
};

export default RecCards;
