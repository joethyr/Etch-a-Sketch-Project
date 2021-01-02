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

$(document).ready(function () {
  $("#clearButton").click(function () {
    $(".square").removeClass("toggle");
  });
});
