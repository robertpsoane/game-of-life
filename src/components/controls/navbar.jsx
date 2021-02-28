import React, { Component } from "react";
import Controls from "./controls";
import About from "./about";
import Instructions from "./instructions";

class NavBar extends Component {
  state = { showAbout: false, showHowTo: true };

  showAbout() {
    this.setState({ showAbout: true });
  }

  hideAbout() {
    this.setState({ showAbout: false });
  }

  showHowTo() {
    this.setState({ showHowTo: true });
  }

  hideHowTo() {
    this.setState({ showHowTo: false });
  }

  render() {
    return (
      <div>
        <nav id="navBar" class="navbar  navbar-dark bg-primary">
          <div class="container-md">
            <div class="navbar-brand">
              <h3 style={{ display: "inline" }}>Conway's Game of Life</h3>
              <Controls
                reset={this.props.reset}
                start={this.props.start}
                pause={this.props.pause}
              />

              <ul class="btn-group controller" role="group">
                <li
                  type="button"
                  class="btn btn-secondary"
                  style={{ width: 100 }}
                  onClick={() => {
                    this.showHowTo();
                  }}
                >
                  How-to
                </li>
                <li
                  type="button"
                  class="btn btn-secondary"
                  style={{ width: 100 }}
                  onClick={() => {
                    this.showAbout();
                  }}
                >
                  About
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/** Modals go here */}
        <About
          show={this.state.showAbout}
          hide={() => {
            this.hideAbout();
          }}
        />
        <Instructions
          show={this.state.showHowTo}
          hide={() => {
            this.hideHowTo();
          }}
        />
      </div>
    );
  }
}

export default NavBar;
