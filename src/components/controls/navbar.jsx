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
            <div class="navbar-brand">
              <Controls
                reset={this.props.reset}
                start={this.props.start}
                pause={this.props.pause}
              />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
