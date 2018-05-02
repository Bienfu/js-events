function handleBoxClick (event) {
  console.log("== The box was clicked");
  console.log("  -- event.target:", event.target);
  console.log("  -- event.currentTarget:", event.currentTarget);
  event.currentTarget.classList.toggle('highlighted');
  // event.stopPropagation();
}

var boxes = document.getElementsByClassName('box');
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', handleBoxClick);
}

window.addEventListener('click', function (event) {
  console.log("== The window was clicked");
  console.log("  -- event.target:", event.target);
});

var linkElement = document.getElementById('website-link');
linkElement.addEventListener('click', function (event) {
  event.preventDefault();
  console.log("== Link was clicked");
});

var boxContainer = document.getElementById('box-container');
boxContainer.addEventListener('click', function (event) {
  console.log("== Box container was clicked");
  if (event.target.classList.contains('in-box-button')) {
    alert("A button was clicked");
  }
});
