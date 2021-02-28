import React, { Component } from "react";

class Controls extends Component {
  /** Set of control buttons, each are passed a function call via props */
  state = {};
  render() {
    return (
      <div>
        <div
          class="btn-group mini-margin"
          role="group"
          aria-label="Basic example"
        >
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
            class="btn btn-primary"
            style={{ width: 100 }}
            onClick={this.props.pause}
          >
            Pause
          </button>

          <button
            type="button"
            class="btn btn-secondary"
            style={{ width: 100 }}
            onClick={this.props.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Controls;
