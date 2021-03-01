import React, { Component } from "react";
import "./controls.css";

class StartStop extends Component {
  state = {};
  render() {
    return (
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
          style={{ width: 100, backgroundColor: "dark-red" }}
          onClick={this.props.pause}
        >
          Pause
        </li>
      </ul>
    );
  }
}

export default StartStop;
