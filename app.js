$(document).ready(function () {
  $(".square").hover(
    function () {
      $(this).css("background", "black");
    },
    function () {
      $(this).css("background", "black");
    }
  );
});

for (i = 0; i < 256; i++) {
  const grid = document.createElement("div");
  grid.className = "square";
  document.getElementById("grid").appendChild(grid);
}
