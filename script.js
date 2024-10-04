let scaleFactor = 1;
let speed = 0.02; // Speed of "movement" into the tunnel

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255);
  background(0); // Black background for contrast
}

function draw() {
  background(0); // Clear screen each frame

  let centerX = width / 2;
  let centerY = height / 2;
  let size = min(width, height) * 0.5 * scaleFactor; // Scale changes dynamically

  // Draw triangles infinitely as we "move inward"
  drawTunnel(centerX, centerY, size);

  // Update scaleFactor to create the inward tunnel effect
  scaleFactor *= 1 + speed; // Increasing scaleFactor simulates moving inward
}

function drawTunnel(x, y, size) {
  let depth = 0; // Initialize depth

  // Loop to keep drawing triangles infinitely
  while (size > 1) {
    // Draw the upward triangle at even depths
    if (depth % 2 === 0) {
      drawUpwardTriangle(x, y, size);
    } 
    // Draw the downward triangle at odd depths
    else {
      drawDownwardTriangle(x, y, size);
    }

    // Scale down for the next triangle
    size *= 0.5; // Scale the next triangle down to half the size
    depth++;
  }
}

function drawUpwardTriangle(x, y, size) {
  beginShape();
  for (let i = 0; i < 3; i++) {
    let angle = TWO_PI / 3 * i - PI / 2; // Triangle points upwards
    let vx = x + cos(angle) * size / 2;
    let vy = y + sin(angle) * size / 2;
    vertex(vx, vy);
  }
  endShape(CLOSE);
}

function drawDownwardTriangle(x, y, size) {
  beginShape();
  for (let i = 0; i < 3; i++) {
    let angle = TWO_PI / 3 * i + PI / 2; // Triangle points downwards
    let vx = x + cos(angle) * size / 2;
    let vy = y + sin(angle) * size / 2;
    vertex(vx, vy);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0); // Reset background on resize
}