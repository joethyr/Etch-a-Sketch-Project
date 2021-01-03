const gridContainer = document.querySelector("#grid-container");
let squaresPerSide = "";

$(function () {
  $(".square").hover(function () {
    $(this).addClass("toggle");
  });
});

$(function () {
  $("#grid-button").click(function () {
    squaresPerSide = prompt(
      "How many squares do you want on each side of the grid?"
    );
    removeCells();
    createGrid(squaresPerSide);
  });
});

$(document).ready(function () {
  $("#clear-button").click(function () {
    $(".square").removeClass("toggle");
  });
});

function createGrid(squaresPerSide) {
  $(function () {
    $(".square").hover(function () {
      $(this).addClass("toggle");
    });
  });
  gridContainer.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr`;
  gridContainer.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr`;
  let squaresTotal = squaresPerSide * squaresPerSide;
  for (i = 0; i < squaresTotal; i++) {
    const grid = document.createElement("div");
    grid.className = "square";
    document.getElementById("grid-container").appendChild(grid);
  }
}

function removeCells() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

createGrid(16);
