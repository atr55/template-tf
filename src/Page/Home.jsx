import React from "react";
import "../Style/Home.css";
import Header from "../Components/Header";
import Component1 from "../Components/Component1";
import Component2 from "../Components/Component2";

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
        <div>
          <Component2 />
        </div>
      </div>
    </div>
  );
}

export default Home;
