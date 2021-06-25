import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <div className="moviename">Breaking Bad</div>
        <div className="buttons">
          <button className="button">Play</button>
          <button className="button">Add to List</button>
        </div>
        <h1 className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </h1>
      </div>
      <div className="shade"></div>
    </div>
  );
}

export default Banner;
