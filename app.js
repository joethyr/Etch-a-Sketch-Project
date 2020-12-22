function changeColor() {
  $(this).css("background", "white");
  console.log("hello");
}

$(document).ready(function () {
  $(".square").hover(function () {
    $(this).addClass("toggle");
  });
});

for (i = 0; i < 256; i++) {
  const grid = document.createElement("div");
  grid.className = "square";

  document.getElementById("grid").appendChild(grid);
}
