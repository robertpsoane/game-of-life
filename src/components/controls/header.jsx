import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component {
  /** Header renders some text about the game of life, and an alert
   * warning currently WIP
   */
  state = {};

  render() {
    return (
      <div>
        <h3>Conway's Game of Life</h3>
      </div>
    );
  }
}

export default Header;
