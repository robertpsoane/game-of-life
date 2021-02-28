import React, { Component } from "react";
import "./controls.css";

class Controls extends Component {
  /** Set of control buttons, each are passed a function call via props */
  state = { showAbout: false };

  render() {
    return (
      <div style={{ display: "inline" }}>
        <ul class="btn-group controller" role="group">
          <li
            type="button"
            class="btn btn-success"
            style={{ width: 100 }}
            onClick={this.props.start}
          >
            Start
          </li>

          <li
            type="button"
            class="btn btn-danger"
            style={{ width: 100 }}
            onClick={this.props.pause}
          >
            Pause
          </li>
        </ul>
        <ul class="btn-group controller" role="group">
          <li
            type="button"
            class="btn btn-secondary"
            style={{ width: 100 }}
            onClick={this.props.reset}
          >
            Reset
          </li>
        </ul>
      </div>
    );
  }
}

export default Controls;
