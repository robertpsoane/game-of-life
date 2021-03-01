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
      <ul className="btn-group controller" role="group">
        <div className="dropdown">
          {/* Settings button */}
          <div
            className="btn btn-secondary dropdown-toggle"
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
              <label for="time-out-slider" className="form-label">
                Speed
              </label>
              <br />
              <input
                type="range"
                className="form-range"
                id="time-out-slider"
                min="0"
                max="980"
                step="10"
                defaultValue="500"
                onChange={this.props.setTime}
              ></input>
            </div>
            <hr />
            <a
              type="button"
              className="dropdown-item"
              onClick={() => {
                this.showHowTo();
              }}
            >
              Help
            </a>
            <a
              type="button"
              className="dropdown-item"
              onClick={() => {
                this.showAbout();
              }}
            >
              About
            </a>
          </div>
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
      </ul>
    );
  }
}

export default Settings;
