import React from "react";

import Banner from "./Banner";
import Experience from "./Experience";
import Special from "./Special";
import Weather from "./Weather";

import "./Body.css";

class Body extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <Weather />
        <Experience />
        <Special />
      </div>
    );
  }
}
export default Body;
