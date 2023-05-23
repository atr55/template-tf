import React from "react";
import "../Style/Home.css";
import Header from "../Components/Header";
import Component1 from "../Components/Compont1";

function Home() {
  return (
    <div className="home_general">
      <div className="home_1">
        <div>
          <Header />
        </div>
        <div>
          <Component1 />
        </div>
      </div>
    </div>
  );
}

export default Home;
