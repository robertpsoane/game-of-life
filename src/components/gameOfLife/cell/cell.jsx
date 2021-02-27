import React, { Component } from "react";
import "./cell.css";

class Cell extends Component {
  state = {
    id: this.props.id,
    divId: "cell:" + this.props.id[0] + "," + this.props.id[1],
    life: this.props.life,
  };
  dims = {
    width: 20,
    height: 20,
  };

  render() {
    const cssClass = "cell cell-" + this.state.life;
    return (
      <div id={this.state.divId} className={cssClass} style={this.dims}></div>
    );
  }
}

export default Cell;
