import React from "react";

import Navbar from "./Navbar";
import Headerbar from "./Headerbar";

import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnTop: true,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    let currentScrollPos = window.pageYOffset;
    let maxScroll = 75;
    //console.log(maxScroll);
    if (currentScrollPos >= 0 && currentScrollPos < maxScroll) {
      this.setState({ isOnTop: true });
      //console.log(currentScrollPos);
    } else {
      this.setState({ isOnTop: false });
    }
  };

  render() {
    return (
      <div>
        {this.state.isOnTop ? <Headerbar isTransparent={true} /> : <Navbar />}
      </div>
    );
  }
}
export default Header;
