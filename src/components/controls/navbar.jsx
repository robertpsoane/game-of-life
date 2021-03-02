import React, { Component } from "react";
import Reset from "./reset";
import StartStop from "./startstop";
import Settings from "./settings";
import Patterns from "./patterns";

class NavBar extends Component {
  state = {};
  // Note could be bg-info instead of primary for navbar
  render() {
    return (
      <nav id="navBar" className="navbar  navbar-dark bg-primary">
        <div className="container-md navbar-brand">
          <h3>The Game of Life</h3>
          <StartStop start={this.props.start} pause={this.props.pause} />
          <Reset reset={this.props.reset} />
          <Patterns
            pattern_grid={this.props.pattern_grid}
            pattern={this.props.pattern}
            grid_dims={this.props.grid_dims}
          />
          <Settings setTime={this.props.timeOut} />
        </div>
      </nav>
    );
  }
}

export default NavBar;
