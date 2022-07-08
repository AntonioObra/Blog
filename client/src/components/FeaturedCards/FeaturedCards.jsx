import React from "react";
import FeaturedCard from "./FeaturedCard/FeaturedCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FeaturedCards = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog, index) => (
        <FeaturedCard key={index} blog={blog} />
      ))}
    </>
  );
};

export default FeaturedCards;
