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

  init: function () {
    console.log("init !");
  },
};

document.addEventListener("DOMContentLoaded", app.init);
