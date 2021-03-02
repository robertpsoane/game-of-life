import React, { Component } from "react";
import "./controls.css";

class StartStop extends Component {
  state = {};
  render() {
    return (
      <div class="btn-group" role="group">
        <div
          type="button"
          class="btn btn-success"
          style={{ width: 100 }}
          onClick={this.props.start}
        >
          Start
        </div>

        <div
          type="button"
          class="btn btn-danger"
          style={{ width: 100, backgroundColor: "dark-red" }}
          onClick={this.props.pause}
        >
          Stop
        </div>
      </div>
    );
  }
}

export default StartStop;
