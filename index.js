function handleBoxClick (event) {
  console.log("== The box was clicked");
  console.log("  -- event.target:", event.target);
  console.log("  -- event.currentTarget:", event.currentTarget);
  event.currentTarget.classList.toggle('highlighted');
  event.stopPropagation();
}

var boxes = document.getElementsByClassName('box');
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', handleBoxClick);
}

window.addEventListener('click', function (event) {
  console.log("== The window was clicked");
  console.log("  -- event.target:", event.target);
});
