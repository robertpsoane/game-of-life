import React, { Component } from "react";

class PatternLink extends Component {
  render() {
    const min_rows = this.props.patterns[this.props.pattern_arg].min_rows;
    const min_cols = this.props.patterns[this.props.pattern_arg].min_cols;

    const n_cols = this.props.grid_dims[0];
    const n_rows = this.props.grid_dims[1];

    const link_class =
      n_rows >= min_rows && n_cols >= min_cols
        ? "dropdown-item"
        : "dropdown-item disabled";

    return (
      <a
        type="button"
        className={link_class}
        onClick={() => {
          this.props.patternFunc(this.props.pattern_arg);
        }}
      >
        {this.props.text}
      </a>
    );
  }
}

class Patterns extends Component {
  state = {};
  render() {
    const patterns = this.props.pattern_grid;
    const grid_dims = this.props.grid_dims;
    return (
      <div className="btn-group controller" role="group">
        <div className="dropdown">
          {/* Settings button */}
          <div
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Patterns
          </div>

          {/* Settings Drop Down */}
          <div
            className="dropdown-menu dropdown-menu"
            aria-labelledby="dropdownMenuButton"
          >
            <h6 class="dropdown-header">Oscillators</h6>
            <PatternLink
              text="Blinker"
              pattern_arg="blinker"
              grid_dims={grid_dims}
              patterns={patterns}
              patternFunc={this.props.pattern}
            />
            <PatternLink
              text="Beacon"
              pattern_arg="beacon"
              grid_dims={grid_dims}
              patterns={patterns}
              patternFunc={this.props.pattern}
            />
            <PatternLink
              text="Pulsar"
              pattern_arg="pulsar"
              grid_dims={grid_dims}
              patterns={patterns}
              patternFunc={this.props.pattern}
            />
            <PatternLink
              text="Penta-decathlon"
              pattern_arg="pentadecathlon"
              grid_dims={grid_dims}
              patterns={patterns}
              patternFunc={this.props.pattern}
            />
            <hr />
            <h6 class="dropdown-header">Spaceships</h6>
            <PatternLink
              text="Glider"
              pattern_arg="glider"
              grid_dims={grid_dims}
              patterns={patterns}
              patternFunc={this.props.pattern}
            />
            <PatternLink
              text="Lightweight spaceship"
              pattern_arg="lwss"
              grid_dims={grid_dims}
              patterns={patterns}
              patternFunc={this.props.pattern}
            />
            <PatternLink
              text="Middleweight spaceship"
              pattern_arg="mwss"
              grid_dims={grid_dims}
              patterns={patterns}
              patternFunc={this.props.pattern}
            />
            <PatternLink
              text="Heavyweight spaceship"
              pattern_arg="hwss"
              grid_dims={grid_dims}
              patterns={patterns}
              patternFunc={this.props.pattern}
            />
            <hr />
            <h6 class="dropdown-header">Guns</h6>
            <PatternLink
              text="Gosper Glider Gun"
              grid_dims={grid_dims}
              pattern_arg="gosper"
              patterns={patterns}
              patternFunc={this.props.pattern}
            />
          </div>
        </div>
        {/** Modals go here */}
      </div>
    );
  }
}

export default Patterns;
