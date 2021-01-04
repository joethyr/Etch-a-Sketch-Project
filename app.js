const gridContainer = document.querySelector("#grid-container");
let squaresPerSide = 16;

// define the function that toggles the squares on the grid
function toggleSquares() {
  $(".square").hover(function () {
    $(this).addClass("toggle");
  });
}

// call the function
$(document).ready(function () {
  toggleSquares();
});

function loadGridButton() {
  $("#grid-button").click(function () {
    changeGrid();
  });
}
// call the function
$(document).ready(function () {
  loadGridButton();
});

// prompts the user how many squares per side and then runs createGrid function
function changeGrid() {
  squaresPerSide = parseInt(
    prompt("How many squares do you want on each side of the grid?")
  );
  if (
    squaresPerSide < 1 ||
    squaresPerSide > 100 ||
    Number.isNaN(squaresPerSide)
  ) {
    alert("Please enter a number from 1 to 100.");
    changeGrid();
  } else {
    createGrid(squaresPerSide);
  }
}

//function that removes the toggle class from the grid squares
$(document).ready(function () {
  $("#clear-button").click(function () {
    $(".square").removeClass("toggle");
  });
});

// removes the square class from the gridContainer parent
function removeSquares() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

// function that creates a grid based on the value provided on the 'grid-button' prompt
function createGrid(squaresPerSide) {
  removeSquares();
  $(document).ready(function () {
    toggleSquares();
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

// execute function with requested value
createGrid(16);
