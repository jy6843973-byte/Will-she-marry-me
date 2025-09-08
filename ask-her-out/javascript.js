// Function to move the element randomly
function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 80 + 10) + "%";
  elm.style.left = Math.floor(Math.random() * 80 + 10) + "%";
}

// Select the "No" button by its id
const moveRandom = document.getElementById("move-random");

// Make it move when hovered (PC/laptop)
moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});

// Make it move when touched/clicked (phone)
moveRandom.addEventListener("touchstart", function (e) {
  moveRandomEl(e.target);
});
