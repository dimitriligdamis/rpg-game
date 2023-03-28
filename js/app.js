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

    for (let x = 0; x < 4; x++) {
      const newRow = document.createElement("div");
      newRow.classList.add("row");
      for (let y = 0; y < 6; y++) {
        const newCell = document.createElement("div");
        newCell.classList.add("cell");
        newRow.appendChild(newCell);
      }

      board.appendChild(newRow);
    }
  },

  init: function () {
    console.log("init !");
    app.drawBoard();
  },
};

document.addEventListener("DOMContentLoaded", app.init);

{
  /* <div class="row">
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
</div> */
}
