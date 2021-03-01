import React, { Component } from "react";
import Reset from "./reset";
import StartStop from "./startstop";
import Settings from "./settings";

class NavBar extends Component {
  state = {};
  // Note could be bg-info instead of primary for navbar
  render() {
    return (
      <nav id="navBar" class="navbar  navbar-dark bg-primary">
        <div class="container-md navbar-brand">
          <h3 style={{ display: "inline" }}>Conway's Game of Life</h3>
          <StartStop start={this.props.start} pause={this.props.pause} />
          <Reset reset={this.props.reset} />
          <Settings setTime={this.props.timeOut} />
        </div>
      </nav>
    );
  }
}

export default NavBar;