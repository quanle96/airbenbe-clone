import React from "react";
import Banner from "./banner";
import Experience from "./experience";
import Special from "./special";
class Body extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <Experience />
        <Special />
      </div>
    );
  }
}
export default Body;
