import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header";
import Body from "./component/body";
import Footer from "./component/footer";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
