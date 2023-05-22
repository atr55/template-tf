import React from "react";
import "../Style/Header.css";
import headerimg from "../img/tree.png";

function Header() {
  return (
    <div>
      <div className="container-gen">
        <div className="container">
          <div className="title-head">
            <h1>Evergreen Gardens</h1>
            <div className="description">
              <p>
                Creating Serene Spaces with Exquisite Indoor and Outdoor Plants.
                Discover a world of botanical wonders, where we bring the beauty
                of nature into your home and garden.
              </p>
            </div>
            <button className="btn-despre" type="button">
              ABOUT
            </button>
          </div>
          <div className="content-tree">
            <img className="image" src={headerimg} alt="tree image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
