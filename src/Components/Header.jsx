import React from "react";
import "../Style/Header.css";
import headerimg from "../img/tree.png";

function Header() {
  return (
    <div>
      <div className="container-gen">
        <div className="container">
          <div className="title-head">
            <h1>Buna ziua asdad</h1>
            <h3>Buna ziua ce faceti azi</h3>
          </div>
          <div className="content-tree">
            <img className="image" src={headerimg} alt="tree image" />
            <svg
              className="circle"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M76.5,59.5Q77,69,69.5,78Q62,87,49.5,88.5Q37,90,23.5,84.5Q10,79,14,64.5Q18,50,14.5,36Q11,22,23,13.5Q35,5,47.5,12Q60,19,74,20.5Q88,22,82,36Q76,50,76.5,59.5Z"
                stroke="none"
                fill="#DDA15E"
              ></path>
              <path
                d="M76.5,59.5Q77,69,69.5,78Q62,87,49.5,88.5Q37,90,23.5,84.5Q10,79,14,64.5Q18,50,14.5,36Q11,22,23,13.5Q35,5,47.5,12Q60,19,74,20.5Q88,22,82,36Q76,50,76.5,59.5Z"
                transform="translate(-3.03 -0.69)"
                stroke="#BC6C25"
                stroke-width="1"
                fill="none"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
