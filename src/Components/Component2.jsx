import React from "react";
import "../Style/Component2.css";
import Plant2 from "../img/plant2.png";

function Component2() {
  return (
    <div className="component2">
      <div className="component2-element">
        <div className="img">
          <div className="bg-plants"></div>
          <img className="image-plants" src={Plant2} alt="Plants" />
        </div>
        <div className="text">
          <div className="title">
            <h1>indoor and outdoor plants</h1>
            <h1> & </h1>
            <h1>green space care</h1>
          </div>
          <p className="information">
            Discover a wide range of indoor and outdoor plants, expertly curated
            for your space. We also provide comprehensive green space
            maintenance services to keep your outdoor areas vibrant and
            thriving.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Component2;
