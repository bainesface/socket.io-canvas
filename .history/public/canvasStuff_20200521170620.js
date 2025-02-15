function init() {
  console.log(orbs);
  draw();
}

// ==================================
// ==============DRAWING=============
// ==================================

player.locX = Math.floor(500 * Math.random() + 100);
player.locY = Math.floor(500 * Math.random() + 100);

function draw() {
  // clear the screen out so the old stuff is gone from the last frame
  context.clearRect(0, 0, canvas.width, canvas.height);

  // reset the translation back to default
  context.setTransform(1, 0, 0, 1, 0, 0);

  // clamp the camera to the player
  const camX = -player.locX + canvas.width / 2;
  const camY = -player.locY + canvas.height / 2;

  // translate allows us to move the canvas around
  context.translate(camX, camY);

  context.beginPath();
  context.fillStyle = 'rgb(255,0,0)';
  // arg 1 & 2 = x & y of the center of the arc
  // arg 3 = radius
  // arg 4 = where to start on the circle in radians, 0 = 3 o'clock
  // arg 5 = where to stop on the circle in radians, 15minutes = 0.5PI
  context.arc(player.locX, player.locY, 10, 0, Math.PI * 2);
  context.arc(200, 200, 10, 0, Math.PI * 2);
  context.fill();
  context.lineWidth = 3;
  context.strokeStyle = 'rgb(0,255,0)';
  context.stroke();
  requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', (event) => {
  console.log(event);
  const mousePosition = {
    x: event.clientX,
    y: event.clientY,
  };
  const angleDeg =
    (Math.atan2(
      mousePosition.y - canvas.height / 2,
      mousePosition.x - canvas.width / 2
    ) *
      180) /
    Math.PI;
  if (angleDeg >= 0 && angleDeg < 90) {
    //mouse is in the lower right quadrant
    console.log('mouse is in the lower right quadrant');
    xVector = 1 - angleDeg / 90;
    yVector = -(angleDeg / 90);
  } else if (angleDeg >= 90 && angleDeg <= 180) {
    //mouse is in the lower left quadrant
    console.log('mouse is in the lower left quadrant');
    xVector = -(angleDeg - 90) / 90;
    yVector = -(1 - (angleDeg - 90) / 90);
  } else if (angleDeg >= -180 && angleDeg < -90) {
    //mouse is in the upper left quadrant
    console.log('mouse is in the upper left quadrant');
    xVector = (angleDeg + 90) / 90;
    yVector = 1 + (angleDeg + 90) / 90;
  } else if (angleDeg < 0 && angleDeg >= -90) {
    //mouse is in the upper right quadrant
    console.log('mouse is in the upper right quadrant');
    xVector = (angleDeg + 90) / 90;
    yVector = 1 - (angleDeg + 90) / 90;
  }

  speed = 10;
  xV = xVector;
  yV = yVector;

  if (
    (player.locX < 5 && player.xVector < 0) ||
    (player.locX > 500 && xV > 0)
  ) {
    player.locY -= speed * yV;
  } else if ((player.locY < 5 && yV > 0) || (player.locY > 500 && yV < 0)) {
    player.locX += speed * xV;
  } else {
    player.locX += speed * xV;
    player.locY -= speed * yV;
  }
});
