import React, { Component } from "react";

class PatternLink extends Component {
  render() {
    const min_rows = this.props.pattern_params.min_rows;
    const min_cols = this.props.pattern_params.min_cols;

    const n_cols = this.props.grid_dims[0];
    const n_rows = this.props.grid_dims[1];

    const link_class =
      n_rows >= min_rows && n_cols >= min_cols
        ? "dropdown-item"
        : "dropdown-item disabled";

    return (
      <a
        type="button"
        class={link_class}
        onClick={() => {
          this.props.patternFunc("gosper");
        }}
      >
        Gosper Glider Gun
      </a>
    );
  }
}

class Patterns extends Component {
  state = {};
  render() {
    const patterns = this.props.pattern_grid;
    const grid_dims = this.props.grid_wh;
    return (
      <div class="btn-group controller" role="group">
        <div className="dropdown">
          {/* Settings button */}
          <div
            class="btn btn-secondary dropdown-toggle"
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
            <PatternLink
              grid_dims={grid_dims}
              pattern_params={patterns["gosper"]}
              patternFunc={this.props.pattern}
            />
            <a
              type="button"
              class="dropdown-item"
              onClick={() => {
                console.log(patterns["test"]);
              }}
            >
              TEST
            </a>
          </div>
        </div>
        {/** Modals go here */}
      </div>
    );
  }
}

export default Patterns;
