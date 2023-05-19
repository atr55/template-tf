import React from "react";
import "../Style/Header.css";
import headerimg from "../img/tree.png";

function Header() {
  return (
    <div className="container">
      <img className="image" src={headerimg} alt="tree image" />
      <div className="circle"></div>
    </div>
  );
}

export default Header;
