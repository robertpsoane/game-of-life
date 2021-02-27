import React, { Component } from "react";
import Cell from "./cell/cell";
import Header from "./headerfooter/header";
import Footer from "./headerfooter/footer";
import "./gameOfLife.css";

const WIDTH = 50;
const HEIGHT = 25;

class Controls extends Component {
  state = {};
  render() {
    return (
      <div class="mini-margin">
        <div class="btn-group " role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-success"
            style={{ width: 100 }}
            onClick={this.props.start}
          >
            Start
          </button>

          <button
            type="button"
            class="btn btn-primary"
            style={{ width: 100 }}
            onClick={this.props.pause}
          >
            Pause
          </button>

          <button
            type="button"
            class="btn btn-secondary"
            style={{ width: 100 }}
            onClick={this.props.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

class GameOfLife extends Component {
  state = {
    grid: [],
    mouseDown: false,
    running: false,
  };

  // Makes grid on load
  componentDidMount() {
    const grid = this.makeGrid(WIDTH, HEIGHT);
    this.setState({ grid: grid });
    this.setState({ mouseDown: false });
  }

  // Handles mouse down on grid
  handleMouseDown(row, col) {
    this.setState({ mouseDown: true });
    this.setState({ grid: this.changeCell(row, col) });
  }

  handleMouseUp() {
    this.setState({ mouseDown: false });
  }

  handleMouseEnter(row, col) {
    console.log(this.state.mouseDown);
    if (!this.state.mouseDown) return;
    this.handleMouseDown(row, col);
  }

  changeCell(row, col) {
    let newGrid = this.state.grid;
    // updates grid switching value of element
    if (newGrid[row][col][0] === 0) {
      newGrid[row][col][0] = 1;
    } else {
      newGrid[row][col][0] = 0;
    }
    return newGrid;
  }

  //   makeAlive(row, col) {
  //     let newGrid = this.state.grid;
  //     newGrid[row][col][0] = 1;
  //     return newGrid;
  //   }

  //   makeDead(row, col) {
  //     let newGrid = this.state.grid;
  //     newGrid[row][col][0] = 0;
  //     return newGrid;
  //   }

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

  startGame() {
    console.log("started");
  }

  pauseGame() {
    console.log("paused");
    this.setState({ running: false });
  }

  render() {
    const { grid } = this.state;
    return (
      <div>
        {/* Adding header with details etc */}
        <header>
          <Header />
        </header>
        {/* Adding grid board */}
        <Controls
          reset={() => this.componentDidMount()}
          start={() => this.startGame()}
          pause={() => this.pauseGame()}
        />
        <div className="board">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx} className="cellrow">
                {row.map((col, colIdx) => {
                  const cell_id = [rowIdx, colIdx];

                  const life =
                    this.state.grid[rowIdx][colIdx][0] === 1 ? "alive" : "dead";

                  return (
                    <Cell
                      key={cell_id}
                      id={cell_id}
                      life={life}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={(row, col) => this.handleMouseUp()}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default GameOfLife;
