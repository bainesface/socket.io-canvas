function init() {
  draw();
}

// ==================================
// ==============DRAWING=============
// ==================================
let randomX = Math.floor(500 * Math.random() + 10);
let randomY = Math.floor(500 * Math.random() + 10);
console.log(randomX, randomY);
function draw() {
  context.beginPath();
  context.fillStyle = 'rgb(255,0,0)';
  context.arc();
}
