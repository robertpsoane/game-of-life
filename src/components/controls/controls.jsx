import React, { Component } from "react";
import About from "./about";

class Controls extends Component {
  /** Set of control buttons, each are passed a function call via props */
  state = { showAbout: false };

  showAbout() {
    this.setState({ showAbout: true });
  }

  hideAbout() {
    this.setState({ showAbout: false });
  }
  render() {
    return (
      <div>
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-success"
            style={{ width: 100 }}
            onClick={this.props.start}
          >
            Start
          </button>

          <button
            type="button"
            class="btn btn-danger"
            style={{ width: 100 }}
            onClick={this.props.pause}
          >
            Pause
          </button>
        </div>
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-secondary"
            style={{ width: 100 }}
            onClick={this.props.reset}
          >
            Reset
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            style={{ width: 100 }}
            onClick={() => {
              this.showAbout();
            }}
          >
            About
          </button>
        </div>
        {/** About modal */}
        <About
          show={this.state.showAbout}
          hide={() => {
            this.hideAbout();
          }}
        />
      </div>
    );
  }
}

export default Controls;
