const app = {
  player: {
    x: 0,
    y: 0,
    direction: "right",
  },

  targetCell: {
    x: 5,
    y: 3,
  },

  boardSize: {
    row: 4,
    cell: 6,
  },

  counter: 0,

  gameOver: false,

  isGameOver: function () {
    if (
      app.player.y === app.targetCell.y &&
      app.player.x === app.targetCell.x
    ) {
      app.gameOver = true;
      setTimeout(() => {
        alert(`You win in ${app.counter} move`);
      });
    }
  },

  handleReset: function () {
    const resetBtn = document.getElementById("reset");

    resetBtn.addEventListener("click", () => {
      app.player.x = 0;
      app.player.y = 0;
      app.player.direction = "right";
      app.gameOver = false;
      app.counter = 0;
      app.redrawBoard();
    });
  },

  drawBoard: function () {
    const board = document.getElementById("board");

    //* Double for loop to create row and cell in the board
    for (let y = 0; y < app.boardSize.row; y++) {
      const newRow = document.createElement("div");
      newRow.classList.add("row");
      for (let x = 0; x < app.boardSize.cell; x++) {
        const newCell = document.createElement("div");
        newCell.classList.add("cell");

        //* Condition to add player and target classname
        if (x === app.targetCell.x && y === app.targetCell.y) {
          newCell.classList.add("targetCell");
        }
        if (x === app.player.x && y === app.player.y) {
          newCell.classList.add("player", `player--${app.player.direction}`);
        }
        newRow.appendChild(newCell);
      }

      board.append(newRow);
    }
  },

  clearBoard: function () {
    const board = document.getElementById("board");
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }
  },

  redrawBoard: function () {
    app.clearBoard();
    app.drawBoard();
    app.isGameOver();
  },

  turnLeft: function () {
    switch (app.player.direction) {
      case "right":
        app.player.direction = "up";
        break;
      case "up":
        app.player.direction = "left";
        break;
      case "left":
        app.player.direction = "down";
        break;
      case "down":
        app.player.direction = "right";
        break;
      default:
        break;
    }
    app.redrawBoard();
  },

  turnRight: function () {
    switch (app.player.direction) {
      case "right":
        app.player.direction = "down";
        break;
      case "down":
        app.player.direction = "left";
        break;
      case "left":
        app.player.direction = "up";
        break;
      case "up":
        app.player.direction = "right";
        break;
      default:
        break;
    }
    app.redrawBoard();
  },

  moveForward: function () {
    if (
      app.player.direction === "right" &&
      app.player.x < app.boardSize.cell - 1
    ) {
      app.player.x++;
    }
    if (app.player.direction === "left" && app.player.x > 0) {
      app.player.x--;
    }
    if (app.player.direction === "up" && app.player.y > 0) {
      app.player.y--;
    }
    if (
      app.player.direction === "down" &&
      app.player.y < app.boardSize.row - 1
    ) {
      app.player.y++;
    }

    app.redrawBoard();
  },

  handleKeypress: function (e) {
    if (app.gameOver) {
      return;
    }
    switch (e.key) {
      case "ArrowUp":
        app.moveForward();
        app.counter++;
        break;
      case "ArrowLeft":
        app.turnLeft();
        app.counter++;
        break;
      case "ArrowRight":
        app.turnRight();
        app.counter++;
        break;
      default:
        break;
    }
  },

  init: function () {
    console.log("init !");
    app.handleReset();
    app.redrawBoard();
    document.addEventListener("keydown", app.handleKeypress);
  },
};

document.addEventListener("DOMContentLoaded", app.init);
