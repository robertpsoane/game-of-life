import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class instructions extends Component {
  state = {};
  render() {
    const show = this.props.show;
    const hide = this.props.hide;
    return (
      <Modal show={show} onHide={hide} centered>
        <Modal.Header>
          <Modal.Title>Instructions</Modal.Title>
        </Modal.Header>

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
            <li>
              The speed of the animation can be changed in <code>Settings</code>
              .
            </li>
            <li>
              Interesting well-known patterns can be loaded from the{" "}
              <code>Patterns</code> tab.
            </li>
          </ul>

          <div class="alert alert-warning" role="alert">
            These instructions can be brought up again from the Settings menu.
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
