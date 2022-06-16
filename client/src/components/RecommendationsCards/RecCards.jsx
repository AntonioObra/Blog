import React from "react";
import RecCard from "./RecCard/RecCard";

const RecCards = ({ books }) => {
  return (
    <>
      {books.map((book, index) => (
        <RecCard book={book} key={index} />
      ))}
    </>
  );
};

export default RecCards;
