import React, { Component } from "react";
import Controls from "./controls";
import Header from "./header";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-md">
            <a class="navbar-brand" href="#">
              <Header />
            </a>
          </div>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-md">
            <a class="navbar-brand" href="#">
              <Controls
                reset={this.props.reset}
                start={this.props.start}
                pause={this.props.pause}
              />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
