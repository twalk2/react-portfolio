import React from "react";
import profilePicture from "../../../static/assets/images/bio/IMG_1360.jpg";

const AboutComponent = () => {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-side"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-side">
        Hey there! Glad to see you made it. Let me tell you a little about
        myself!
      </div>
    </div>
  );
};

export default AboutComponent;
