const gridContainer = document.querySelector("#grid-container");
let squaresPerSide = "";

$(document).ready(function () {
  $(".square").hover(function () {
    $(this).addClass("toggle");
  });
});

$(document).ready(function () {
  $("#clear-button").click(function () {
    $(".square").removeClass("toggle");
  });
});

function createGrid(squaresPerSide) {
  gridContainer.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr`;
  gridContainer.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr`;
  let squaresTotal = squaresPerSide * squaresPerSide;
  for (i = 0; i < squaresTotal; i++) {
    const grid = document.createElement("div");
    grid.className = "square";
    document.getElementById("grid-container").appendChild(grid);
  }
}

createGrid(16);
