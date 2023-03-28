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

  drawBoard: function () {
    const board = document.getElementById("board");

    //* Double for loop to create row and cell in the board
    for (let y = 0; y < 4; y++) {
      const newRow = document.createElement("div");
      newRow.classList.add("row");
      for (let x = 0; x < 6; x++) {
        const newCell = document.createElement("div");
        newCell.classList.add("cell");

        //* Condition to add player and target classname
        if (x === app.targetCell.x && y === app.targetCell.y) {
          newCell.classList.add("targetCell");
        }
        if (x === app.player.x && y === app.player.y) {
          newCell.classList.add("player");
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

  init: function () {
    console.log("init !");
    app.drawBoard();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
