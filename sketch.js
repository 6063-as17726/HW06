let font;
let size = 40;
let s0 = "The way a crow"; 
let xPos;
let yPos = 50; 
let yVel = 2;   
let words;

function preload() {
  // Load your font here if needed
  // font = loadFont("./ostrich-sans-regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");
  textSize(size);
  textAlign(LEFT, TOP);
  fill(255);
  words = s0.split(" ");
  xPos = width / 2;
}

function draw() {
  background(0, 191, 255); 
  let distance = height / words.length; 
  let y = distance; 
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toUpperCase(); 
    text(word, xPos, yPos);
    yPos += yVel; 
    if (yPos > height) {
      yPos = 50; 
    } 
  } 
}
