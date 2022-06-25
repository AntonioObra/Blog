import React from "react";
import FeaturedCard from "./FeaturedCard/FeaturedCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedCards = ({ blogs }) => {
  console.log("resi");
  return (
    <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    >
      <Carousel
        responsive={responsive}
        infinite={true}
        transitionDuration={500}
      >
        {blogs.map((blog, index) => (
          <FeaturedCard key={index} blog={blog} />
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedCards;
