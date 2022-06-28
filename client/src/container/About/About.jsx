import React from "react";
import "./About.scss";
import { images } from "../../constants";

const About = () => {
  return (
    <div className="app__about app">
      <div className="app__about-content">
        <div className="app__about-img">
          <img src={images.aboutImage} alt="" />
        </div>
        <div className="app__about-info">
          <h1>about me</h1>
          <p>
            hi. my name is antonio and welcome to my blog. <br /> here i'll
            document my journey from becoming an aspiring web developer hobbyist
            to landing my first job, as well as post weekly reviews of books,
            movies and videogames that i find interesting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
