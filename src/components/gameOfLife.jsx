import React, { Component } from "react";
import Cell from "./cell/cell";
import Navbar from "./controls/navbar";
import "./gameOfLife.css";
import $ from "jquery";

const GRIDSIZE = 25;

const PATTERN_GRIDS = {
  gosper: {
    grid: [
      [0, -6],
      [-1, -5],
      [-1, -6],
      [-1, -7],
      [-2, -4],
      [-2, -8],
      [-3, -6],
      [-4, -3],
      [-5, -3],
      [-6, -4],
      [-7, -5],
      [-7, -6],
      [-7, -7],
      [-4, -9],
      [-5, -9],
      [-6, -8],
      [-16, -6],
      [-16, -7],
      [-17, -6],
      [-17, -7],
      [3, -7],
      [3, -8],
      [3, -9],
      [4, -7],
      [4, -8],
      [4, -9],
      [5, -6],
      [5, -10],
      [7, -5],
      [7, -6],
      [7, -10],
      [7, -11],
      [17, -8],
      [17, -9],
      [18, -8],
      [18, -9],
    ],
    min_rows: 22,
    min_cols: 36,
  },
  pulsar: {
    grid: [
      [-1, 2],
      [-1, 3],
      [-1, 4],
      [-1, -2],
      [-1, -3],
      [-1, -4],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, -2],
      [1, -3],
      [1, -4],
      [2, 1],
      [3, 1],
      [4, 1],
      [-2, 1],
      [-3, 1],
      [-4, 1],
      [2, -1],
      [3, -1],
      [4, -1],
      [-2, -1],
      [-3, -1],
      [-4, -1],
      [2, 6],
      [3, 6],
      [4, 6],
      [-2, 6],
      [-3, 6],
      [-4, 6],
      [2, -6],
      [3, -6],
      [4, -6],
      [-2, -6],
      [-3, -6],
      [-4, -6],
      [-6, 2],
      [-6, 3],
      [-6, 4],
      [-6, -2],
      [-6, -3],
      [-6, -4],
      [6, 2],
      [6, 3],
      [6, 4],
      [6, -2],
      [6, -3],
      [6, -4],
    ],
    min_rows: 8,
    min_cols: 8,
  },
  blinker: {
    grid: [
      [1, 0],
      [0, 0],
      [-1, 0],
    ],

    min_rows: 6,
    min_cols: 6,
  },
  beacon: {
    grid: [
      [0, 0],
      [-1, 0],
      [-1, -1],
      [0, -1],
      [1, 1],
      [1, 2],
      [2, 1],
      [2, 2],
    ],
    min_rows: 6,
    min_cols: 6,
  },
  pentadecathlon: {
    grid: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 4],
      [0, 5],
      [0, -1],
      [0, -3],
      [0, -4],
      [1, 3],
      [1, -2],
      [-1, 3],
      [-1, -2],
    ],
    min_rows: 16,
    min_cols: 10,
  },
  glider: {
    grid: [
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [0, -1],
    ],
    min_rows: 5,
    min_cols: 5,
  },
  lwss: {
    grid: [
      [-2, -1],
      [-2, 1],
      [-1, 2],
      [0, 2],
      [1, 2],
      [1, -1],
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    min_rows: 7,
    min_cols: 6,
  },
  mwss: {
    grid: [
      [-3, 0],
      [-3, 1],
      [-3, 2],
      [-2, -1],
      [-2, 2],
      [-1, 2],
      [0, -2],
      [0, 2],
      [1, 2],
      [2, 1],
      [2, -1],
    ],
    min_rows: 7,
    min_cols: 8,
  },
  hwss: {
    grid: [
      [-3, 0],
      [-3, 1],
      [-3, 2],
      [-2, -1],
      [-2, 2],
      [-1, 2],
      [0, -2],
      [0, 2],
      [1, -2],
      [1, 2],
      [2, 2],
      [3, 1],
      [3, -1],
    ],
    min_rows: 7,
    min_cols: 9,
  },
  test: { grid: [[0, 0]], min_rows: 1, min_cols: 1 },
};

class GameOfLife extends Component {
  /** Main entry point to the app. */

  // Maintains state of grid, timeout, whether game is running and
  // whether mouse button currently down
  state = {
    grid: [],
    mouseDown: false,
    running: false,
    timeOut: 400,
    neighbours: [
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
    ],
  };

  getWidthHeight() {
    let height;
    let width;
    const navHeight = $("#navBar").height();
    // Just window height
    const docHeight = Math.max($(window).height());
    // maximum height
    // const docHeight = Math.max($(document).height(), $(window).height());

    height = Math.floor((docHeight - navHeight) / GRIDSIZE) - 1;

    width =
      Math.floor(Math.max($(document).width(), $(window).width()) / GRIDSIZE) -
      1;

    return [width, height];
  }

  componentDidMount() {
    /** Runs on load.  Creates grid and sets initial states.  Also used for
     * resetting app  */
    const dims = this.getWidthHeight();
    const grid = this.makeGrid(dims[0], dims[1]);
    this.setState({ grid: grid, mouseDown: false, running: false, dims: dims });
  }

  handleMouseDown(row, col) {
    /** Called by cells when clicked - sets mouseDown to true and starts
     * to change state */
    this.setState({ mouseDown: true, grid: this.changeCell(row, col) });
  }

  handleMouseUp() {
    /** Sets mouseDown false when mouse button released */
    this.setState({ mouseDown: false });
  }

  setTimeOut() {
    const new_time = 800 - $("#time-out-slider").val();
    this.setState({ timeOut: new_time });
  }

  handleMouseEnter(row, col) {
    /** Called when mouse over a cell.  If mouse is down, then 'clicks' cell */
    if (!this.state.mouseDown) return;
    this.handleMouseDown(row, col);
  }

  // Pattern Handlers
  handlePattern(patternType) {
    const livingCells = PATTERN_GRIDS[patternType]["grid"];
    const center = this.getMidPoint();
    const grid = this.state.grid;
    livingCells.forEach((cell) => {
      const centerRow = center[1];
      const centerCol = center[0];
      const shiftRow = cell[1];
      const shiftCol = cell[0];

      grid[centerRow + shiftRow][centerCol + shiftCol][0] = 1;
    });
    this.setState({ grid: grid });
  }

  getMidPoint() {
    const dims = this.state.dims;

    const xCenter = Math.floor(dims[0] / 2);
    const yCenter = Math.floor(dims[1] / 2);

    return [xCenter, yCenter];
  }

  changeCell(row, col) {
    /** Takes a cell and flips value from alive to dead and vice
     * versa */

    let newGrid = this.state.grid;
    // updates grid switching value of element
    if (newGrid[row][col][0] === 0) {
      newGrid[row][col][0] = 1;
    } else {
      newGrid[row][col][0] = 0;
    }
    return newGrid;
  }

  makeGrid = (x, y) => {
    /** Produces a grid of dead cells with x columns and y rows */
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
    /** Starts running game:
     * - Sets running state to true
     * - Sets timeout to run a step after the timeout
     */
    this.setState({ running: true });
    this.timeoutHandler = window.setTimeout(() => {
      this.runStep();
    }, this.state.timeOut);
  }

  pauseGame() {
    /** Stops running game */
    this.setState({ running: false });
  }

  countLivingNeighbours(grid, row, col) {
    /** Counts number of direct neighbours to a cell that are alive on
     * a given grid.  Uses neighbours vector to store al permutations
     */
    const dims = this.state.dims;
    const neighbours = this.state.neighbours;
    let count = 0;
    for (let i = 0; i < 8; i++) {
      const neighbour = neighbours[i];
      const rown = row + neighbour[0];
      const coln = col + neighbour[1];
      if (rown > 0 && coln > 0 && rown < dims[1] && coln < dims[0]) {
        if (grid[rown][coln][0] === 1) {
          count++;
        }
      }
    }
    return count;
  }

  runStep() {
    /** Runs a generation of the Game of Life
     * - Checks if running
     * - Iterates over grid, building the grid for the next generation
     * based on rules of game of life
     * - Sets a timeout to run again
     */
    if (!this.state.running) {
      return;
    }
    const dims = this.state.dims;
    let oldGrid = this.state.grid;
    let newGrid = [];

    for (let row = 0; row < dims[1]; row++) {
      let newRow = [];
      for (let col = 0; col < dims[0]; col++) {
        if (oldGrid[row][col][0] === 0) {
          if (this.countLivingNeighbours(oldGrid, row, col) === 3) {
            newRow.push([1]);
          } else {
            newRow.push([0]);
          }
        } else {
          const living = this.countLivingNeighbours(oldGrid, row, col);

          if ((living === 2) | (living === 3)) {
            newRow.push([1]);
          } else {
            newRow.push([0]);
          }
        }
      }
      newGrid.push(newRow);
    }
    this.setState({ grid: newGrid });

    this.timeoutHandler = window.setTimeout(() => {
      console.log(this.state.timeOut);
      this.runStep();
    }, this.state.timeOut);
  }

  render() {
    /** render function - renders game of life on screen */
    const { grid } = this.state;

    let dims;
    if (typeof this.state.dims !== "undefined") {
      dims = this.state.dims;
    } else {
      dims = this.getWidthHeight();
    }

    return (
      <div>
        {/* Adding header component with Game of Life info */}
        <header>
          <Navbar
            grid_dims={dims}
            pattern={(p) => this.handlePattern(p)}
            pattern_grid={PATTERN_GRIDS}
            reset={() => this.componentDidMount()}
            start={() => this.startGame()}
            pause={() => this.pauseGame()}
            timeOut={() => this.setTimeOut()}
          />
        </header>
        {/* Adding controls to grid board */}

        {/* Render grid of divs representing our board */}
        <div className="board">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx} className="cellrow">
                {row.map((col, colIdx) => {
                  const cell_id = [rowIdx, colIdx];
                  // Passes life prop to div based on value of element
                  // on grid array
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
      </div>
    );
  }
}

export default GameOfLife;
