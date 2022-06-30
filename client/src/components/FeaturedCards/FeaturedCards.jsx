import React from "react";
import FeaturedCard from "./FeaturedCard/FeaturedCard";
import BlogCard from "../BlogCards/BlogCard/BlogCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1700 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1700, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 0 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const FeaturedCards = ({ blogs }) => {
  // console.log("resi");
  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <Carousel
        responsive={responsive}
        infinite={true}
        transitionDuration={500}
        centerMode={false}
        // itemClass="px-4 mx-20"
        partialVisbile={false}
      >
        {blogs.map((blog, index) => (
          <FeaturedCard key={index} blog={blog} style={{ width: "40%" }} />
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedCards;
