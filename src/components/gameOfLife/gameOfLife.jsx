import React, { Component } from "react";
import Cell from "./cell/cell";
import Header from "./header/header";
import "./gameOfLife.css";

const WIDTH = 50;
const HEIGHT = 25;

class Controls extends Component {
  state = {};
  render() {
    return <p>Controls go here</p>;
  }
}

class GameOfLife extends Component {
  state = {
    grid: [],
  };

  // Makes grid on load
  componentDidMount() {
    const grid = this.makeGrid(WIDTH, HEIGHT);
    this.setState({ grid });
  }

  makeGrid = (x, y) => {
    // Produces array of dead cells on a grid
    const grid = [];
    for (let row = 0; row < y; row++) {
      const currentRow = [];
      for (let col = 0; col < x; col++) {
        currentRow.push([0]);
      }
      grid.push(currentRow);
    }
    return grid;
  };

  render() {
    const { grid } = this.state;

    return (
      <div>
        {/* Adding header with details etc */}
        <header>
          <Header />
        </header>
        {/* Adding grid board */}
        <Controls />
        <div className="board">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx} className="cellrow">
                {row.map((col, colIdx) => {
                  const id = [rowIdx, colIdx];
                  return (
                    <Cell
                      id={id}
                      life={
                        this.state.grid[rowIdx][colIdx][0] === 0
                          ? "dead"
                          : "alive"
                      }
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GameOfLife;
