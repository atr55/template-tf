import React, { useEffect, useState } from "react";
import "../Style/Header.css";
import headerimg from "../img/tree.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigatecontact = useNavigate();
  const routeChangeContact = () => {
    const path = "contact";
    navigatecontact(path);
  };

  const navigateabout = useNavigate();
  const routeChangeAbout = () => {
    const path = "about";
    navigateabout(path);
  };

  return (
    <div>
      <div className="container-gen">
        <div className="container">
          <div className="title-head">
            <h1>
              Ever<strong className="green-h">green</strong>&nbsp;Gardens
            </h1>
            <div className="description">
              <p>
                Creating Serene Spaces with Exquisite Indoor and Outdoor Plants.
                Discover a world of botanical wonders, where we bring the beauty
                of nature into your home and garden.
              </p>
            </div>
            <div className="link-header">
              <button
                className="btn-despre"
                type="button"
                onClick={routeChangeContact}
              >
                Contact
              </button>
              <a className="see-more" onClick={routeChangeAbout}>
                See more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-arrow-right-short"
                  viewBox="5 -2 10 15"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="content-tree">
            <img className="image" src={headerimg} alt="tree" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
