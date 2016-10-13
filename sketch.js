var bgColor = 'white'

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
    fill(bgColor)
    // fill(bgColor);
    ellipse(250,250,mouseY,mouseY)
  if (mouseX < 2 * windowWidth / 5) {
    bgColor = '#ffcccc';
  } else if (mouseX < 3 * windowWidth / 5) {
    bgColor = '#cc99ff';
  } else if (mouseX < 4 * windowWidth / 5) {
    bgColor = '#0000ff';
  } else if (mouseX < windowWidth / 5) {
    bgColor = '#66ff66';
  } else {
    bgColor = '#ffff99';
  }
}