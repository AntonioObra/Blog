import React from "react";
import "./Footer.scss";
import { images } from "../../constants";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-img">
        <img src={images.waves2} alt="" />
      </div>
      <div className="Footer-content">here goes footer</div>
    </div>
  );
};

export default Footer;
