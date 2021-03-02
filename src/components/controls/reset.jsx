import React, { Component } from "react";
import "./controls.css";

class Reset extends Component {
  /** Set of control buttons, each are passed a function call via props */
  state = { showAbout: false };

  render() {
    return (
      <div>
        <div
          type="button"
          class="btn btn-secondary"
          style={{ width: 100 }}
          onClick={this.props.reset}
        >
          Reset
        </div>
      </div>
    );
  }
}

export default Reset;
