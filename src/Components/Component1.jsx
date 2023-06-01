import React from "react";
import "../Style/Component1.css";

function Component1() {
  return (
    <div className="component-general">
      <div className="components">
        {/* Eelement Outdoor */}
        <div className="outdoor-comp">
          <div className="plant-icon-bg">
            <svg
              className="plant-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 40.438 40.386"
            >
              <path
                className="plant-icon"
                data-name="Path 123"
                d="M195.912,202.513c4.922,2.674,10.567,3,16.1,3.637a45.254,45.254,0,0,1,7.918,1.467c.551.166,1.1.354,1.644.562a19.375,19.375,0,0,1,4.62,2.5,15.661,15.661,0,0,1,3.444,3.522,26.982,26.982,0,0,1,3.423,7.034,40.115,40.115,0,0,1,2.159,14.234,27.371,27.371,0,0,1-.572,5.9,2.648,2.648,0,0,1-.541,1.269.621.621,0,0,1-1.02-.609c1.238-4.219.468-9.151-1.243-13.183-1.967-4.636-5.764-7.393-10.405-9.073-1.233-.447-2.492-.838-3.772-1.207a.2.2,0,0,0-.078-.01.259.259,0,0,0-.1.494c1.509.682,3.007,1.368,4.433,2.112,6.982,3.642,10.031,12.122,7.414,12.122a1.981,1.981,0,0,1-.749-.177c-4.037-1.67-8.834-1.686-13.272-2.508a22.055,22.055,0,0,1-4.506-1.269,23.088,23.088,0,0,1-12.117-12.538c-1.795-4.146-2.492-9.042-3.85-13.35a.757.757,0,0,1,.692-1.025A.715.715,0,0,1,195.912,202.513Z"
                transform="translate(-194.797 -202.414)"
                fill="#fff"
              />
            </svg>
          </div>
          <h2 className="title-1">Outdoor plants</h2>
          <p className="outdoor-text">
            Outdoor plants enhance outdoor spaces with beauty and vitality.
          </p>
        </div>
        {/* Element Indoor */}
        <div className="outdoor-comp">
          <div className="plant-icon-bg">
            <svg
              id="Group_19"
              data-name="Group 19"
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 54.68 50.916"
            >
              <g id="Group_18" data-name="Group 18" transform="translate(0)">
                <path
                  id="Path_124"
                  data-name="Path 124"
                  d="M53.762,40.056l-8.287-8.287V22.2a3.134,3.134,0,0,0-6.268,0v3.3l-6.17-6.171a8.245,8.245,0,0,0-11.4.006L.918,40.056a3.135,3.135,0,0,0,4.434,4.432L26.07,23.768a1.85,1.85,0,0,1,2.536,0L49.328,44.489a3.135,3.135,0,1,0,4.434-4.432Z"
                  transform="translate(-0.001 -17.047)"
                  fill="#fff"
                />
                <path
                  id="Path_125"
                  data-name="Path 125"
                  d="M89.481,128.2a1.538,1.538,0,0,0-2.177,0l-18.226,18.22a1.543,1.543,0,0,0-.451,1.09V160.8a5.647,5.647,0,0,0,5.647,5.647H83.3V152.471H93.485v13.975h9.024a5.647,5.647,0,0,0,5.647-5.647V147.51a1.537,1.537,0,0,0-.451-1.09Z"
                  transform="translate(-61.052 -115.529)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
          <h2 className="title-1">Indoor plants</h2>
          <p className="outdoor-text">
            Indoor plants bring nature’s charm inside.
          </p>
          {/* Element Maintenance */}
        </div>
        <div className="outdoor-comp">
          <div className="plant-icon-bg">
            <svg
              id="Group_17"
              data-name="Group 17"
              xmlns="http://www.w3.org/2000/svg"
              width="49.545"
              height="50.916"
              viewBox="0 0 49.545 50.916"
            >
              <path
                id="Path_119"
                data-name="Path 119"
                d="M43.259,30.025c-1.251,0-2.264,3.244-2.264,4.494a2.264,2.264,0,0,0,4.528,0C45.523,33.27,44.51,30.025,43.259,30.025Z"
                transform="translate(4.022 3.448)"
                fill="#fff"
              />
              <path
                id="Path_120"
                data-name="Path 120"
                d="M39.673,39.611c-1.251,0-2.264,3.242-2.264,4.493a2.264,2.264,0,0,0,4.528,0C41.937,42.853,40.924,39.611,39.673,39.611Z"
                transform="translate(3.61 4.548)"
                fill="#fff"
              />
              <path
                id="Path_121"
                data-name="Path 121"
                d="M40.774,26.915a6.99,6.99,0,0,0,5.6,3.8,1.3,1.3,0,0,0,1.406-1.487l-1.6-10.941A1.3,1.3,0,0,0,44.4,17.262,6.991,6.991,0,0,0,40.129,22.5L27.682,24.326l6.137-7.78a2.747,2.747,0,0,0-.305-3.731L23.156,3.371a2.748,2.748,0,0,0-3.742.04l-.227.215a10.463,10.463,0,0,0-.836-.86A10.6,10.6,0,0,0,3.856,18.225a2.726,2.726,0,0,0,.132,3.914L16.593,33.632A2.744,2.744,0,0,0,20.6,33.3l3.065-3.884ZM5.846,5.711a7.205,7.205,0,0,1,10.912.226L6.268,15.912A7.263,7.263,0,0,1,5.846,5.711Z"
                transform="translate(-0.615 0)"
                fill="#fff"
              />
            </svg>
          </div>
          <h2 className="title-1">Maintenance</h2>
          <p className="outdoor-text">
            Expert care for plants and green spaces.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Component1;
