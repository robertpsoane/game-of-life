import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class instructions extends Component {
  state = {};
  render() {
    const show = this.props.show;
    const hide = this.props.hide;
    return (
      <Modal show={show} onHide={hide}>
        <Modal.Header>
          <Modal.Title>Instructions</Modal.Title>
        </Modal.Header>
        <div class="alert alert-danger" role="alert">
          Note: This version is currently under construction. The original
          version can be found{" "}
          <a href="https://robertsoane.me/game-of-life-v1/">here</a>.
        </div>
        <Modal.Body>
          <ul>
            <li>Click on the cells in the grid to switch their state.</li>
            <li>
              Black cells represent dead cells, and white cells represent alive
              cells
            </li>
            <li>
              Click <code>Start</code> to start the game, <code>Pause</code> to
              stop the game, and <code>Reset</code> to reset the board{" "}
            </li>
          </ul>

          <div class="alert alert-warning" role="alert">
            These instructions can be brought up again by clicking on the How-To
            button.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            class="btn btn-primary"
            style={{ width: 100 }}
            onClick={hide}
          >
            Ok
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default instructions;