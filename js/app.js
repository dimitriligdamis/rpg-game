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
      board.appendChild(newRow);
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
    switch (e.key) {
      case "ArrowUp":
        app.moveForward();
        break;
      case "ArrowLeft":
        app.turnLeft();
        break;
      case "ArrowRight":
        app.turnRight();
        break;
      default:
        break;
    }
  },

  init: function () {
    console.log("init !");
    app.drawBoard();
    document.addEventListener("keydown", app.handleKeypress);
  },
};

document.addEventListener("DOMContentLoaded", app.init);
