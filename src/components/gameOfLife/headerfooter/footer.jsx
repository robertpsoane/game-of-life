import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div class="mini-margin">
        <p>
          To find out more about the game, see the{" "}
          <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
            Wikipedia Page
          </a>
          .
        </p>
        <p>
          Produced by Robert Soane. To see more of my work, checkout{" "}
          <a href="https://robertsoane.me">robertsoane.me</a>
        </p>
      </div>
    );
  }
}

export default Footer;
