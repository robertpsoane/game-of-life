import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./about";
import Instructions from "./instructions";

class Settings extends Component {
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
      <div className="dropdown">
        {/* Settings button */}
        <div
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Settings
        </div>

        {/* Settings Drop Down */}
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenuButton"
        >
          <div className="dropdown-item">
            <label for="time-out-slider" class="form-label">
              Speed
            </label>
            <br />
            <input
              type="range"
              class="form-range"
              id="time-out-slider"
              min="0"
              max="799"
              step="1"
              defaultValue="400"
              onChange={this.props.setTime}
            ></input>
          </div>
          <hr />
          <a
            type="button"
            class="dropdown-item"
            onClick={() => {
              this.showHowTo();
            }}
          >
            Help
          </a>
          <a
            type="button"
            class="dropdown-item"
            onClick={() => {
              this.showAbout();
            }}
          >
            About
          </a>
        </div>
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

export default Settings;
