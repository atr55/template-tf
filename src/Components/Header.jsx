import React from "react";
import "../Style/Header.css";
import headerimg from "../img/tree.png";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigatecontact = useNavigate();
  const routeChangeContact = () => {
    let path = "contact";
    navigatecontact(path);
  };

  let navigateabout = useNavigate();
  const routeChangeAbout = () => {
    let path = "about";
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
              <a onClick={routeChangeAbout}>
                See more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class=""
                  width="25"
                  height="25"
                  viewBox="0 -10 30 30"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.585l-1.999 .001a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l1.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"
                    stroke-width="0"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
                    stroke-width="0"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M6 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
                    stroke-width="0"
                    fill="currentColor"
                  ></path>
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
