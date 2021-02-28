import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class About extends Component {
  state = {};
  render() {
    const show = this.props.show;
    const hide = this.props.hide;
    return (
      <Modal show={show} onHide={hide}>
        <Modal.Header>
          <Modal.Title>About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p class="mini-margin">
            Conway's Game of Life (aka <em>Life</em>) was created by{" "}
            <a href="https://en.wikipedia.org/wiki/John_Horton_Conway">
              {" "}
              John Conway
            </a>
            . The idea is to simulate life in a 2d grid with a set of simple
            rules:
            <ol>
              <li>A live cell with less than 2 living neighbours dies.</li>
              <li>A live cell with 2 or 3 live neighbours survives.</li>
              <li>A live cell with 4+ live neighbours dies.</li>
              <li>A dead cell with 3 live neighbours comes back to life. </li>
            </ol>
          </p>

          <div class="mini-margin">
            <hr />
            <p>
              To find out more about the game, see the{" "}
              <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
                Wikipedia Page
              </a>
              .
            </p>
            <p>
              This was produced by Robert Soane to get exposure to React JS. You
              can find the code on my{" "}
              <a href="https://github.com/robertpsoane/game-of-life">GitHub</a>.
              To see more of my work, checkout{" "}
              <a href="https://robertpsoane.github.io">robertsoane.me</a>.
            </p>
            <hr />
            <p>
              The original simpler version of this React app can be found{" "}
              <a href="https://robertpsoane.github.io/game-of-life-v1/">here</a>
              .
            </p>
            <div class="alert alert-warning" role="alert">
              Note: This is currently a work in progress.
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            class="btn btn-primary"
            style={{ width: 100 }}
            onClick={hide}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default About;
